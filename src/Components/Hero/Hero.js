import styled from "styled-components";
import stars from "../../Assets/bg.png";
import bg from "../../Assets/hero.png";
import ree from "../../Assets/stars.png";
export const Star = styled.div`
  background: url(${ree});
  min-width: 100%;
  height: auto;
  background-size: cover;

  z-index: 999999 !important;
`;
export const Starbg = styled.div`
  background: url(${stars});
  max-width: 100%;
  height: auto;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const HeroBg = styled.div`
  background: url(${bg});
  min-width: 100%;
  min-height: 610px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Header = styled.p`
  font-size: 64px;
  width: 330px;
`;

export const Text = styled.p`
  font-size: 14px;
  width: 330px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Subheading = styled.p`
  font-size: 36px;
`;
export const Button = styled.div`
  padding: 50px 100px;
  width: 100%;
  border: rgba(255, 255, 255, 0.5) solid 1px;
`;
export const SmallButton = styled.div`
  padding: 27px 53px;
  border: rgba(255, 255, 255, 0.5) solid 1px;
`;
export const Grid = styled.div`
  display: grid;
  gap: 140px;
  padding-top: 130px;
  padding-left: 250px;
  padding-right: 250px;
  grid-template-columns: repeat(3, 1fr);
`;

export const GridItem = styled.div`
  max-height: 280px;
  max-width: 225px;
  background-color: rgba(2, 8, 24, 0.5);
  border: 2px solid #ffffff;
`;
export const LargeText = styled.p`
  font-size: 24px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;
export const Foot = styled.div`
  margin-top: 180px;
  background-color: #020818;
  padding: 50px;
`;
