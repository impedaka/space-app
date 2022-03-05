import styled from "styled-components";
import stars from "../../Assets/stars.jpg";
import bg from "../../Assets/hero.png";
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
  max-width: 100%;
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
  padding: 70px 140px;
  border: rgba(255, 255, 255, 0.5) solid 1px;
`;
export const SmallButton = styled.div`
  padding: 27px 53px;
  border: rgba(255, 255, 255, 0.5) solid 1px;
`;
