function parseQuery(queryParams) {
    return queryParams.split("&").map(qParam => qParam.split("="));
 }

 module.exports={parseQuery}