//import libraries
const { get } = require('axios') //http requests 
const { load } = require('cheerio') //html parsing
const { createObjectCsvWriter } = require('csv-writer') //data storage

const csvWriter = createObjectCsvWriter({
  path: 'titles.csv',
  header: [
    { id: 'Titles', title: 'Data' }
  ]
});

//example urls; put any in string form to be processed
const urls = [
  "https://www.google.com",
  "https://www.wikipedia.org",
  "https://www.reddit.com",
  "https://www.github.com",
  "https://www.stackoverflow.com",
  "https://www.medium.com",
  "https://www.bbc.com",
  "https://www.cnn.com",
  "https://www.nytimes.com",
  "https://www.twitter.com",
  "https://www.facebook.com",
  "https://www.linkedin.com",
  "https://www.instagram.com",
  "https://www.pinterest.com"
]

// Accessing and reading the robots.txt file is a key part of ethically scraping data.
// It's like a guide for what bots can and shouldn't access and the amount of requests 
// bots are allowed to make in a given amount of time.
async function getRobotsTxt(baseUrl) {
  try {
    const robotsTxtUrl = `${baseUrl}/robots.txt`
    const { data } = await get(robotsTxtUrl)
    return data
  } catch (error) {
    console.error(`Failed to fetch robots.txt from ${baseUrl}:`, error.message)
    return 0;
  }
}

//now we interpret the guide and save it's rules to variables.
function parseRobotsTxt(robotsTxt) {

  //map disallowed paths; sites we should avoid. 

  const disallowedPaths = (robotsTxt.match(/Disallow: (.+)/g) || []).map(line => line.replace('Disallow: ', '').trim())

  //match the files crawldelay to ensure servers aren't overwhelmed (vital for small websites)

  const crawlDelayMatch = robotsTxt.match(/Crawl-delay: (\d+)/)

  //parsing to a proper variable. 
  //defaults to 0.7 seconds if no crawlDelay is present

  const crawlDelay = crawlDelayMatch ? parseInt(crawlDelayMatch[1], 10) * 1000 : 700

  return { disallowedPaths, crawlDelay }
}

//basically just ensures that the url you start with isn't itself disallowed for bots.

function isUrlDisallowed(url, disallowedPaths) {
  const urlPath = new URL(url).pathname;
  return disallowedPaths.some(disallowedPath => {
    if (!disallowedPath) return false;
    if (disallowedPath === '/') return false;
    return urlPath.startsWith(disallowedPath);
  });
}

//typical scraping with our custom crawl delay and allowed path checks
async function scrapeTitles() {
  try {
    const titles = []

    for (const baseUrl of urls) {
      try {
        //check if we're allowed
        const robotsTxt = await getRobotsTxt(new URL(baseUrl).origin)
        const { disallowedPaths, crawlDelay } = parseRobotsTxt(robotsTxt)

        //if not move onto next url
        if (isUrlDisallowed(baseUrl, disallowedPaths)) {
          console.log(`Scraping disallowed for ${baseUrl} according to robots.txt`)
          continue;
        }

        //fetch page content
        const { data } = await get(baseUrl)

        //load and parse page content to extract titles
        const $ = load(data);
        $("title").each((i, element) => {
          const titleText = $(element).text().trim()
          if (titleText) {
            titles.push({ title: titleText })
          }
        })
        
        //set a delay between each site request
        await new Promise(resolve => setTimeout(resolve, crawlDelay + 500))
      } catch (err) {
        console.error(`Failed to fetch ${baseUrl}:`, err.message)
      }
    }

    //write extracted titles to our cvs file.
    await csvWriter.writeRecords(titles)
    console.log('Titles have been written to titles.csv')
  } catch (err) {
    console.error('An error occurred during the scraping process:', err.message)
  }
}

scrapeTitles();
