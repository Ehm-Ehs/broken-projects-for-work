import styled, { css } from "styled-components";

// import { device } from "./breakpoint";

export const Button = styled.button`
text-align:center
height:40px;
display: flex;
justify-content: center;
align-item: center;
font-size:14px;
font-weight:600px;
${(props) =>
  props.block === true
    ? css`
        display: block;
        width: 100%;
      `
    : css``}
// type
 
${(props) =>
  props.primary === true
    ? css`
        &:hover {
          background-color: #247809;
          border: 1px solid #247809;
        }
        &:focus {
          background-color: #429a24;
          border: 1px solid #429a24;
        }
        &:disabled {
          background-color: #b5f2a0;
          border: 1px solid #b5f2a0;
        }
        background-color: #429a24;
        color: #ffffff;
        border: 1px solid #429a24;
      `
    : css``}
 ${(props) =>
   props.secondary === true
     ? css`
         &:hover {
           background-color: #deffd2;
           color: #247809;
           border: 1px solid #deffd2;
         }
         &:focus {
           color: #247809;
           background-color: #ecffe5;
           border: 1px solid #ecffe5;
         }
         &:disabled {
           color: #84c56f;
           background-color: #f9fff6;
           border: 1px solid #f9fff6;
         }
         background-color: #ecffe5;
         color: #247809;
         border: 1px solid #ecffe5;
       `
     : css``}
${(props) =>
  props.secondaryGrey === true
    ? css`
        &:hover {
          color: #1d2939;
        }
        &:focus {
          color: #344054;
        }
        &:disabled {
          color: #d0d5dd;
          border: 1px solid #eaecf0;
        }
        color: #344054;
        border: 1px solid #475467;
        background-color: white;
      `
    : css``}
// link has no icon feature
${(props) =>
  props.tertiary === true
    ? css`
        &:hover {
          background-color: #ecffe5;
          color: #247809;
        }
        &:focus {
          color: #247809;
        }
        &:disabled {
          color: #d0d5dd;
        }
        color: #247809;
        border: 1px solid transparent;
      `
    : css``}
 ${(props) =>
   props.tertiaryGray === true
     ? css`
         &:hover {
           background-color: #475467;
         }
         &:focus {
           color: #667085;
         }
         &:disabled {
           color: #d0d5dd;
         }
         color: #667085;
         border: 1px solid transparent;
       `
     : css``}
${(props) =>
  props.link === true
    ? css`
        &:hover {
          color: #196201;
        }
        &:focus {
          color: #247809;
        }
        &:disabled {
          color: #d0d5dd;
        }
        color: #247809;
        border: 1px solid transparent;
      `
    : css``}
${(props) =>
  props.linkGray === true
    ? css`
        &:hover {
          color: #475467;
        }
        &:focus {
          color: #667085;
        }
        &:disabled {
          color: #d0d5dd;
        }
        color: #667085;
        border: 1px solid transparent;
      `
    : css``}
 ${(props) =>
   props.primaryDestructive === true
     ? css`
         &:hover {
           background-color: #b42318;
           border: 1px solid #b42318;
         }
         &:focus {
           background-color: #d92d20;
           border: 1px solid #d92d20;
         }
         &:disabled {
           background-color: #fecdca;
           border: 1px solid #fecdca;
         }
         background-color: #d92d20;
         color: #ffffff;
         border: 1px solid #d92d20;
       `
     : css``}
 ${(props) =>
   props.secondaryDestructive === true
     ? css`
         &:hover {
           background-color: #fee4e2;
           color: #b42318;
           border: 1px solid #fee4e2;
         }
         &:focus {
           color: #b42318;
           background-color: #fef3f2;
           border: 1px solid #fef3f2;
         }
         &:disabled {
           color: #fda29b;
           background-color: #fffbfa;
           border: 1px solid #fffbfa;
         }
         background-color: #fef3f2;
         color: #b42318;
         border: 1px solid #fef3f2;
       `
     : css``}
${(props) =>
  props.secondaryGreyDestructive === true
    ? css`
        &:hover {
          color: #912018;
          background-color: #fda29b;
        }
        &:focus {
          color: #b42318;
        }
        &:disabled {
          color: #fda29b;
          border: 1px solid #fecdca;
        }
        color: #b42318;
        border: 1px solid #fda29b;
        background-color: white;
      `
    : css``}
${(props) =>
  props.tertiaryDestructive === true
    ? css`
        &:hover {
          background-color: #fef3f2;
          color: #b42318;
        }
        &:focus {
          color: #b42318;
        }
        &:disabled {
          color: #fda29b;
        }
        color: #b42318;
        border: 1px solid transparent;
      `
    : css``}
 ${(props) =>
   props.tertiaryGrayDestructive === true
     ? css`
         &:hover {
           background-color: #fef3f2;
           color: #912018;
         }
         &:focus {
           color: #b42318;
         }
         &:disabled {
           color: #fda29b;
         }
         color: #b42318;
         border: 1px solid transparent;
       `
     : css``}
${(props) =>
  props.linkDestructive === true
    ? css`
        &:hover {
          color: #912018;
        }
        &:focus {
          color: #b42318;
        }
        &:disabled {
          color: #fda29b;
        }
        color: #b42318;
        border: 1px solid transparent;
      `
    : css``}
${(props) =>
  props.linkGrayDestructive === true
    ? css`
        &:hover {
          color: #912018;
        }
        &:focus {
          color: #b42318;
        }
        &:disabled {
          color: #fda29b;
        }
        color: #b42318;
        border: 1px solid transparent;
      `
    : css``}
// sizes
${(props) =>
  props.md === true
    ? css`
        padding: 10px 16px;
      `
    : ""}
${(props) =>
  props.lg === true
    ? css`
        padding: 10px 18px;
        font-size: 16px;
      `
    : ""}
 ${(props) =>
   props.xl === true
     ? css`
         padding: 12px 20px;
         font-size: 16px;
       `
     : ""}
    ${(props) =>
      props.xxl === true
        ? css`
            padding: 16px 28px;
            font-size: 18px;
          `
        : ""}
 
// icons
${(props) =>
  props.icon === true
    ? css`
