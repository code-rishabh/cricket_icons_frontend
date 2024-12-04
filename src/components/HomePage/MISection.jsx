import React from "react";
import MIImg from "/MIImg.png";

import TeamSection from "../TeamSection/TeamSection";
const MISection = () => {
  return (
    <TeamSection
      teamImg={MIImg}
      teamTagLine={"MUMBAI INDIANS - THE 5 TIMES CHAMPION !!!"}
      teamDesc={"DUNIYA HILA DENGE HUM...."}
      linkToTeamPage={"/"}
      customStyles={"left-28"}
      teamDescStyles={"text-beta "}

    />
  );
};

export default MISection;
