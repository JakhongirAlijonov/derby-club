import styled from "styled-components";

const StyledHome = styled.div`
  width: 100%;
  button {
    padding: 16px 32px;
    font-family: inherit;
    font-weight: 600;
    font-size: 24px;
    background-color: #ccc;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all.3s ease;
    :hover {
      background-color: #222;
      color: #fff;
    }
  }
  margin-top: 50px;
`;

export default StyledHome;
