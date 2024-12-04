import heroImage from "/hero-demo-pic.jpg";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative mt-10">
      {/* <Container> */}
      <img
        src={heroImage}
        alt=""
        className="object-cover brightness-[40%] max-w-[90vw] rounded-[100px]"
      />
      <div className="absolute items-center justify-center space-y-40 flex flex-col p-10  ">
        <div>
          <p className="text-beta text-4xl">Build Your Iconic Cricket Team</p>
        </div>
        <div>
          <p className="text-8xl text-white">Elevate Your Collection</p>
        </div>
        <div>
          <Link>
            <Button>Explore Now</Button>
          </Link>
        </div>
      </div>
      {/* </Container> */}
    </section>
  );
};

export default HeroSection;
