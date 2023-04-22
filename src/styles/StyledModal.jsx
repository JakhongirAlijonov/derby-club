import styled from "styled-components";

const StyledModal = styled.div`

  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
background-color: #fff;
padding  :32px 100px;
border-radius: 8px;
text-align: center;
    .addBtn{
        margin-left: 16px;
    }
    input{
      padding: 8px;
      border: none;
      background-color: #ddd;
      border-radius: 8px;
      margin-right: 8px;

    }
`

export default StyledModal