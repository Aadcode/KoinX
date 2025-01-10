import express from "express";
import dotenv from "dotenv";
import fetchAndUpdateDatabase from "./utils/updatesdatabase.js";
import connectDB from "./db/db.js";
import cron from "node-cron";

dotenv.config();
const app = express();

connectDB();

cron.schedule("0 */2 * * *", () => {
  fetchAndUpdateDatabase();
  console.log("Databse updated Succefully");
});

app.use("/api/v1", statsRoutes);
app.use("/api/v1", deviationRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}`);
});
