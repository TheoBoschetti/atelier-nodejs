const dbConnector = require('../utils/database-connector')
const sqlRequest = require('../sql/dog')

const getAllDogs = async (req, res) => {
  try {
    const data = await dbConnector.query(sqlRequest.getAllDogs())

    res.status(200).send({ code: 200, data: data.rows })
  } catch (error) {
    console.error(new Error(error))
    res.sendStatus(500)
  }
}

module.exports = { getAllDogs }
