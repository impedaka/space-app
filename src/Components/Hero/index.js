import React from "react";
import { HeroBg, Header, Text, Row, Col } from "./Hero";
const Hero = () => {
  return (
    <>
      <HeroBg>
        <Col>
          <Header>DISCOVER SPACE MISSIONS</Header>
          <Text style={{ paddingBottom: "40px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
            pellentesque consectetur elementum, libero eget amet. Faucibus
            senectus neque sed congue.
          </Text>
        </Col>
      </HeroBg>
    </>
  );
};

export default Hero;
