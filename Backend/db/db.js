import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    );

    console.log(connectionInstance.connection.host);
  } catch (error) {
    console.log("Database COnnection Failed", error.message);
  }
};
export default connectDB;
