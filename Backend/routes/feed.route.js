const express = require("express");
const router = express.Router();
const { fetchFeed, generateXML } = require("../controllers/feed.controller");

router.post("/fetch-feed", fetchFeed);
router.post("/generate-xml", generateXML);

module.exports = router;
