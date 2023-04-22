import styled  from "styled-components";

const StyledNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 120px;
    color: #fff;;
    background-color: #222222;
    .logo{
        font-size: 36px;
        color: #0B2447;
        a{
            text-decoration: none;
            font-weight: 600;
        }
    }

    .nav-list{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;

    }
    .nav-item{
        margin-left: 64px;
        font-family: inherit;
        font-size: 18px;
    }
`
export default StyledNavbar