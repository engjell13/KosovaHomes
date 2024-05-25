import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const Publish = () => {
  return (
    <>
      <Navbar />
      <div className="mt-40">
        <div className="container mx-auto text-white">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-4xl font-bold mb-4">
              OFERTA E PUBLIKIMIT TË SHPALLJEVE
            </h2>
            <p className="text-lg text-[#777777] mb-2">
              Na dërgoni shpalljen në email dhe ne e publikojmë për ju!
            </p>
            <a href="mailto:example@gmail.com">example@gmail.com</a>
          </div>
          <div className="py-[100px] text-black">
            <h2 className="text-4xl font-bold text-center mb-20 text-white">
              OFERTAT
            </h2>
            <div className="flex justify-center items-center gap-2 mb-5">
              <ul className="bg-[#f9d8ae] py-4 px-4 text-lg w-96 h-72">
                <div className="flex justify-between items-center mb-3">
                  <li className="font-bold text-xl ">Premium</li>
                  <li className="font-bold text-xl">50€</li>
                </div>
                <li className="p-2 border-b-2">
                  Në fillim të faqës tek shpalljet Premium
                </li>
                <li className="p-2 border-b-2">Kohëzgjatja 1 muaj</li>
                <li className="p-2 border-b-2">
                  Shpallja shpërndahet në rrjete sociale
                </li>
                <li className="p-2 border-b-2">
                  Në gjysëm të muajit shapllja rifreskohet <br /> në fillim të
                  shpalljeve Premium
                </li>
              </ul>
              <ul className="bg-white py-4 px-4 text-lg w-96 h-72">
                <div className="flex justify-between items-center mb-3">
                  <li className="font-bold text-xl">Standart</li>
                  <li className="font-bold text-xl">25€</li>
                </div>
                <li className="p-2 border-b-2">
                  Pas shpalljeve Premium dhe Reklamës <br /> / te shpalljet
                  standart
                </li>
                <li className="p-2 border-b-2">Kohëzgjatja 1 muaj</li>
                <li className="p-2 border-b-2">-</li>
                <li className="p-2 border-b-2">-</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Publish;
