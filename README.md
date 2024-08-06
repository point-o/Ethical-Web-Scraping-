# Ethical Web Scraping Recomendations (A legal overview)

- This project demonstrates how to ethically scrape web data while respecting site-specific rules and legal considerations. It extracts page titles from a list of URLs and saves them to a CSV file.


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

#### **A Note:**
```markdown
- The current legal grey-area for web-scraping is worrying to say the least. Most court cases involving web-scraping are often won by companies with comprehensive legal teams. With precedents flipping often and without proper legislation being passed, it remains a complex issue.
- Web-Scraping is widely used across various industries for market research, price monitoring, and data collection for machine learning.
- Scraping publicly accessible data is generally more acceptable, as seen in the hiQ Labs v. LinkedIn case, where the court ruled in favor of hiQ Labs for scraping public LinkedIn profiles.
- However, many websites have terms of service that explicitly prohibit scraping. Violating these terms can lead to legal action, as in the case of Clearview AI.
- The CFAA is often cited in web scraping cases. The interpretation of this law can vary, but it generally focuses on unauthorized access. The Van Buren v. United States case narrowed its scope, emphasizing unauthorized access rather than exceeding authorized access.
- In summary, it's a grey area. For personal use, I recommend using the format shown in this project. This approach may not be feasible for larger companies, but it's a good starting point for smaller projects.

In summary:
- I am by no means anywhere close to understanding the full breadth of this topic.
- This program purely aims to showcase what 'ethical' web-scraping could look like for smaller projects, like mine, just scraping titles.
  
Legal and Ethical Considerations
- Respect robots.txt: The program reads and respects the robots.txt file of each site to determine allowed and disallowed paths for scraping.
- Crawl Delay: A delay is implemented between requests to prevent server overload and ensure ethical scraping practices.
- Compliance: Ensure that scraping activities comply with the terms of service of each website and relevant legal regulations.
- I'm not even necesarily sure if this itself follows all industry standards so take it with a grain of salt. 
