# KoinX Backend Assignment

## Overview
This is a Node.js application that tracks cryptocurrency prices using the CoinGecko API. It features automated price updates and provides REST endpoints for accessing cryptocurrency statistics.

## Features
- Background job to fetch crypto prices every 2 hours
- REST API endpoints for cryptocurrency statistics
- Standard deviation calculations for price analysis
- Supports Bitcoin, Ethereum, and Matic tokens

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- Node-cron
- Axios

## Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm 

## Installation

1. Clone the repository
```bash
git clone https://github.com/Aadcode/KoinX.git
cd Backend
```

2. Install dependencies
```bash
npm install
```

3. Create .env file in the root directory and add:
```
MONGODB_URI=mongodb://localhost:27017/koinx
PORT=3000
COINGECKO_API_URL=https://api.coingecko.com/api/v3
```

4. Start the server
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Get Cryptocurrency Stats
```
GET /api/v1/stats?coin=bitcoin
```
Query Parameters:
- coin: One of "bitcoin", "ethereum", or "matic-network"

Response:
```json
{
    "success": true,
    "data": {
        "id": "bitcoin",
        "usd_price": 95262,
        "usd_marketCap": 1882188617655.5515,
        "usd_24h_Change": 2.8261722953941337
    },
    "timestamp": "2025-01-10T19:43:03.098Z"
}
```

### Get Price Deviation
```
GET /api/v1/deviation?coin=bitcoin
```
Query Parameters:
- coin: One of "bitcoin", "ethereum", or "matic-network"

Response:
```json
{
    "success": true,
    "data": {
        "coin": "bitcoin",
        "standardDeviation": 22283.26137160743
    }
}
```

## Background Jobs
The application runs a scheduled job every 2 hours to fetch and store the latest cryptocurrency data from CoinGecko. This data includes:
- Current price in USD
- Market cap in USD
- 24-hour price change

## Database Schema
The application uses MongoDB with the following schema for cryptocurrency data:

```javascript
{
    id: String,
    priceUSD: Number,
    marketCapUSD: Number,
    dayChange: Number,
    timestamp: Date
}
```

## Error Handling
- The API includes comprehensive error handling for invalid requests
- All endpoints return appropriate HTTP status codes
- Detailed error messages are provided for debugging

## Deployment
### Database
- The MongoDB database can be deployed using MongoDB Atlas
- Update the MONGODB_URI in .env with your Atlas connection string

## Author
[ Aadarsh Jain ]

