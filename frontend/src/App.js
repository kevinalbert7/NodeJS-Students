import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { StudentProvider } from './contexts/Students'
import Home from './pages/Home'

const App = () => {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  )
}

export default App