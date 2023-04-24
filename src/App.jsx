// import StyledApp from './styles/StyledApp'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './Home'
import GlobalStyle from './styles/StyledApp' 

function App() {
  return (
   <div>
     <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
   
   </div>
  )
}

export default App
