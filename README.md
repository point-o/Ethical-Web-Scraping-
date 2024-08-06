Overview
Welcome to the Ethical Web Scraping Practice Program! This project is a personal endeavor aimed at exploring the principles of ethical web scraping in a safe and legally cautious manner. I'd like to note that this program would in no way ever be implemented in real life. It's slow, it's inefficient and it takes the most conservitive possible approach to web-scraping.

Features
Respect for robots.txt: Fetches and interprets the robots.txt file to comply with site-specific scraping rules.
Crawl Delay: Implements a delay between requests to avoid overwhelming servers.
Title Extraction: Extracts and saves page titles from a list of URLs to a CSV file.
Error Handling: Provides basic error handling and logging for robustness.

Getting Started
Prerequisites
Ensure you have Node.js installed on your system with Axios, Cheerio and csv-parser.

Install Node.js: https://nodejs.org/en
Install Axios, Cheerio and CVS Parser: npm install axios cheerio csv-parser


Legal and Ethical Considerations
Respect robots.txt: The program reads and respects the robots.txt file of each site to determine allowed and disallowed paths for scraping.
Crawl Delay: A delay is implemented between requests to prevent server overload and ensure ethical scraping practices.
Compliance: Ensure that scraping activities comply with the terms of service of each website and relevant legal regulations.
This project is intended for educational purposes only.
