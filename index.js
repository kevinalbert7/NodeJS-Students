const express = require("express")
const app = express()
const port = 5000

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.use(express.urlencoded({ extended: true }))

var students = [
    {
        "id": 1,
        "name": "Alain",
    },
    {
        "id": 2,
        "name": "Eloi",
    },
    {
        "id": 3,
        "name": "Jong",
    },
    {
        "id": 4,
        "name": "Rébecca",
    },
    {
        "id": 5,
        "name": "Billal",
    },
    {
        "id": 6,
        "name": "Marco",
    },
    {
        "id": 7,
        "name": "Hélène",
    }
]

app.get('/:students', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`running start server at port ${port}`)
})