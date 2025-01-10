import fetchLatestData from "../utils/fetchLatestData.js";

const latestData = async (req, res) => {
  const { coin } = req.query;
  if (!coin) {
    return res.status(400).json({
      success: false,
      message: "Coin parameter is required",
    });
  }

  try {
    const data = await fetchLatestData();

    const response = data.filter((detail) => {
      return detail.id === coin;
    });
    if (!response.length) {
      return res.status(404).json({
        success: false,
        message: `No data found for coin: ${coin}`,
      });
    }

    return res.status(200).json({
      success: true,
      data: response[0],
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch latest data",
    });
  }
};

export default latestData;
