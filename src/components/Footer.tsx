import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-16">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl">
            Logo
          </Link>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/">Ballina</Link>
            </li>
            <li>
              <Link to="/About">Rreth nesh</Link>
            </li>
            <li>
              <Link to="/Publiko">Publiko Shpallje</Link>
            </li>
            <li>
              <Link to="/Kontakto">Kontakto</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">Kontakti</h2>
            <li>
              <a href="tel:111111">049123456</a>
            </li>
            <li>
              <a href="mailto:example">example@gmail.com</a>
            </li>
          </ul>
          <div className="text-2xl flex gap-2">
            <a href="/">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="/">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
