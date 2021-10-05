import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

import Modal from "react-modal";
import Container from "src/components/Container/Container";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxWidth: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const Scroll = dynamic(
  () => {
    return import("../../../../../components/Story2");
  },
  { ssr: false }
);

const Hehe = () => {
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Scroll />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Container center>
        <h1>Jeg godtar vilkårene for å se på disse videoene.*</h1>
        <div style={{
          fontSize: 6
        }}>Jeg godtar at alt materiale av meg kan brukes i forbindelse med Glede sin markedsføring, selges til andre tjenester, samt vises til Kasper sine foreldre. Det er null GDPR på denne videoen.</div>
        <button style={{
          margin: "30px 0",
          background: "rgba(0,0,0,0)",
          border: "1px solid black",
          borderRadius: 20,
          padding: 10,
          fontSize: 15
        }} onClick={closeModal}>Jeg godtar</button>
        </Container>
      </Modal>
    </div>
  );
};

export default Hehe;
