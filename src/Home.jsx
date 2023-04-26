import React, { useEffect, useState } from 'react'
import StyledHome from './styles/StyledHome'
import Modal from './components/Modal'
import StyledCard from './styles/StyledCard'
function Home() {
const [modal , setModal] = useState(false)
const [newRoom , setNewRoom] = useState({})

    const openModal = ()=>{
            setModal(true)
    }
    console.log(newRoom);


  return (
    <StyledHome className='container'>
    <div >
    {
      newRoom && newRoom.map((room)=>{
        let hour = Math.floor(room.time / 60)
        let minute = Math.floor(room.time % 60)
        return (
          <StyledCard>
            <h3>Xona raqami: {room.roomNumber}</h3>
            <p>Boshlanish vaqt: {hour}:{minute}</p>
            <p> Jami summa: {room.total}</p>
            <button> Tugatish </button>
            <button> Qo'shimcha qilish </button>
          </StyledCard>
        )
      })
    }
    </div>
      <button onClick={openModal}>
        Yaratish ✨
      </button>

      {modal && <Modal setModal={setModal}  setNewRoom={setNewRoom} newRoom={newRoom}  />}
      
      {modal && <div className="backdrop"></div>}
    </StyledHome>
  )
}

export default Home
