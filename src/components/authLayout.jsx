// import React, { useRef } from "react";
// import { Outlet } from "react-router-dom";
// import { Col, Container, Row } from "reactstrap";
import { Container } from "../styles/organic/container";
import {Row} from "../styles/organic/row"
import {Col} from "../styles/organic/col"
import { Button,ButtonXxl, ButtonMobile,ButtonSocial } from "../styles/organic/button";
// import logoSvg from "assets/images/aos-logo.svg";

 function AuthLayout() {
//   const date = useRef(new Date());
  return (
    <Container className="" >
      <Row>
        <Col  col={12}>       
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam vero quam illum voluptatem. Quibusdam, aliquid perferendis, sapiente, ipsa nihil necessitatibus quaerat perspiciatis quae corrupti architecto reprehenderit doloribus vitae? Perferendis.</p>      
 </Col>
 <Col  >     

 </Col>
      </Row>
      <Button primary xxl>Button CTA</Button>  
      <Button link md block >Button CTA</Button> 
      <Button iconOnlyXl primary>Button CTA</Button>  
      <ButtonMobile  black >Button CTA</ButtonMobile>
      <ButtonSocial dribbleBrand >Button CTA</ButtonSocial>
      <ButtonSocial mdSocial >Button CTA</ButtonSocial>
        {/* <Col lg={5} sm={5} className="bg-Img sign-cover-img"> */}
          {/* <Spacer unit={44} /> */}
          {/* <Row className="logo-container"> */}
            {/* <Spacer left={90} /> */}
            {/* <Col className="logo-spacing">
              <img src={logoSvg} alt="thrive-aos-logo" width={178} />
            </Col>
          </Row> */}
          {/* <Spacer unit={500} /> */}
          {/* <Row className="cover-img-text d-flex flex-column"> */}
            {/* <Col className="text-black foot-info">Invest in a Food Secured Future</Col> */}
            {/* <Col xs={8} className="text-dark foot-body">
            Our technology solution aimed at digitizing 
            all processes in the agricultural value chain.
          </Col> */}
          {/* </Row>
        </Col>
        <Col
          sm={12}
          lg={6}
          className={`d-flex justify-content-center align-items-start ml-5 flex-column login-container ${
            window.innerWidth > 1599 ? "mt-5" : ""
          }`}
        > */}
          {/* <Spacer unit={50} /> */}
          {/* <Row className={`d-flex flex-column mt-5 ${window.innerWidth > 1599 ? "mb-5" : ""}`}>
            <Col className="mt-4 login-bottom-spacing">
              <Outlet />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-self-center form-icon copyright-sign-in">
              © Copyright ThriveAgric {date.current.getUTCFullYear()}. All rights reserved.
            </Col>
          </Row> */}
          {/* <Spacer unit={150} /> */}
        {/* </Col> */}
      {/* </Row> */} 
    </Container>
  );
}

export default AuthLayout