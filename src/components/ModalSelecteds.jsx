
function ModalSelecteds({selectedOption  }) {
  let  totalCost = 0;
  props.totalCost(totalCost)

  return (
    <div>
      <span> <br />
          Added products:{" "}
          { selectedOption && selectedOption.map((item) => {
            totalCost += Number(item.cost);
        

            return (
              <div>
                <small key={item.name}>
                  {" "}
                  {item.name} <br />{" "}
                </small>
              </div>
            );
          })
          
          }

        </span>
      <div>Summa: {totalCost}</div>

    </div>
  )
}

export default ModalSelecteds
