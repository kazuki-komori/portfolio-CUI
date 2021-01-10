const path = require("path")
module.exports = {
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname)
    return config;
  },
}