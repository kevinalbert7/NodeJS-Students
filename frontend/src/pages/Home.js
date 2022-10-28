import { useContext } from 'react'

import { StudentContext } from '../contexts/Students'
import Form from '../components/Form'

const Home = () => {
    const { students } = useContext(StudentContext)

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
          <h2>List</h2>
          <ul className='"list-group'>
            {students.map(student => (
                <li key={student.id} className="list-group-item">
                    {student.name}
                </li>
            ))}
          </ul>
        </div>

        <div className='col-6'>
            <h2>Form</h2>
            <Form />
        </div>
      </div>
    </div>
  )
}

export default Home