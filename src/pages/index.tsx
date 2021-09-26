import React, { useState } from "react";
import { fetchData, putData } from "src/aws/aws";
import Container from "src/components/Container/Container";



const Home = () => {
  const [tram, setTram] = useState("");

  const fetchDataFormDynamoDb = async () => {
  };

  const updateDataFormDynamoDb = async () => {
    const userData = {
      name: "Erik",
      score: 1,
    };
  };
  return (
    <div>
      <div>Protramming</div>
      <Container center>
        <button onClick={async () => fetchDataFormDynamoDb()}> Fetch </button>
        <button onClick={async () => updateDataFormDynamoDb()}> update </button>
      </Container>
      <input onChange={(e) => setTram(e.target.value)} value={tram} />
    </div>
  );
};

export default Home;
