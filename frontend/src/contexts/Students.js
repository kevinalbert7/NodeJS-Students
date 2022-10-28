import { createContext, useEffect, useState } from 'react'

const StudentContext = createContext({})

const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        getStudents()
    }, [])

    const getStudents = () => {
        fetch("http://localhost:5000/students")
            .then(response => response.json())
            .then(data => setStudents(data))
    }

    const value = {
        students
    }

    return (
        <StudentContext.Provider value={value}>
            {children}
        </StudentContext.Provider>
    )
}

export {
    StudentContext,
    StudentProvider
}