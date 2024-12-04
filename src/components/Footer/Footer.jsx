import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-black justify-between px-10 py-10 bottom-0 flex w-full text-white">
      <div className="justify-between flex items-center px-10 w-[35%]">
        <Link>Shop</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link>Media</Link>
      </div>
      <div>LOGO- Cricket Icons</div>
      <div className="flex justify-between items-center px-10 w-[35%]">
        <FaInstagram />
        <FaFacebook />
        <FaYoutube />
      </div>
    </section>
  );
};

export default Footer;
