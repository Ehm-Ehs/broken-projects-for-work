import styled ,{css} from "styled-components";

import { device } from "./breakpoint";

/* 
// const handleBreakPoint = maxWidth => {
//   switch (maxWidth) {
//     case  `@media ${device.laptop}`:
//         return (css`
//      max-width:500px;
    
//     `);
//     case `@media ${device.desktop}`:
//       return
//   //      (css`
//   //   background-color: black;
//   //   color: white;
//   //   ${Input}:checked + && {
//   //     color: blue;
//   //   }
//   // `);
//     default:
//       return "#fff";
//   }
// };





//  ${// props => props.fluid === false && //  @media ${device.laptop}{max-width:500px;};

// max-width:${props => props.fluid === false &&  @media (${device.laptop}){`max-width:500px;};
//  max-width:// ${( // { maxWidth }) => // handleBreakPoint(maxWidth)};
// `;

// max-width:
// @media ${device.laptop} {
//   .container-sm, .container {
//     max-width: 540px;
//   }
// }
// @media (min-width: 768px) {
//   .container-md, .container-sm, .container {
//     max-width: 720px;
//   }
// }
// @media (min-width: 992px) {
//   .container-lg, .container-md, .container-sm, .container {
//     max-width: 960px;
//   }
// }
// @media (min-width: 1200px) {
//   .container-xl, .container-lg, .container-md, .container-sm, .container {
//     max-width: 1140px;
//   }
// }
// @media (min-width: 1400px) {
//   .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
//     max-width: 1320px;
//   } */




export const Container = styled.div`
display: flex;
flex-direction: column;
${props => props.fluid === true ? 
    css`width:100%; 
    background-color:black;
    margin-right: auto;
    margin-left: auto;`: 
    css`@media ${device.mobile}{
        max-width:375px;
    background-color:white;
}
@media ${device.tablet}{
    background-color:blue;
  
}
@media ${device.desktop}{
    background-color:green;
    margin-right: auto;
    margin-left: auto;
}
`};
`