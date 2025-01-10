import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    );

    console.log(
      `MongoDB connected on host: ${connectionInstance.connection.host}`
    );

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });
  } catch (error) {
    console.log("Database Connection Failed", error.message);
    throw error;
  }
};
export default connectDB;
