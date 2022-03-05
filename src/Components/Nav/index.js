import React from "react";
import Card from "../Card";
import Footer from "../Footer";
import {
  Button,
  Row,
  Starbg,
  Subheading,
  Col,
  SmallButton,
  Grid,
} from "../Hero/Hero";

const Nav = () => {
  return (
    <Starbg>
      <Col>
        <Row>
          <Button style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            <Subheading style={{ flexGrow: "1" }}>From Exosphere</Subheading>
          </Button>
          <Button>
            <Subheading style={{ flexGrow: "1" }}>
              To the Solar System
            </Subheading>
          </Button>
          <Button>
            <Subheading style={{ flexGrow: "1" }}>And Beyond</Subheading>
          </Button>
        </Row>
        <Row style={{}}>
          <SmallButton style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            <Subheading>Past</Subheading>
          </SmallButton>
          <SmallButton>
            <Subheading>Current</Subheading>
          </SmallButton>
          <SmallButton>
            <Subheading>Future</Subheading>
          </SmallButton>
        </Row>
        <Grid>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
        <Footer />
      </Col>
    </Starbg>
  );
};

export default Nav;
