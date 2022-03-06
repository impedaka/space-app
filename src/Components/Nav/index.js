import axios from "axios";
import React, { useState } from "react";
import Card from "../Card";
import Footer from "../Footer";
import {arr,a1} from '../../data'
import {
  Button,
  Row,
  Starbg,
  Subheading,
  Col,
  SmallButton,
  Grid,
  Star,
} from "../Hero/Hero";

const Nav = () => {

  const [type, setType] = useState(0);
  const [data, setData] = useState()

  const fetchData = async () => {

    const response = await axios({
      url: 'https://api.mage.ai/v1/predict',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "api_key": "IGD4ZNudIAhYx2rO5KuhyS4m7u2wryNrHBPF14Vr",
        "features": [
          {
            "id": 1
          }
        ],
        "include_features": false,
        "model": "recommendations_rank_1646558761545",
        "version": "1"
      }
    });

    setData(response)

  }

  fetchData();


  return (
    <Starbg>
      <Star>
        <Col>
          <Row>
            <Button style={{  backgroundColor: type==0?"rgba(255, 255, 255, 0.2)":"" }} onClick={() => setType(0)} >
              <Subheading style={{ flexGrow: "1" }} >From Exosphere</Subheading>
            </Button>
            <Button style={{  backgroundColor: type==1?"rgba(255, 255, 255, 0.2)":"" }} onClick={() => setType(1)} >
              <Subheading style={{ flexGrow: "1" }} >
                To the Solar System
              </Subheading>
            </Button>
            <Button  style={{  backgroundColor: type==2?"rgba(255, 255, 255, 0.2)":"" }} onClick={() => setType(2)} >
              <Subheading style={{ flexGrow: "1" }}  >And Beyond</Subheading>
            </Button>
          </Row>
         
          <Grid>
            {
              type == 1 ? arr.map(data => <Card data={data} />) : a1.map(data => <Card data={data} />)
            }
          </Grid>
          <Footer />
        </Col>
      </Star>
    </Starbg>
  );
};

export default Nav;
