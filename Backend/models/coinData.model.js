import mongoose from "mongoose";

const coinDataSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    usd_price: {
      type: Number,
      required: true,
    },
    usd_marketCap: {
      type: Number,
      required: true,
    },
    usd_24h_Change: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CoinData = mongoose.model("CoinData", coinDataSchema);

export default CoinData;
