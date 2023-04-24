import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{


    margin: 0;
    padding: 0;
    font-family: "Mulish" , sans-serif;
}


.container{
    max-width: 1440px;
    width: 100%;
    padding-inline: 120px;
    margin-left: auto;
    margin-right: auto;
}

.backdrop{
   position: fixed;
   top: 0;
   left: 0;
    background-color: rgba(0, 0, 0, 0.8);
   z-index: 0;
   width: 100%;
   height: 100%;
  }

`

export default GlobalStyle