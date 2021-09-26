import React, { useEffect, useState } from "react";
import { fetchData } from "src/aws/aws";
import Container from "src/components/Container/Container";
import { User } from "src/models/client/userModel";
import { parseName } from "utils/utils";
const Players = () => {
  const [scores, setScores] = useState<User[]>([]);
  useEffect(() => {
    fetchData("users", setScores);
  }, []);
  console.log("scores", scores);
  return (
    <Container
      center
      style={{
        height: "100vh",
      }}
    >
      {scores.find((item) => item.name === "champion")?.currentChampion}

      <Container
        flex
        style={{
          position: "absolute",
          bottom: 0,
        }}
      >
        {scores
          .filter((item) => item.name !== "champion")
          .map((user) => (
            <Container key={user.name} flex marginRight="medium">
              <Container marginRight="small">{parseName(user.name)}</Container>
              <div>{user?.score}</div>
            </Container>
          ))}
      </Container>
    </Container>
  );
};

export default Players;
