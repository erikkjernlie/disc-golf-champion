import React, { useEffect, useState } from "react";
import { fetchData } from "src/aws/aws";
import Container from "src/components/Container/Container";
import { User } from "src/models/client/userModel";
import { parseName } from "utils/utils";
import Lottie from "lottie-react";
import CountUp from "react-countup";

import animation from "public/static/animations/champ.json";
import party from "public/static/animations/party-popper.json";
import { PLAYERS, PLAYERS_OBJECT, PLAYER_COLORS } from "src/constants/players";

const Players = () => {
  const [scores, setScores] = useState<User[]>([]);

  const currentChamp = scores.find(
    (item) => item.name === "champion"
  )?.currentChampion;

  const backgroundColor = currentChamp && currentChamp.length > 0 
    ? PLAYERS_OBJECT[currentChamp].color
    : "#FFB32B";

  const [showPopper, setShowPopper] = useState(true);
  useEffect(() => {
    fetchData("users", setScores);
    setTimeout(() => {
      setShowPopper(false);
    }, 900);
  }, []);
  console.log("scores", scores);
  return (
    <div>
        <Container
          style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            zIndex: 1,
          }}
        >
          <Lottie
            animationData={party}
            style={{
              width: "50vw",
              height: "50vh",
              maxWidth: 800,
              right: 0,
              bottom: 0,
              position: "absolute"
            }}
            loop={true}
          />
        </Container>

      <Container
        center
        style={{
          background: backgroundColor ? backgroundColor : "#FFB32B",
          height: "100vh",
        }}
      >
        <Lottie
          animationData={animation}
          style={{
            width: "90vw",
            height: "90vw",
            maxWidth: 800,
          }}
        />
        <Container
          style={{
            position: "absolute",
            marginTop: "5vw",
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
                <Container marginRight="small">
                  {parseName(user.name)}
                </Container>
                <div>
                  <CountUp end={user?.score || 0} duration={1.5} />
                </div>
              </Container>
            ))}
        </Container>
      </Container>
    </div>
  );
};

export default Players;
