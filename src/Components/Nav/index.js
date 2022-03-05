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
        <Row style={{ justifyContent: "space-around" }}>
          <Button style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            <Subheading>From Exosphere</Subheading>
          </Button>
          <Button>
            <Subheading>To the Solar System</Subheading>
          </Button>
          <Button>
            <Subheading>And Beyond</Subheading>
          </Button>
        </Row>
        <Row>
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
