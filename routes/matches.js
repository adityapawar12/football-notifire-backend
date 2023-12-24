const express = require("express");
const router = express.Router();
const axios = require("axios");

router.route("/").get(async (req, res) => {
  try {
    const baseUrl = "https://api.football-data.org";
    const configurationObject = {
      method: "get",
      url: `${baseUrl}/v4/matches`,
      headers: {
        "X-Auth-Token": process.env.API_KEY,
      },
    };
    const response = await axios(configurationObject);

    const matches = response.data;

    res.json(matches);
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
