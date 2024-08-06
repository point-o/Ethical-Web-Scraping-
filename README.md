# Ethical Web Scraping Recomendations (A legal overview)

## Features
- **Respect for robots.txt**: Fetches and interprets the robots.txt file to comply with site-specific scraping rules.
- **Crawl Delay**: Implements a delay between requests to avoid overwhelming servers.
- **Title Extraction**: Extracts and saves page titles from a list of URLs to a CSV file.
- **Error Handling**: Provides basic error handling and logging for robustness.

## Getting Started

### Prerequisites
Ensure you have Node.js installed on your system with Axios, Cheerio, and csv-parser.

- Install Node.js: https://nodejs.org/en
- Install Axios, Cheerio, and CSV Parser: npm install axios cheerio csv-parser

## A note:
- The current legal grey-area for web-scraping is worrying to say the least. Most court cases including web-scraping are often won by companies with comprehensive court teams. With precedents flipping often and without proper leglislation being passed.
- Web-Scraping is a widely used practice across various industries, often for market research, price monitoring and data collection for machine learning.
- Scraping publicly accessible data is generally more acceptable, as seen in the hiQ Labs v. LinkedIn case, where the court ruled in favor of hiQ Labs for scraping public LinkedIn profiles.
- But many websites have terms of service that explicitly prohibit scraping. Violating these terms can lead to legal action, as in the case of Clearview AI.
- The CFAA is often cited in web scraping cases. The interpretation of this law can vary, but it generally focuses on unauthorized access. The Van Buren v. United States case narrowed its scope, emphasizing unauthorized access rather than exceeding authorized access.
- So it's just a big 'ol grey area. So for personal use, I'd reccomend using the type of format shown in this project. But this of course isn't plausible for larger companies, which I guess isn't my problem yet since I'm not at the age to be in such companies.

## In summary:
- I am by no means anywhere close to understanding the full breadth of this topic.
- This program purely aims to showcase what 'ethical' web-scraping could look like for smaller projects, like mine, just scraping titles.
  
## Legal and Ethical Considerations
- Respect robots.txt: The program reads and respects the robots.txt file of each site to determine allowed and disallowed paths for scraping.
- Crawl Delay: A delay is implemented between requests to prevent server overload and ensure ethical scraping practices.
- Compliance: Ensure that scraping activities comply with the terms of service of each website and relevant legal regulations.
- I'm not even necesarily sure if this itself follows all industry standards so take it with a grain of salt. 
