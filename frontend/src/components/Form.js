import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom' 

import { StudentContext } from '../contexts/Students'

const Form = () => {
    const { getStudents, setNewStudent } = useContext(StudentContext)
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

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
            .then(response => response.json())
            .then(data => {
                setNewStudent(data)
                navigate('/validation')
                getStudents()
                setName('')
                setError('')
            })
            .catch(error => setError('Already existing student!'))
    }

  return (
    <>
        <form>
            <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>Name</label>
                <input 
                    type='text' 
                    className='form-control' 
                    value={name} 
                    onChange={handleNameChange} 
                />
            </div>
            <button 
                type='submit' 
                className='btn btn-primary'
                onClick={handleSubmit}
            >
                Submit
            </button>
        </form>
        {error && <p>{error}</p>}
    </>
  )
}

export default Form