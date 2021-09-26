import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { putData, updateChampion } from "src/aws/aws";
import Container from "src/components/Container/Container";
import { PLAYERS } from "src/constants/players";

const Player = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const player: string = String(id).toLowerCase();
    console.log(
      "PLAYERS.indexOf(String(player)) > 0",
      PLAYERS.indexOf(player) >= 0
    );
    if (PLAYERS.indexOf(player) >= 0) {
      console.log("idA", player);
      putData("users", player).then(() => {
        updateChampion("users", player).then(() => {
          router.push("/players");
        });
      });
    }
  }, []);
  return (
    <Container
      center
      style={{
        height: "100vh",
      }}
    >
      Updating
    </Container>
  );
};

export default Player;
