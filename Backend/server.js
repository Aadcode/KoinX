import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import cron from "node-cron";
import statsRoutes from "./routes/stats.routes.js";
import deviationRoutes from "./routes/deviation.routes.js";
import UpdateDatabase from "./utils/updatesdatabase.js";
dotenv.config();
const app = express();

connectDB();

cron.schedule("0 */2 * * *", () => {
  UpdateDatabase().then(console.log("Database updated Successfully"));
});

app.use("/api/v1", statsRoutes);
app.use("/api/v1", deviationRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}`);
});
