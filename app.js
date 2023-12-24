const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");
const leaguesRoutes = require("./routes/leagues");
const leagueMatchesRoutes = require("./routes/leagueMatches");
const matchesRoutes = require("./routes/matches");

app.use("/", indexRoutes);
app.use("/users", userRoutes);
app.use("/leagues", leaguesRoutes);
app.use("/league-matches", leagueMatchesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
