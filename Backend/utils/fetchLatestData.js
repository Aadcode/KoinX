import axios from "axios";
import { BASE_URL } from "../constants.js";
import coinData from "../models/coinData.model.js";

const fetchLatestData = async () => {
  try {
    const fetchedData = await axios.get(`${BASE_URL}/simple/price`, {
      method: "get",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": `${process.env.API_KEY}`,
      },
      params: {
        ids: "bitcoin,matic-network,ethereum",
        vs_currencies: "usd",
        include_market_cap: true,
        include_24hr_change: true,
      },
    });

    const transformedData = Object.entries(fetchedData.data).map(
      ([id, values]) => ({
        id,
        usd_price: parseFloat(values.usd),
        usd_marketCap: parseFloat(values.usd_market_cap),
        usd_24h_Change: parseFloat(values.usd_24h_change),
      })
    );
    return transformedData;
  } catch (error) {
    console.log("Error fetching or transforming data:", error.message);
    throw error;
  }
};

export default fetchLatestData;
