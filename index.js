const config = require("./constants");
const { parseUrl } = require("./helpers/parseUrl.helper");

console.log(parseUrl(config.FORMAT_URL,config.INSTANCE_URL));
