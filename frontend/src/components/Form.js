import { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("")

    const handleNameChange = e => {
        setName(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault()

        const student = {
            name
        }

        fetch('http://localhost:5000/students', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })

        setName("")
    }

  return (
    <form>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input 
                type="text" 
                className="form-control" 
                value={name} 
                onChange={handleNameChange} 
            />
        </div>
        <button 
            type="submit" 
            className="btn btn-primary"
            onClick={handleSubmit}
        >
            Submit
        </button>
    </form>
  )
}

export default Form