const path = require("path")
require("dotenv").config()
module.exports = {
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID
  },
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname)
    return config;
  },
}