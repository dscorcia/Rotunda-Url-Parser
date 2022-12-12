const { parseQuery } = require("./parseQuery.helper");

function parseUrl(formatUrl, instanceUrl) {
    const keys = formatUrl.split("/")
      .map((key, idx) => [key.replace(":", ""), idx, key.charAt(0) === ":"])
      .filter(([,,keep]) => keep);
    
    const [pathUrl, queryParams = ""] = instanceUrl.split("?");    
    const pathParts = pathUrl.split("/");    
    const entries = keys.map(([key, idx]) => [key, pathParts[idx]]);

    return Object.fromEntries(queryParams ? [...entries, ...parseQuery(queryParams)] : entries);
  }

  module.exports={parseUrl}