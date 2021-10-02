import React, { useEffect } from "react";
import Head from "next/head";
import { Bubbles } from "@gobistories/gobi-web-integration";
import Container from "./Container/Container";
import animation from "public/static/animations/confetti.json";
import Lottie from "lottie-react";

const Story = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      new Bubbles({
        container: "#container",
        color: "#007EA8",
        stories: [{ id: "h4bja", title: "Kjære Kasper 💛🥏🌟" }],
        bubbleSize: "250px",
      });
    }
  }, [window]);
  return (
    <Container
      center
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#BEE3E5",
      }}
    >
      <Lottie
        animationData={animation}
        style={{
          width: "100vw",
          height: "100vw",
          position: "absolute",
          zIndex: 0,
        }}
      />
      <div id="container"></div>
    </Container>
  );
};

export default Story;
