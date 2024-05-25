import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { houseData } from "../data";
import { dataTypes } from "../types";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const PropertyDetail = () => {
  const { PropertySlug } = useParams();
  console.log("PropertySlug:", PropertySlug);
  console.log("houseData:", houseData);

  const property = houseData.find((property) => property.slug === PropertySlug);

  if (!property) {
    return <div>Property not found</div>;
  }

  const {
    image,
    text,
    description,
    address,
    price,
    room,
    bathroom,
    contact,
    type,
    meter,
    city,
    company,
    fullName,
    hotelName,
  }: dataTypes = property;

  // Filter similar properties based on type
  const similarProperties = houseData.filter(
    (item) => item.type === type && item.slug !== PropertySlug
  );

  useEffect(() => {
    // Scroll to the top when component mounts or when PropertySlug changes
    window.scrollTo(0, 0);
  }, [PropertySlug]);

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto">
        <div className="py-32">
          <div className="bg-zinc-900 text-white flex px-10 py-10 gap-20 rounded-2xl">
            <img src={image} alt={text} className="w-[100vh] rounded-3xl" />
            <div>
              <h2 className="text-3xl font-bold mb-8">{text}</h2>
              <p className="text-sm text-[#aaaaaa] w-96 mb-6">{description}</p>
              {company && <h5 className="mb-4">Kompania: {company}</h5>}
              {fullName && (
                <h5 className="mb-4">Emri i Pronarit: {fullName}</h5>
              )}
              {hotelName && <h5 className="mb-4">{hotelName}</h5>}
              <div className="flex flex-wrap gap-2 mb-6">
                {city && (
                  <h6 className="bg-[#e7e7e7] text-zinc-900 p-2 ">
                    Qyteti: {city}
                  </h6>
                )}
                {meter && (
                  <h6 className="bg-[#e7e7e7] text-zinc-900 p-2 ">
                    Metër: {meter}
                  </h6>
                )}
                {room && (
                  <h6 className="bg-[#e7e7e7] text-zinc-900 p-2 ">
                    Dhoma: {room}
                  </h6>
                )}
                {bathroom && (
                  <h6 className="bg-[#e7e7e7] text-zinc-900 p-2 ">
                    Banjo: {bathroom}
                  </h6>
                )}
                {address && (
                  <h6 className="bg-[#e7e7e7] text-zinc-900 p-2 ">
                    Adresa: {address}
                  </h6>
                )}
                <h6 className="bg-[#e7e7e7] text-zinc-900 p-2 ">
                  Çmimi: {price}
                </h6>
              </div>
              <a
                href={`tel:${contact}`}
                className="bg-black text-white p-3 px-6">
                Kontakto
              </a>
            </div>
          </div>
        </div>
      </div>
      {similarProperties.length > 0 && (
        <div className="container mx-auto pb-20">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Shpallje të Ngjajshme
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {similarProperties.map((item) => (
              <Link
                to={`/property/${item.id}/${item.slug}`}
                key={item.id}
                className="bg-zinc-900 text-white rounded-xl p-4">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold mb-6">{item.text}</h3>
                <div className="flex justify-between ">
                  {item.room && <p>{item.city}</p>}
                  {item.bathroom && <p>{item.date}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PropertyDetail;
