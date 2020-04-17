const router = require("express").Router();
const axios = require("axios");
const fetch = require("node-fetch");

router.post("/CountryByName", (req, res) => {
  console.log(req.body);

  const countryName = req.body.country;

  const baseUrl = `https://restcountries.eu/rest/v2/name/${countryName}`;

  fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      if (err) {
        res.send({ message: "Country not found" });
      }
    });
});

router.post("/AllCountries", (req, res) => {
  console.log("fired");

  const baseUrl = `https://restcountries.eu/rest/v2/all`;

  fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      res.send({ data });
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
