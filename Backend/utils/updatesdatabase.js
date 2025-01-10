import axios from "axios";
import { BASE_URL } from "../constants.js";
import coinData from "../models/coinData.model.js";

const fetchAndUpdateDatabase = async () => {
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
      usd_price: values.usd,
      usd_marketCap: values.usd_market_cap,
      usd_24h_Change: values.usd_24h_change,
    })
  );
  console.log(transformedData);
  try {
    await coinData.insertMany(transformedData);
    return transformedData;
  } catch (error) {
    console.error("Error saving data:", error.message);
  }
};

export default fetchAndUpdateDatabase;
