import React from "react";
import { GridItem, LargeText } from "../Hero/Hero";
import cardimg from "../../Assets/card.png";
const Card = () => {
  return (
    <>
      <GridItem>
        <img src={cardimg} />
        <LargeText>ACRIMSAT</LargeText>
      </GridItem>
    </>
  );
};

export default Card;
