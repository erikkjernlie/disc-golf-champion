import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { fetchData, putData } from "src/aws/aws";
import { PLAYERS } from "..";
import { User } from "src/models/client/userModel";
const Players = () => {
  const [scores, setScores] = useState<User[]>([]);
  useEffect(() => {
    fetchData("users", setScores);
  }, []);
  console.log("scores", scores);
  return (
    <div>
      {scores.length}
      {scores.map((user) => (
        <div style={{
            display: "flex"
        }}>
          <div>{user.name}</div>
          <div>{user?.score || user?.currentChampion}</div>
        </div>
      ))}
    </div>
  );
};

export default Players;
