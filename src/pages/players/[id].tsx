import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { putData, updateChampion } from "src/aws/aws";
import Container from "src/components/Container/Container";
import { PLAYERS } from "src/constants/players";
import animation from "public/static/animations/loading.json";
import Lottie from "lottie-react";

const Player = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const player: string = String(id).toLowerCase();
    console.log("playe", player)
    console.log(
      "PLAYERS.indexOf(String(player)) > 0",
      PLAYERS.indexOf(player) >= 0
    );
    if (PLAYERS.indexOf(player) >= 0) {
      putData("users", player).then(() => {
        updateChampion("users", player).then(() => {

          router.push("/");
        });
      });
    }
  }, [id]);
  return (
    <Container
      center
      style={{
        height: "100vh",
        background: "#FFB32B"

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
    </Container>
  );
};

export default Player;
