The Zerodha Clone is a frontend project built using React.js, designed to replicate the clean and responsive user interface of the Zerodha trading platform. The project focuses on building landing pages, product sections, and a dashboard-like experience for educational purposes.

 Landing Pages
HomePage.jsx

Combines sections such as Hero, Awards, Stats, Pricing, Education, and OpenAccount to create a complete landing page.

AboutPage.jsx

Includes a Hero and Team section to describe the company and its key members.

PricingPage.jsx

Displays Zerodha’s pricing model using components like Hero, Pricing, and Brokerage.

 Components Overview
Hero.jsx

Common component across multiple pages, containing the main banner, call-to-action, and introductory content.

Team.jsx

Shows details of team members, roles, and brief backgrounds.

Awards.jsx

Highlights Zerodha’s achievements and its position as India’s largest stockbroker.

Education.jsx

Promotes Zerodha’s educational portals like Varsity and TradingQ&A.

Stats.jsx

Displays trust-building statistics such as user base and daily transactions.

Pricing.jsx

Explains Zerodha’s pricing structure in a simple and transparent way.

Brokerage.jsx

Lists brokerage charges and additional fees.

ProductPage.jsx

Provides descriptions of Zerodha’s major products—Kite, Console, Coin, and Kite Connect API.

 Routing
Signup.jsx

Redirects users to an external signup link, simulating the Zerodha account creation process.

 Dashboard Application

A dashboard interface built using React.js and TailwindCSS, inspired by Zerodha’s trading dashboard. It includes multiple modules for displaying stock data and user activity.

 Features

User Authentication (login/logout UI)

Real-time stock data (UI-ready structure)

Buy/Sell Order Management

Portfolio Overview — holdings, positions, funds

Interactive charts

Watchlist for monitoring stocks

 Dashboard Components
Apps.jsx

Main interface connecting all dashboard mini-apps.

BuyActionWindow.jsx

Popup interface for placing buy orders.

Dashboard.jsx

Main layout that handles routing inside the dashboard.

DoughnutChart.jsx

Used to display portfolio distribution visually.

Funds.jsx

Shows available and used funds.

Holdings.jsx

Lists the user’s current holdings.

Orders.jsx

Displays completed and pending orders.

Positions.jsx

Shows open market positions.

Summary.jsx

Provides a quick overview of the portfolio.

WatchList.jsx

Displays all user-tracked stocks.

 Installation & Usage
1. Clone the repository
git clone https://github.com/buradapramodh/zerodha-clone

2. Navigate to the project
cd zerodha-clone

3. Install dependencies
npm install

4. Start the development server
npm start

 Acknowledgements

This project is inspired by the original Zerodha trading platform, created solely for learning and educational use, focusing on UI replication and frontend development skills.
