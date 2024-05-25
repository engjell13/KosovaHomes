import Navbar from "../components/navbar";
import Banner2 from "../assets/prishtinad.png";
import "../App.css";
import PremiumCards from "../components/PremiumCards";
import Footer from "../components/Footer";
import StandartCards from "../components/StandartCards";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <img src={Banner2} className="w-full h-[85vh] object-cover" />
        <div className="absolute">
          <h2 className="text-[55px] text-white ml-5 font-bold">
            <span className="text-[#f9d8ae] mr-2">Gjeni</span>
            Shtëpinë Tuaj Ideale
          </h2>
          <p className="text-[20px] text-white ml-5 text-center font-bold">
            Shtëpi, Banesa, Vila, Toka, Lokale
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-10 px-10 relative mb-20">
          <div className="col-span-5 p-6 ">
            <h2 className="text-2xl mb-4 font-bold text-white">
              Shpallje Premium
            </h2>
            <div className="mb-20 ">
              <PremiumCards />
            </div>
            <h2 className="text-2xl mb-8 font-bold text-white">
              Shpallje Standart
            </h2>
            <StandartCards />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
