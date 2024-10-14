import express from 'express'
import { mapOrder } from '~/utils/sorts.js'


const app = express()

const hostname = 'localhost'
const port = 8000

app.get('/', (req, res) => {
  // Test Absolute import mapOrder
  console.log(mapOrder(
    [ { id: 'id-1', name: 'One' },
      { id: 'id-2', name: 'Two' },
      { id: 'id-3', name: 'Three' },
      { id: 'id-4', name: 'Four' },
      { id: 'id-5', name: 'Five' } ],
    ['id-5', 'id-4', 'id-2', 'id-3', 'id-1'],
    'id'
  ))
  res.send('Hello from Server')
})

app.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`)
})