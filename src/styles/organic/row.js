import styled ,{css} from "styled-components";

import { device } from "./breakpoint";





export const Row = styled.div`
display: flex;
flex-direction: row;
margin-right: 0;
margin-left: 0;
${props => props.gutter === true ? 
    css`width:100%; 
    background-color:black;`: 
    css`
    justify-content:start;
    margin-right: 0;
    margin-left: 0;
//     @media ${device.mobile}{
//         max-width:375px;
//     background-color:white;
// }
// @media ${device.tablet}{
//     background-color:blue;
  
// }
// @media ${device.desktop}{
//     background-color:green;
//     margin:   auto;
// }
`};
`
