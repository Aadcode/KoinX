import fetchAndUpdateDatabase from "../utils/updatesdatabase.js";

const latestData = async (req, res) => {
  const { coin } = req.query;

  try {
    const data = await fetchAndUpdateDatabase();
    console.log(data);

    const response = data.filter((detail) => {
      return detail.id === coin;
    });
    res.status(200).json({ response });
  } catch (e) {
    console.log("Error in fetching Data", e.message);
  }
};

export default latestData;
