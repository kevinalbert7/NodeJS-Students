import { useState } from 'react'

const Form = () => {

    const [name, setName] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        const newStudent = {
            name
        }
    }

    fetch('http://localhost:5000/students', {
        method: "post",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then(response => response.json())
        .then(data => console.log(data))
    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} />
            <button type="submit">Nouvel étudiant</button>
        </form>
    )   
}

export default Form
