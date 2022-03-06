import React from "react";
import { GridItem, LargeText } from "../Hero/Hero";
import cardimg from "../../Assets/card.png";
const Card = ({data}) => {
  return (
    <>
      <GridItem>
        <a href={data[1].trim()} target="__blank"> 
        <img src={data[3].trim()} />
        <LargeText>{data[0]}</LargeText>
        </a>
      </GridItem>
    </>
  );
};

export default Card;
