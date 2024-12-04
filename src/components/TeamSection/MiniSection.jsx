/* eslint-disable react/prop-types */
import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const MiniSection = ({
  bgImg,
  headingOne,
  headingTwo,
  description,
  linkToNewPage,
  textOrientation,
}) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <img
        src={bgImg}
        alt=""
        className="object-cover brightness-[40%] w-[90vw] rounded-[100px]"
      />
      <div className={`absolute ${textOrientation} w-[50%] space-y-10 p-10`}>
        <div className="text-beta text-6xl tracking-wide">
          <p>{headingOne}</p>
          <p>{headingTwo}</p>
        </div>
        <div className="text-white text-2xl tracking-wide leading-relaxed">
          <p>{description}</p>
        </div>
        <div>
          <Link to={linkToNewPage}>
            <Button>Shop the Collection</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiniSection;
