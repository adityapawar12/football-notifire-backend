const express = require("express");
const router = express.Router();
const axios = require("axios");

router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id;
    const baseUrl = "https://api.football-data.org";
    const configurationObject = {
      method: "get",
      url: `${baseUrl}/v4/competitions/${id}/matches?status=SCHEDULED`,
      headers: {
        "X-Auth-Token": process.env.API_KEY,
      },
    };
    const response = await axios(configurationObject);

    const leagueMatches = response.data;

    res.json(leagueMatches);
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
