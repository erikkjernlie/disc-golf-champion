import React from "react";

import dynamic from "next/dynamic";
import Story from "src/components/Story";

const Scroll = dynamic(
  () => {
    return import("../components/Story");
  },
  { ssr: false }
);

const Hilsen = () => {
  return (
    <div>
      <Scroll />
    </div>
  );
};

export default Hilsen;
