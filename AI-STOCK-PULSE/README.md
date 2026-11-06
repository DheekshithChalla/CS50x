# AI Stock Pulse

#### Video Demo: https://youtu.be/rdjK0kqDzLg

#### Description:

AI Stock Pulse is a Chrome extension that allows users to monitor real-time stock market information directly from their browser. The extension is designed to provide a simple and intuitive interface for checking stock prices, daily market movements, and AI-generated insights without opening a separate financial website.

The motivation behind this project was to create a lightweight financial assistant that is fast, easy to use, and accessible from any webpage. Instead of visiting multiple websites to check stock prices, users can simply click the extension icon and instantly access important market information.

## Features

- Live stock market data
- Company selection through an easy-to-use interface
- Daily price updates
- AI-generated market insights based on stock performance
- Clean and modern user interface
- Refresh button to retrieve the latest market data

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Chrome Extension Manifest V3
- Finnhub Stock API (or Alpha Vantage if you finished with that)
- Fetch API

## Project Structure

```
AI-STOCK-PULSE/
│
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
├── background.js
├── icon.png
└── README.md
```

## How It Works

When the extension opens, the user can choose a company from the list and press the **Refresh Market** button. The extension sends an API request to retrieve the latest stock information, including the current price and percentage change.

Based on the percentage gain or loss, the extension generates a simple AI-style market insight. Positive movements generate bullish recommendations, while negative movements generate bearish insights. Although the AI insight is rule-based in the current implementation, the design allows future integration with large language models such as OpenAI for more advanced financial analysis.

## Design Decisions

I chose to build a Chrome extension instead of a traditional web application because it provides instant access to market information without requiring users to open another website.

The popup interface was intentionally kept simple to improve usability and reduce distractions. I also chose JavaScript's Fetch API because it provides an easy way to retrieve live financial data asynchronously.

Initially, I used the Alpha Vantage API, but due to its strict daily request limits, the project was later adapted to use the Finnhub API, which offers more generous free-tier limits and better support for real-time stock information.

## Challenges

The most difficult parts of the project included:

- Learning Chrome Extension Manifest Version 3
- Debugging manifest.json errors
- Managing API requests
- Handling rate limits
- Connecting JavaScript with external APIs
- Creating responsive popup layouts

These challenges helped me understand asynchronous programming, API integration, and browser extension architecture.

## Future Improvements

Future versions of AI Stock Pulse will include:

- Search for thousands of companies
- AI-powered Buy/Hold/Sell recommendations
- Interactive stock charts
- Company news
- Watchlist functionality
- Portfolio tracker
- Price alerts
- Dark and Light themes
- Support for Indian (NSE/BSE) and international markets
- User authentication and cloud synchronization

## Lessons Learned

This project helped me gain practical experience with JavaScript, APIs, Chrome Extension development, asynchronous programming, and frontend design. It also strengthened my debugging skills and gave me a better understanding of how browser extensions communicate with external services.

Overall, AI Stock Pulse demonstrates how web technologies can be combined with financial APIs to create a useful productivity tool for everyday investors.
