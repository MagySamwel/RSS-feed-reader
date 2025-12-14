const express = require("express");
const cors = require("cors");
const rssRouter = require("./routes/feed.route");
const PORT = process.env.PORT || 5000;
const app = express();

app.use((req, res, next) => {
  // Set the Access-Control-Allow-Origin header to allow requests from your frontend's origin
  // Replace 'https://rss-feed-reader-iwji.vercel.app' with '*' if you want to allow all origins (less secure)
  res.setHeader('Access-Control-Allow-Origin', 'https://rss-feed-reader-iwji.vercel.app');

  // Set other CORS headers for preflight requests
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Add any custom headers your frontend might send
  res.setHeader('Access-Control-Allow-Credentials', true); // If you're sending cookies or authentication headers

  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api", rssRouter); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
