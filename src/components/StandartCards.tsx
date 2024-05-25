import { Link } from "react-router-dom";
import { houseData } from "../data";
import { useEffect, useState } from "react";

const StandartCards = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all"); // State for selected type
  const [sortOrder, setSortOrder] = useState(""); // State for sort order
  const [selectedCity, setSelectedCity] = useState(""); // State for selected city
  const [filteredData, setFilteredData] = useState(houseData);

  useEffect(() => {
    filterData(searchQuery, selectedType, sortOrder, selectedCity);
  }, [searchQuery, selectedType, sortOrder, selectedCity]);

  const handleSearchChange = (e: any) => {
    const { value } = e.target;
    setSearchQuery(value);
    filterData(value, selectedType, sortOrder, selectedCity); // Call filter function with updated search query
  };

  const handleTypeChange = (e: any) => {
    const { value } = e.target;
    setSelectedType(value);
    filterData(searchQuery, value, sortOrder, selectedCity); // Call filter function with updated selected type
  };

  const handleSortChange = (e: any) => {
    const { value } = e.target;
    setSortOrder(value);
    filterData(searchQuery, selectedType, value, selectedCity); // Call filter function with updated sort order
  };

  const handleCityChange = (e: any) => {
    const { value } = e.target;
    setSelectedCity(value);
    filterData(searchQuery, selectedType, sortOrder, value); // Call filter function with updated selected city
  };

  const filterData = (
    searchValue: string,
    typeValue: string,
    sortValue: string,
    cityValue: string
  ) => {
    let filtered = houseData.filter((item) => {
      const textMatch = item.text
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const typeMatch = typeValue === "all" ? true : item.type === typeValue;
      const cityMatch = cityValue === "" ? true : item.city === cityValue;
      return textMatch && typeMatch && cityMatch;
    });

    if (sortValue === "lowToHigh") {
      filtered = filtered.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else if (sortValue === "highToLow") {
      filtered = filtered.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    }

    // Move premium cards to the front of the filtered array
    const premiumFiltered = filtered.filter((item) => item.premium);
    const nonPremiumFiltered = filtered.filter((item) => !item.premium);
    const updatedFilteredData = [...premiumFiltered, ...nonPremiumFiltered];

    setFilteredData(updatedFilteredData);
  };
  return (
    <>
      <div className="mb-10 flex items-center gap-4">
        <input
          className="rounded-md py-1.5 pl-2"
          placeholder="Kërko..."
          type="text"
          onChange={handleSearchChange}
        />
        <select
          className="rounded-md py-1.5 pl-2"
          value={selectedCity}
          onChange={handleCityChange}>
          <option value="">Qyteti</option>
          <option value="Prishtinë">Prishtinë</option>
          <option value="Fushë Kosovë">Fushë Kosovë</option>
          <option value="Gjilan">Gjilan</option>
          <option value="Gjakovë">Gjakovë</option>
          <option value="Ferizaj">Ferizaj</option>
          <option value="Mitrovicë">Mitrovicë</option>
          <option value="Prizren">Prizren</option>
          <option value="Pejë">Pejë</option>
          <option value="Podujevë">Podujevë</option>
          <option value="Vushtrri">Vushtrri</option>
          <option value="Burim">Burim</option>
          <option value="Klinë">Klinë</option>
          <option value="Malishevë">Malishevë</option>
          <option value="Drenas">Drenas</option>
          <option value="Kastriot">Kastriot</option>
          <option value="Dardanë">Dardanë</option>
          <option value="Deçan">Deçan</option>
          <option value="Lipjan">Lipjan</option>
          <option value="Rahovec">Rahovec</option>
          <option value="Shtime">Shtime</option>
          <option value="Therandë">Therandë</option>
          <option value="Viti">Viti</option>
          <option value="Shtërpcë">Shtërpcë</option>
          <option value="Graçanicë">Graçanicë</option>
          <option value="Jashtë Vendit">Jashtë Vendit</option>
        </select>
        <select
          className="rounded-md py-1.5 pl-2"
          value={sortOrder}
          onChange={handleSortChange}>
          <option value="">Çmimi</option>
          <option value="lowToHigh">Nga më e ulët</option>
          <option value="highToLow">Nga më e lartë</option>
        </select>
        <select
          className="rounded-md py-1.5 pl-2 px-3"
          value={selectedType}
          onChange={handleTypeChange}>
          <option value="all">Lloji</option>
          <option value="house">Shtëpi</option>
          <option value="flat">Banesa</option>
          <option value="villa">Villa</option>
          <option value="toka">Toka</option>
          <option value="lokale">Lokale</option>
        </select>
      </div>
      <div className="col-span-3 flex flex-wrap gap-3">
        {filteredData
          .filter((data) => !data.premium)
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((data) => {
            return (
              <Link
                key={data.id}
                to={`/property/${data.id}/${data.slug}`}
                className="rounded-2xl relative w-64 text-white">
                <img
                  className="h-40 w-full object-cover rounded-2xl mb-3"
                  src={data.image}
                  alt=""
                />
                <div className="p-2">
                  <h2 className="font-bold mb-8">{data.text}</h2>
                  <div className="flex justify-between">
                    <h5>{data.city}</h5>
                    <h5>{data.date}</h5>
                  </div>
                </div>
                {data.premium && (
                  <i className="bx bxs-star absolute right-0 top-0 text-white bg-[#e7c95a] p-1 rounded-tr-[13px]"></i>
                )}
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default StandartCards;
