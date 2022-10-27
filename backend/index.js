const express = require("express")
const app = express()
// const cors = require('cors')
const port = 5000

const students = require("./routes/students")

// app.use(cors())
app.use(express.json())

app.use('/students', students)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})