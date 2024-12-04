/* eslint-disable react/prop-types */
import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const TeamSection = ({
  teamImg,
  teamTagLine,
  teamDesc,
  linkToTeamPage,
  customStyles,
  teamDescStyles,
}) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative mb-10">
      <img src={teamImg} alt="" className="object-cover brightness-[40%] " />
      <div className={`absolute ${customStyles} w-[40%] space-y-10 p-10`}>
        <div className="text-white text-2xl tracking-wide">
          <p>{teamTagLine}</p>
        </div>
        <div className="text-beta text-8xl tracking-wide">
          <p className={teamDescStyles}>{teamDesc}</p>
        </div>
        <div>
          <Link to={linkToTeamPage}>
            <Button>Explore The Line-Up</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
