import React from "react";
import { Fade } from "react-reveal";
import styledComponents from "styled-components";

function Section({ title, description, image, rightBtnText, leftBtnText }) {
  return (
    <Wrap bgImage={image}>
      <Fade bottom>
        <ItemText>
          <h1> {title} </h1>
          <p> {description} </p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section;
const Wrap = styledComponents.div`
  scroll-snap-align: start;
  width:100vw;
  height: 100vh;
  background-color: orange;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items:center;
`;
const ItemText = styledComponents.div`
  padding-top:15vh;
  text-align: center;
  h1{
    font-size: 48px;
    font-weight: 500;
  }
  p{
    margin-top: 10px
  }
`;
const ButtonGroup = styledComponents.div`
  display:flex;
  gap:16px;
  margin-bottom:30px;

  @media (max-width:768px){
    flex-direction:column;
  }
`;
const LeftButton = styledComponents.button`
  background-color: rgba(23,26,32,0.8);
  border:none;
  cursor: pointer;
  height: 40px;
  padding: 4px 24px;
  box-sizing: border-box;
  width:250px;
  color:white;
  border-radius:100px;
  display:flex;
  align-items:center;
  justify-content:center;
  opacity:0.85;
  font-size: 12px;
  text-transform:uppercase;
  font-weight: 500;
`;
const RightButton = styledComponents(LeftButton)`
  background:white;
  opacity: 0.65;
  color:black;
`;

const DownArrow = styledComponents.img`
  height:40px;
  animation: animateDown 1.5s infinite;
  margin-bottom: 10px;
`;

const Buttons = styledComponents.div`
  display:flex;
  flex-direction:column;

`;
