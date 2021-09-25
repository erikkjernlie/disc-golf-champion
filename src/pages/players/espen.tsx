import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { putData, updateChampion } from "src/aws/aws";
import { PLAYERS } from "..";

const Espen = () => {
  const { espen } = PLAYERS;
  const router = useRouter();
  // todo: only need one page with a user
  useEffect(() => {
    putData("users", espen).then(() => {
      updateChampion("users", espen).then(() => {
        router.push("/players");
      });
    });
  }, []);
  return <div></div>;
};

export default Espen;
