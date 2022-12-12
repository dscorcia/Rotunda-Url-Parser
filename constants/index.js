require('dotenv').config()

const config={
    FORMAT_URL: process.env.FORMAT_URL || '/:version/api/:collection/:id',
    INSTANCE_URL: process.env.INSTANCE_URL || '/6/api/listings/3?sort=desc&limit=10'
}
module.exports = config