import { useState } from "react";
import StyledModal from "../styles/StyledModal";
import ModalItems from "./ModalItems";
import ModalSelecteds from "./ModalSelecteds";
function Modal({ setModal, newRoom, setNewRoom }) {
  const [selectedOption, setSelectedOption] = useState([]);
  const [input, setInput] = useState("");

  function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
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

const handleSelectCost = ()=>{
  const selectedOption = e.target.selectedOptions[0];
    const cost = selectedOption.dataset.cost;
}
const totalCost = (totalCost)=>{

  console.log(totalCost);
}

  return (
    <StyledModal>
      <h3 className="modal-title">Yangi xona yaratish</h3>
      <p>Boshlanish vaqti: {getTime()}</p>
      <select name="" id="">
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
      <span>
        Qo'shimcha qo'shish:
        <ModalItems handleSelectChange={handleSelectChange}/>
        <ModalSelecteds selectedOption={selectedOption}  totalCost={totalCost} />
      </span>
      <div className="buttons">
        <button onClick={() => setModal(false)}>Bekor qilish</button>
        <button className="addBtn" onClick={() => setModal(false)}>
          Yaratish
        </button>
      </div>
    </StyledModal>
  );
}

export default Modal;
