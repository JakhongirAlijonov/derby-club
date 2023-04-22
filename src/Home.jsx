import React, { useState } from 'react'
import StyledHome from './styles/StyledHome'
import Modal from './components/Modal'
function Home() {
const [modal , setModal] = useState(false)
const [newRoom , setNewRoom] = useState({})

    const openModal = ()=>{
            setModal(true)
    }

    
  return (
    <StyledHome className='container'>
      <button onClick={openModal}>
        Yaratish ✨
      </button>

      {modal && <Modal setModal={setModal}  setNewRoom={setNewRoom} newRoom={newRoom} />}
      
      {modal && <div className="backdrop"></div>}
    </StyledHome>
  )
}

export default Home
