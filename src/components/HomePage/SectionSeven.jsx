import React from "react";
import MiniSection from "../TeamSection/MiniSection";
import sevenInchBgImg from "/sevenInchBgImg.png";

const SectionSeven = () => {
  return (
    <MiniSection
      bgImg={sevenInchBgImg}
      headingOne={"Discover Cricket Stars "}
      headingTwo={"Action Figures"}
      description={`Collect 7" articulated action figures of your favorite Cricket Stars`}
      textOrientation={"left-20"}

    />
  );
};

export default SectionSeven;
