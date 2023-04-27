import path from 'path'
import fs from 'fs'
const { promisify } = require('util')

const readFile = promisify(fs.readFile)

const fileName = 'ubereats.json'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query
    const jsonFile = path.resolve('./', fileName)
    const readFileData = await readFile(jsonFile)
    const list = JSON.parse(readFileData)
    console.log(list)
    const item = list.find((i) => i.catalogSectionUUID === id)

    if (item) {
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(item)
    } else {
      res.status(404).send('sushi not found')
    }
    console.log(`GET /api/houses/${id} status: 200`)
  } else if (req.method === 'POST') {
    res.status(201).json({ message: generateRandomString(15) })
  } else {
    res.status(405).json({ message: 'Method not allowed.' })
  }
}
