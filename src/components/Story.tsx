import React, { useEffect } from "react";
import Head from "next/head";
import { Bubbles } from "@gobistories/gobi-web-integration";
import Container from "./Container/Container";

const Story = () => {

        useEffect(() => {
           if (typeof window !== undefined) {
            new Bubbles({
                container: "#container",
                color: "red",
                stories: [{ id: "xj4a9", title: "Halla" }],
                bubbleSize: "500vw",
              });
           }
        }, [window])
  return (
    <Container center style={{
        width: "100vw",
        height: "100vh"
    }}>
      <div id="container"></div>
    </Container>
  );
};

export default Story;
