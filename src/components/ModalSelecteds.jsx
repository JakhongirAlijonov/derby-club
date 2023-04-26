import { useState, useEffect } from "react";

function ModalSelecteds({ selectedOption, roomCost, setTotal }) {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let addedCost = Number(roomCost);

    if (selectedOption) {
      selectedOption.forEach((item) => {
        addedCost += Number(item.cost);
      });
    }

    setTotalCost(addedCost);
    setTotal(addedCost);

  }, [selectedOption, roomCost, setTotal]);

  return (
    <div>
      <span>Added products:{" "}
        {selectedOption &&
          selectedOption.map((item) => (
            <small key={item.name}>
              {" "}
              {item.name} <br />{" "}
            </small>
          ))}
      </span>
      <div>Summa: {totalCost}</div>
    </div>
  );
}

export default ModalSelecteds;
