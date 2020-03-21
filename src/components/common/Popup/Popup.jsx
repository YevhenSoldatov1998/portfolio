import styled, {css} from "styled-components";

export const Popup_s = styled.div`
    font-size: 16px;
    height: 100vh;
    position: fixed;
    right: 0;    left: 0;
    top: 0;    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    color: #4c044e;
    overflow: hidden;
  
     ${props => props.dark && css`
        color: #fff;
     `};
    
`