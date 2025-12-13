const axios = require("axios");
const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");
const { formatData } = require("../utils/helperFunction");
const fetchFeed = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'Missing url in request body' });

  try {
    const response = await axios.get(url);

    const contentType = response.headers['content-type'] || '';
    if (!contentType.includes('xml')) {
      return res.status(400).json({ error: 'URL does not return XML content' });
    }

    const result = XMLValidator.validate(response.data);
    if (result == true) {
      const parser = new XMLParser({
        ignoreAttributes: false, attributeNamePrefix:
          '@_'
      });

      const json = parser.parse(response.data);
      const articles = formatData(json);
      return res.status(200).json(articles);
    }
    else return res.status(400).json({ error: 'XML is Invalid:' + result.err.msg })
    
  } catch (err) {
    return res.status(400).json({
      error: 'Failed to fetch or parse feed: ' +
        (err.message || err)
    })
  }
};

const generateXML = (req, res) => {
  // Implementation for generating XML
};

module.exports = { fetchFeed, generateXML };