import React from "react";
import styledComponents from "styled-components";
import Header from "./Header";
import Section from "./Section";

function Home() {
  const FakeData = [
    {
      title: "Model 3",
      description: " Order Online for Touchless Delivery ",
      image: "model-3.jpg",
      rightBtnText: "existing inventory",
      leftBtnText: "custom order",
    },
    {
      title: "Model Y",
      description: " Order Online for Touchless Delivery ",
      image: "model-y.jpg",
      rightBtnText: "existing inventory",
      leftBtnText: "custom order",
    },
    {
      title: "Model X",
      description: " Order Online for Touchless Delivery ",
      image: "model-x.jpg",
      rightBtnText: "existing inventory",
      leftBtnText: "custom order",
    },
    {
      title: "Model S",
      description: " Order Online for Touchless Delivery ",
      image: "model-s.jpg",
      rightBtnText: "existing inventory",
      leftBtnText: "custom order",
    },
    {
      title: "Solar Panels ",
      description: " Lowest Cost Solar Panels in America ",
      image: "solar-panel.jpg",
      rightBtnText: "order now",
      leftBtnText: "learn more",
    },
    {
      title: "Solar Roof ",
      description: " Produce Clean Energy From Your Roof ",
      image: "solar-roof.jpg",
      rightBtnText: "order now",
      leftBtnText: "learn more",
    },
    {
      title: " Accessories  ",
      description: "",
      image: "accessories.jpg",
      leftBtnText: "shop now",
    },
  ];
  return (
    <Container dir="ltr">
      <Header />
      {FakeData.map((i) => (
        <Section {...i} />
      ))}
    </Container>
  );
}

export default Home;

const Container = styledComponents.div`
    height:100vh;
`;
