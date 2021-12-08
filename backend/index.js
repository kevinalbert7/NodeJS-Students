const express = require("express")
const app = express()
const cors = require('cors')
const bodyparser = require("body-parser")
const port = 5000


app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))



// import de la route
const students = require("./students.json")
console.log(students)

app.get('/students', (req, res) => {
    res.json(students)
})

// app.post('/students', (req, res) => {
    
// })

app.listen(port, () => {
    console.log(`running start server at port ${port}`)
})