import React from "react";
import TeamSection from "../TeamSection/TeamSection";
import RRImg from "/RRImg.png"

const RRSection = () => {
  return (
    <TeamSection
      teamImg={RRImg}
      teamTagLine={"RAJSTHAN ROYALS"}
      teamDesc={"HALLA BOL...."}
      linkToTeamPage={"/"}
      customStyles={"right-0"}
      teamDescStyles={"text-beta "}

    />
  );
};

export default RRSection;
