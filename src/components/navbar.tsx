import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <header className="fixed -top-4 left-0 right-0 z-10 bg-white transition-all ease-in pb-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center pt-6">
          <Link to="/">LOGO</Link>
          <ul className="ml-60 flex gap-6">
            <li className="relative overflow-hidden effect">
              <Link to="/" className="line-effect flex items-center gap-2">
                <i className="bx bx-home-alt text-2xl "></i>
                Ballina
              </Link>
            </li>
            <li className="relative overflow-hidden effect">
              <Link to="/About" className="line-effect flex items-center gap-2">
                <i className="bx bx-message-square-detail  text-2xl "></i>
                About
              </Link>
            </li>
            <li className="relative overflow-hidden effect">
              <Link
                to="/Publiko"
                className="line-effect flex items-center gap-2">
                <i className="bx bx-purchase-tag  text-2xl "></i>
                Publiko
              </Link>
            </li>
            <li className="relative overflow-hidden effect">
              <Link
                to="/Kontakto"
                className="line-effect flex items-center gap-2">
                <i className="bx bxs-contact text-2xl "></i>
                Kontakto
              </Link>
            </li>
          </ul>
          <div className="flex gap-2">
            <a
              href="/"
              className="flex justify-center items-center rounded-full text-2xl h-8 w-8">
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="/"
              className="flex justify-center items-center rounded-full text-2xl h-8 w-8">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
