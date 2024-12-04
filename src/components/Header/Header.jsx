import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0 bg-black text-white px-10 py-5">
      <Container>
        <nav className=" flex justify-between items-center">
          <div className="flex justify-between items-center w-[35%] px-10">
            <Link>Home</Link>
            <Link>New</Link>
            <Link>Shop</Link>
          </div>
          <div>LOGO - Cricket Icons</div>
          <div className="flex justify-between items-center w-[35%] px-10">
            <Link>Search</Link>
            <Link className="bg-alpha text-beta px-10 py-2 rounded-full">Download App</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
