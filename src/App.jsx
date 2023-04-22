import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './Home'
import './styles/App.css'

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
