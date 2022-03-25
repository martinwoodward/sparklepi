'use strict'
const axios = require("axios")

module.exports = async (event, context) => {
  let res = await axios.get("http://api.open-notify.org/astros.json")
  let body = `There are currently ${res.data.number} astronauts in space.`
  
  return context
  .status(200)
  .headers({"Content-type": "application/json"})
  .succeed(body)
  }