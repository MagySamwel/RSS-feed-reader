const express = require("express");
const cors = require("cors");
const rssRouter = require("./routes/feed.route");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api", rssRouter); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
