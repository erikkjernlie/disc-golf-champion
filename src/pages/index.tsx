import React, { useEffect, useState } from "react";
import { fetchData } from "src/aws/aws";
import Container from "src/components/Container/Container";
import { User } from "src/models/client/userModel";
import { parseName } from "utils/utils";
import Lottie from "lottie-react";
import CountUp from "react-countup";

import animation from "public/static/animations/champ.json";

const Players = () => {
  const [scores, setScores] = useState<User[]>([]);
  useEffect(() => {
    fetchData("users", setScores);
  }, []);
  console.log("scores", scores);
  return (
    <Container
      center
      background="orange"
      style={{
        height: "100vh",
      }}
    >
      <Lottie
        animationData={animation}
        style={{
          width: "90vw",
          height: "90vw",
          maxWidth: 800
        }}
      />
      <Container
        style={{
          position: "absolute",
          marginTop: "5vw"
        }}
      >
        <h2>
          {parseName(
            scores.find((item) => item.name === "champion")?.currentChampion
          )}
        </h2>
      </Container>
      <Container
        flex
        style={{
          position: "absolute",
          bottom: 5,
        }}
      >
        {scores
          .filter((item) => item.name !== "champion")
          .map((user, index) => (
            <Container key={user.name} flex marginRight="medium">
              <Container marginRight="small">{parseName(user.name)}</Container>
              <div>
                <CountUp end={user?.score || 0} duration={1.5} />
              </div>
            </Container>
          ))}
      </Container>
    </Container>
  );
};

export default Players;
