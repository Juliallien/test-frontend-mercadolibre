const express = require("express");
const axios = require("axios");
const router = express.Router();
const { builderItem, builderResponse } = require("../util");

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`);
    const categories = response.data.filters.find((filter) => filter.id === "category");
    res.json(builderResponse(response.data.results, categories));
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data.message });
    }
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}`);
    const description = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`);
    const response = builderItem(item.data);
    response.description = description.data.plain_text;
    res.json(response);
  } catch (error) {
    console.log(error);
    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data.message });
    }
  }
});

module.exports = router;
