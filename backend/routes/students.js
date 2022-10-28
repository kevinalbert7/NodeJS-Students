const express = require("express")
const app = express()

let students = require("../students.json")

app.get("/", (req, res) => {
    res.json(students)
})

app.post("/", (req, res) => {
    const existingStudent = students.find(student => student.name === req.body.name)
    console.log(existingStudent)

    if(existingStudent) {
        res.status(409).send("Existing student!")
    } else {
        const student = {
            id: students.length + 1,
            ...req.body
        }
        
        students = [ ...students, student ]
        res.json(student)
    }
})

module.exports = app