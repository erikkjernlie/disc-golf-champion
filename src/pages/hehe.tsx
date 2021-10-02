import dynamic from "next/dynamic";
import React from "react";


const Scroll = dynamic(
  () => {
    return import("../components/Story2");
  },
  { ssr: false }
);

const Hehe = () => {
  return (
    <div>
      <Scroll />
    </div>
  );
};

export default Hehe;
