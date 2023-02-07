import app from './app'
import { PORT } from './config'
import { dbConnect } from './db'

dbConnect()
app.listen(PORT)

console.log(`Server on port ${PORT}`)
