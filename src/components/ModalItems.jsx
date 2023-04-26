const  ModalItems =   ({handleSelectChange})=>{
    return (
        <select name="" id="prod" onChange={handleSelectChange}>
          <option value="pepsi05" defaultChecked data-cost="5000">
            Pepesi 0.5 l
          </option>
          <option value="pepsi1" data-cost="9000">
            Pepesi 1 l
          </option>
          <option value="pepsi15" data-cost="12000">
            Pepesi 1.5 l
          </option>
          <option value="chips" data-cost="5000">
            {" "}
            Chips{" "}
          </option>
        </select>
    )
}

export default ModalItems