import React from "react";
import sectionTwoImg from "/sectionTwoImg.png";
import MiniSection from "../TeamSection/MiniSection";

const SectionTwo = () => {
  return (
    <MiniSection
      bgImg={sectionTwoImg}
      headingOne={"Latest Releases!"}
      headingTwo={"Celebrate the Legends"}
      description={
        "Elevate your home decor and embrace the spirit of the game with our meticulously crafted cricket collectibles, each a unique testament to the greatness of the sport"
      }
      linkToNewPage={""}
      textOrientation={"right-20"}
    />
  );
};

export default SectionTwo;
