import coinDataModel from "../models/coinData.model.js";

const calculateDeviation = async (req, res) => {
  try {
    const { coin } = req.query;
    if (!coin) {
      return res.status(400).json({
        success: false,
        message: "Coin parameter is required",
      });
    }

    const pipeline = [
      { $match: { id: coin } },
      {
        $group: {
          _id: "$id",
          stdDev: { $stdDevPop: "$usd_price" },
        },
      },
    ];

    const deviation = await coinDataModel.aggregate(pipeline);
    if (!deviation.length) {
      return res.status(404).json({
        success: false,
        message: `No data found for coin: ${coin}`,
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        coin: deviation[0]._id,
        standardDeviation: deviation[0].stdDev,
      },
    });
  } catch (error) {
    console.error("Error calculating deviation:", error);
    return res.status(500).json({
      success: false,
      message: "Error calculating deviation",
    });
  }
};

export default calculateDeviation;