gap:9px
width: 100%;
  `
    : css``}
${(props) =>
  props.iconXxl === true
    ? css`
  gap:14px
  width: 100%;
`
    : css``}
   
${(props) =>
  props.iconOnlySm === true
    ? css`
        width: 36px;
        height: 36px;
      `
    : css``}
${(props) =>
  props.iconOnlyMd === true
    ? css`
        width: 40px;
        height: 40px;
      `
    : css``}
  ${(props) =>
    props.iconOnlyLg === true
      ? css`
          width: 44px;
          height: 44px;
        `
      : css``}
 ${(props) =>
   props.iconOnlyXl === true
     ? css`
         width: 48px;
         height: 48px;
       `
     : css``}
${(props) =>
  props.iconOnlyXxl === true
    ? css`
        width: 56px;
        height: 56px;
      `
    : css``}
// social media
    `;

export const ButtonSocial = styled.button`
  background-color: white;
  color: #344054;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  ${(props) =>
    props.brand === true
      ? css`
          &:hover {
            background-color: #f9fafb;
          }
          &:focus {
            box-shadow: ;
          }
          width: 214px;
          height: 44px;
          display: flex;
          justify-content: center;
          gap: 12px;
          padding: 10px 16px;
        `
      : css``}
  ${(props) =>
    props.brandIcon === true
      ? css`
          &:hover {
            background-color: #f9fafb;
          }
          &:focus {
            box-shadow: ;
          }
          border: 1px solid #d0d5dd;
          background-color: white;
          width: 44px;
          height: 44px;
        `
      : css``}
    ${(props) =>
    props.fbBrand === true
      ? css`
          &:hover {
            background-color: #0c63d4;
          }
          &:focus {
            box-shadow: ;
          }
          border: 1px solid #d0d5dd;
          background-color: #1877f2;
          gap: 12px;
          color: white;
          width: 214px;
          height: 44px;
          padding: 10px 16px;
        `
      : css``}
    
    ${(props) =>
    props.fbBrandIcon === true
      ? css`
          &:hover {
            background-color: #0c63d4;
          }
          &:focus {
            box-shadow: ;
          }
          border: 1px solid transparent;
          background-color: #1877f2;
          width: 44px;
          height: 44px;
        `
      : css``}
 ${(props) =>
    props.blackBrand === true
      ? css`
          &:focus {
            box-shadow: ;
          }
          border: 1px solid transparent;
          background-color: black;
          gap: 12px;
          color: white;
          width: 214px;
          height: 44px;
          padding: 10px 16px;
        `
      : css``}
 
 ${(props) =>
    props.blackBrandIcon === true
      ? css`
          &:focus {
            box-shadow: ;
          }
          border: 1px solid transparent;
          background-color: #000000;
          width: 44px;
          height: 44px;
        `
      : css``}
    
     ${(props) =>
    props.twitterBrand === true
      ? css`
          &:hover {
            background-color: #0c8bd9;
          }
          &:focus {
            box-shadow: ;
          }
          border: 1px solid #d0d5dd;
          background-color: #1da1f2;
          gap: 12px;
          color: white;
          padding: 10px 16px;
          width: 214px;
          height: 44px;
        `
      : css``}
    
    ${(props) =>
    props.twitterBrandIcon === true
      ? css`
          &:hover {
            background-color: #0c63d4;
          }
          &:focus {
            box-shadow: ;
          }
          border: 1px solid transparent;
          background-color: #1da1f2;
          width: 44px;
          height: 44px;
        `
      : css``}
        ${(props) =>
    props.dribbleBrand === true
      ? css`
          &:hover {
            background-color: #e62872;
          }
          &:focus {
            box-shadow: ;
          }
          border: 1px solid #d0d5dd;
          background-color: #ea4c89;
          gap: 12px;
          color: white;
          width: 214px;
          height: 44px;
          padding: 10px 16px;
        `
      : css``}
       
       ${(props) =>
    props.dribbleBrandIcon === true
      ? css`
          &:hover {
            background-color: #e62872;
          }
          &:focus {
            box-shadow: ;
          }
          border: 1px solid transparent;
          background-color: #ea4c89;
          width: 44px;
          height: 44px;
        `
      : css``}
    
      ${(props) =>
        props.mdSocial === true
          ? css`
              border: 1px solid #D0D5DD;
              width: 100%;
              height: 44px;
              background-color: white;
              gap: 12px;
              color:#344054;
              padding:10px 16px;
              display: flex;
              justify-content: center;
            `
          : css``}
      ${(props) =>
    props.mdFb === true
      ? css`
          border: 1px solid transparent;
          width: 100%;
          height: 44px;
          background-color: #1877f2;
          gap: 12px;
          color: white;
          display: flex;
          justify-content: center;
        `
      : css``}
          ${(props) =>
    props.mdBlack === true
      ? css`
          border: 1px solid transparent;
          width: 100%;
          height: 44px;
          background-color: black;
          gap: 12px;
          color: white;
          display: flex;
          justify-content: center;
        `
      : css``}
`;

export const ButtonMobile = styled.button`
   justify-content:evenly;
   background-color:black;
   color:white;
   text-align:center
height:40px;
display: flex;
font-size:14px;
font-weight:600px;
width:135px;
height:40px;
border-radius:5px;
   ${(props) =>
     props.black === true
       ? css`
           background-color: white;
           color: black;
           border: 1px solid black;
         `
       : css``}
      ${(props) =>
        props.white === true
          ? css`
              background-color: white;
              color: white;
              border: 1px solid white;
            `
          : css``}
      `;