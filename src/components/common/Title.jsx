import styled, {css} from "styled-components";

export const Title_s = styled.h1`
    font-size: 50px;
    margin: 0;
    position: relative;
    text-align: right;
    transition: color 10s ease;
    color: #4c044e;
    opacity: .4;
    overflow: hidden;
   
     ${props => props.dark && css`
        color: #fff;
     `};
    
`