import {useState} from "react";
import StyledModal from "../styles/StyledModal";
function Modal({ setModal , newRoom , setNewRoom }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [input,setInput] = useState('');
    const [added ,setAdded] = useState([])
  function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (
      <span>
        {" "}
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}{" "}
      </span>
    );
  }




const handleSelectChange = (e)=>{
    const selectedOption = e.target.selectedOptions[0];
    const cost = selectedOption.dataset.cost;
    const name = selectedOption.text;
    setSelectedOption(cost);
}

const handelAddProd = ()=>{

}

selectedOption && console.log(selectedOption);

  return (
    <StyledModal>
      <h3 className="modal-title">Yangi xona yaratish</h3>
      <p>Boshlanish vaqti: {getTime()}</p>
      <p>
        Narxni kiriting: <input type="text" placeholder="Narx..." autoFocus onChange={(e)=>setInput(e.target.value)  } />
        uzs{" "}
      </p>
      <span>
        Qo'shimcha qo'shish:{" "}
        <select name="" id="" onChange={handleSelectChange}>
          <option value="pepsi05"  data-cost="5000">Pepesi 0.5 l</option>
          <option value="pepsi1" data-cost="9000">Pepesi 1 l</option>
          <option value="pepsi15" data-cost="12000">Pepesi 1.5 l</option>
          <option value="chips" data-cost="5000">  Chips </option>
        </select>
        <button onClick={handleAddProd}>Qo'shish</button>
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
