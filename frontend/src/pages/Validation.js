import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { StudentContext } from '../contexts/Students'

const Validation = () => {
    const { newStudent } = useContext(StudentContext)

    return (
        <div>
            Congratulations {newStudent.name}, you are registered !
            <br/>
            <Link to='/'>Homepage</Link>
        </div>
    )
}

export default Validation