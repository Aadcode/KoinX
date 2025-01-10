import axios from "axios";
import { BASE_URL } from "../constants.js";
import coinData from "../models/coinData.model.js";
import fetchLatestData from "./fetchLatestData.js";

const UpdateDatabase = async () => {
  try {
    const latestData = await fetchLatestData();
    await coinData.insertMany(latestData);
  } catch (error) {
    console.error("Database update failed:", error.message);
  }
};

export default UpdateDatabase;
