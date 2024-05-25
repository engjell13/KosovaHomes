import { useState } from "react";
import { Link } from "react-router-dom";
import { houseData } from "../data";

const PremiumCards = () => {
  const [cityFilter, setCityFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const premiumCards = houseData.filter((item) => item.premium);

  const filteredPremiumCards = premiumCards
    .filter((item) => !cityFilter || item.city === cityFilter)
    .filter((item) => {
      if (priceFilter === "lowToHigh") {
        return parseInt(item.price, 10) >= 0;
      } else if (priceFilter === "highToLow") {
        return parseInt(item.price, 10) < 0;
      }
      return true;
    })
    .filter((item) => !typeFilter || item.type === typeFilter);

  return (
    <>
      <div className="mb-10 flex items-center gap-4">
        <input
          className="rounded-md py-1.5 pl-2"
          placeholder="Kërko..."
          type="text"
        />
        <select
          className="rounded-md py-1.5 pl-2"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}>
          <option value="">Qyteti</option>
          <option value="Prishtinë">Prishtinë</option>
          {/* Add other city options */}
        </select>
        <select
          className="rounded-md py-1.5 pl-2"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="">Çmimi</option>
          <option value="lowToHigh">Nga më e ulët</option>
          <option value="highToLow">Nga më e lartë</option>
        </select>
        <select
          className="rounded-md py-1.5 pl-2 px-3"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="">Lloji</option>
          <option value="house">Shtëpi</option>
          <option value="flat">Banesa</option>
          <option value="villa">Villa</option>
          <option value="toka">Toka</option>
          <option value="lokale">Lokale</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-3">
        {filteredPremiumCards
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((data) => (
            <Link
              key={data.id}
              to={`/property/${data.id}/${data.slug}`}
              className="rounded-2xl relative w-64  border-2 text-[#f9d8ae] border-[#f9d8ae]">
              <img
                className="h-40 w-full object-cover rounded-t-2xl mb-3"
                src={data.image}
                alt=""
              />
              <div className="p-2 flex flex-col">
                <h2 className="font-bold mb-8	">{data.text}</h2>
                <div className="flex justify-between items-end">
                  <h5 className="">{data.city}</h5>
                  <h5>{data.date}</h5>
                </div>
              </div>
              <i className="bx bxs-star absolute right-0 top-0 text-white bg-[#f9d8ae] p-1 rounded-tr-[13px]"></i>
            </Link>
          ))}
      </div>
    </>
  );
};

export default PremiumCards;
