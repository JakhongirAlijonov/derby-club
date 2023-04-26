import { useEffect, useState } from "react";
import StyledModal from "../styles/StyledModal";
import ModalItems from "./ModalItems";
import ModalSelecteds from "./ModalSelecteds";
function Modal({ setModal, newRoom, setNewRoom }) {
  const [selectedOption, setSelectedOption] = useState([]);
  const [total, setTotal] = useState(0);
  const [roomCost , setRoomCost] = useState(0)
const [roomNumber , setRoomNumber] = useState('')
const [time , setTime] = useState(0)
const handleAdd = () => {
  setNewRoom(prevState => [...prevState, {time:time, total: total, selectedOptions: selectedOption, roomNumber: roomNumber }]);
  setModal(false)
}

console.log(newRoom);

let timeToMin 
  function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    timeToMin = Number(minutes) + Number(hours*60)
    useEffect(()=>{
      setTime(timeToMin)

    }, [])
    return (
      <span>

        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}{" "}
      </span>
    );
  }


const handleSelectChange = (e) => {
const selectedOption = e.target.selectedOptions[0];
    const cost = selectedOption.dataset.cost;
    const name = selectedOption.text;
    setSelectedOption(prevOptions => [...prevOptions, { cost:cost, name:name }]); 
};

const handleSelectCost = (e)=>{
  const selectedOption = e.target.selectedOptions[0];
    const cost = selectedOption.dataset.cost;
    setRoomCost(cost)
}

const roomIndexHandler = (e)=>{
  let roomNumber = e.target.value
if(roomNumber > 19 || roomNumber < 0){
  alert("Noto'g'ri kiritdiz")
}else setRoomNumber(roomNumber)

}



  return (
    <StyledModal>
      <h3 className="modal-title">Yangi xona yaratish</h3>
<div className="newRoom">
  <p>Xona raqami: <input type="number" required onChange={roomIndexHandler}  autoFocus/> </p>
</div>

      <p>Boshlanish vaqti: {getTime()}</p>
      <label htmlFor="roomCost">Narxni tanlang: </label>
      <select name="" id="roomCost" onChange={handleSelectCost}>
        <optgroup label="Bolalar">
          <option value="child12" defaultValue data-cost="8000"> Pult: 1-2</option>
          <option value="child3" data-cost="12000"> Pult: 3</option>
          <option value="child4" data-cost="15000"> Pult: 4</option>
        </optgroup>
        <optgroup label="Kattalar">
          <option value="katta12" defaultValue data-cost="12000">Pult: 1-2</option>
          <option value="katta3" data-cost="15000">Pult: 3</option>
          <option value="katta4" data-cost="18000">Pult: 4</option>
        </optgroup>
      </select>
      <br />
      <span>
        <label htmlFor="prod">Qo'shimcha qo'shish:</label>
        <ModalItems handleSelectChange={handleSelectChange} />
        <ModalSelecteds selectedOption={selectedOption} roomCost={roomCost} setTotal={setTotal}  />
      </span>
      <div className="buttons">
        <button onClick={() => setModal(false)}>Bekor qilish</button>
        <button className="addBtn" onClick={() => handleAdd()}>
          Yaratish
        </button>
      </div>
    </StyledModal>
  );
}

export default Modal;
