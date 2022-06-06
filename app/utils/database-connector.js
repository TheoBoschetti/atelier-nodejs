const { Pool } = require('pg')

const dbConnector = new Pool({
  connectionString: process.env.DATABASE_URI,
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = dbConnector
