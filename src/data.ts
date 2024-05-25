import House1 from "./assets/house1.jpg";
import House2 from "./assets/house2.jpg";
import House3 from "./assets/house3.jpg";
import House4 from "./assets/house4.jpg";
import Banesa1 from "./assets/Banesa1.jpg";
import Banesa2 from "./assets/Banesa2.jpg";
import Banesa3 from "./assets/Banesa3.jpg";
import Villa1 from "./assets/Villa1.jpg";
import Villa2 from "./assets/Villa2.jpg";
import Villa3 from "./assets/Villa3.jpg";

export const houseData = [
  {
    id: 0,
    image: House1,
    fullName: 'Cristiano Ronaldo',
    slug: "shtepija-1",
    text: "Shtepi moderne me 3 dhoma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nisi, ornare quis est sed, vulputate consectetur dui. Donec aliquet elit faucibus lectus iaculis, sit amet convallis dui euismod. Nullam in pellentesque dolor. Quisque volutpat condimentum ultrices. Nam lacinia in arcu ut pellentesque. Sed non lectus sagittis, sollicitudin orci in, dignissim felis. Nullam volutpat dui tortor, fringilla egestas metus maximus in. Morbi sed velit ultrices, finibus leo vitae, euismod massa. Nullam ut diam in purus convallis ornare eu in quam. Nam hendrerit vulputate magna id aliquam.",
    address: "Rruga Nene Tereza 21",
    price: "400€",
    room: "2",
    bathroom: "1",
    type: "house",
    date: "2024-04-24",
    premium: false,
    city: "Prishtinë",
    contact: '0123456789',
    meter: '50m2',
  },
  {
    id: 1,
    image: House2,
    fullName: 'Karim Benzema',
    slug: "shtepija-2",
    text: "Shtëpi moderne me 2 dhoma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nisi, ornare quis est sed, vulputate consectetur dui. Donec aliquet elit faucibus lectus iaculis, sit amet convallis dui euismod. Nullam in pellentesque dolor. Quisque volutpat condimentum ultrices. Nam lacinia in arcu ut pellentesque. Sed non lectus sagittis, sollicitudin orci in, dignissim felis. Nullam volutpat dui tortor, fringilla egestas metus maximus in. Morbi sed velit ultrices, finibus leo vitae, euismod massa. Nullam ut diam in purus convallis ornare eu in quam. Nam hendrerit vulputate magna id aliquam.",
    address: "Rruga Nene Tereza 21",
    price: "220€",
    room: "2",
    bathroom: "1",
    type: "house",
    date: "2024-04-22",
    premium: true,
    city: "Fushë Kosovë",
    contact: '0123456789',
    meter: '50m2',
  },
  {
    id: 2,
    image: House3,
    slug: "shtepija-3",
    company: 'AL Trade',
    text: "Shtëpi moderne me 2 dhoma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nisi, ornare quis est sed, vulputate consectetur dui. Donec aliquet elit faucibus lectus iaculis, sit amet convallis dui euismod. Nullam in pellentesque dolor. Quisque volutpat condimentum ultrices. Nam lacinia in arcu ut pellentesque. Sed non lectus sagittis, sollicitudin orci in, dignissim felis. Nullam volutpat dui tortor, fringilla egestas metus maximus in. Morbi sed velit ultrices, finibus leo vitae, euismod massa. Nullam ut diam in purus convallis ornare eu in quam. Nam hendrerit vulputate magna id aliquam.",
    address: "Rruga Nene Tereza 21",
    price: "300€",
    room: "2",
    bathroom: "1",
    type: "house",
    date: "2024-04-25",
    premium: true,
    city: "Fushë Kosovë",
    contact: '0123456789',
    meter: '50m2',
  },
  {
    id: 3,
    image: House4,
    slug: "shtepija-4",
    fullName: 'Jude Bellingham',
    text: "Shtepi moderne me 6 dhoma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nisi, ornare quis est sed, vulputate consectetur dui. Donec aliquet elit faucibus lectus iaculis, sit amet convallis dui euismod. Nullam in pellentesque dolor. Quisque volutpat condimentum ultrices. Nam lacinia in arcu ut pellentesque. Sed non lectus sagittis, sollicitudin orci in, dignissim felis. Nullam volutpat dui tortor, fringilla egestas metus maximus in. Morbi sed velit ultrices, finibus leo vitae, euismod massa. Nullam ut diam in purus convallis ornare eu in quam. Nam hendrerit vulputate magna id aliquam.",
    address: "Rruga Nene Tereza 21",
    price: "250€",
    room: "2",
    bathroom: "1",
    type: "house",
    date: "2024-04-26",
    premium: false,
    city: "Fushë Kosovë",
    contact: '0123456789',
    meter: '50m2',
  },
  {
    id: 4,
    image: Banesa1,
    slug: "banesa-1",
    company: 'Model Slovenia',
    text: "Banesë në qendër të Prishtinës",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nisi, ornare quis est sed, vulputate consectetur dui. Donec aliquet elit faucibus lectus iaculis, sit amet convallis dui euismod. Nullam in pellentesque dolor. Quisque volutpat condimentum ultrices. Nam lacinia in arcu ut pellentesque. Sed non lectus sagittis, sollicitudin orci in, dignissim felis. Nullam volutpat dui tortor, fringilla egestas metus maximus in. Morbi sed velit ultrices, finibus leo vitae, euismod massa. Nullam ut diam in purus convallis ornare eu in quam. Nam hendrerit vulputate magna id aliquam.",
    address: "Rruga Nene Tereza 21",
    price: "800€",
    room: "3",
    bathroom: "1",
    type: "flat",
    date: "2024-04-26",
    premium: false,
    city: "Prishtinë",
    contact: '0123456789',
    meter: '50m2',
  },
  {
    id: 5,
    image: Banesa2,
    slug: "banesa-2",
    company: 'Model Slovenia',
    text: "Banesë me qëra në Prishtinë",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nisi, ornare quis est sed, vulputate consectetur dui. Donec aliquet elit faucibus lectus iaculis, sit amet convallis dui euismod. Nullam in pellentesque dolor. Quisque volutpat condimentum ultrices. Nam lacinia in arcu ut pellentesque. Sed non lectus sagittis, sollicitudin orci in, dignissim felis. Nullam volutpat dui tortor, fringilla egestas metus maximus in. Morbi sed velit ultrices, finibus leo vitae, euismod massa. Nullam ut diam in purus convallis ornare eu in quam. Nam hendrerit vulputate magna id aliquam.",
    address: "Rruga Nene Tereza 21",
    price: "400€",
    room: "2",
    bathroom: "1",
    type: "flat",
    date: "2024-04-21",
    premium: false,
    city: "Prishtinë",
    contact: '0123456789',
    meter: '50m2',
  },
  {
    id: 6,
    image: Banesa3,
    slug: "banesa-3",
    company: 'Tregtia',
    text: "Banesë në Fushë Kosovë",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nisi, ornare quis est sed, vulputate consectetur dui. Donec aliquet elit faucibus lectus iaculis, sit amet convallis dui euismod. Nullam in pellentesque dolor. Quisque volutpat condimentum ultrices. Nam lacinia in arcu ut pellentesque. Sed non lectus sagittis, sollicitudin orci in, dignissim felis. Nullam volutpat dui tortor, fringilla egestas metus maximus in. Morbi sed velit ultrices, finibus leo vitae, euismod massa. Nullam ut diam in purus convallis ornare eu in quam. Nam hendrerit vulputate magna id aliquam.",
    address: "Rruga Nene Tereza 21",
    price: "300€",
    room: "2",
    bathroom: "1",
    type: "flat",
    date: "2024-04-21",
    premium: false,
    city: "Gjilan",
    contact: '0123456789',
    meter: '50m2',
  },
  {
    id: 7,
    image: Villa1,
    slug: "villa-1",
    hotelName: 'Villa Ada',
    text: "Villa për qëndrim",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nisi, ornare quis est sed, vulputate consectetur dui. Donec aliquet elit faucibus lectus iaculis, sit amet convallis dui euismod. Nullam in pellentesque dolor. Quisque volutpat condimentum ultrices. Nam lacinia in arcu ut pellentesque. Sed non lectus sagittis, sollicitudin orci in, dignissim felis. Nullam volutpat dui tortor, fringilla egestas metus maximus in. Morbi sed velit ultrices, finibus leo vitae, euismod massa. Nullam ut diam in purus convallis ornare eu in quam. Nam hendrerit vulputate magna id aliquam.",

    address: "Rruga Nene Tereza 21",
    price: "120€",
    room: "3",
    bathroom: "1",
    type: "villa",
    date: "2024-04-20",
    premium: true,
    city: "Gjakovë",
    contact: '0123456789',
    meter: '50m2',
  },
  {
    id: 8,
    image: Villa2,
    slug: "villa-2",
    hotelName: 'Villa Berati',
    text: "Villa për qëndrim",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nisi, ornare quis est sed, vulputate consectetur dui. Donec aliquet elit faucibus lectus iaculis, sit amet convallis dui euismod. Nullam in pellentesque dolor. Quisque volutpat condimentum ultrices. Nam lacinia in arcu ut pellentesque. Sed non lectus sagittis, sollicitudin orci in, dignissim felis. Nullam volutpat dui tortor, fringilla egestas metus maximus in. Morbi sed velit ultrices, finibus leo vitae, euismod massa. Nullam ut diam in purus convallis ornare eu in quam. Nam hendrerit vulputate magna id aliquam.",

    address: "Rruga Nene Tereza 21",
    price: "100€",
    room: "2",
    bathroom: "1",
    type: "villa",
    date: "2024-04-24",
    premium: false,
    city: "Fushë Kosovë",
    contact: '0123456789',
    meter: '50m2',
  },
  {
    id: 9,
    image: Villa3,
    slug: "villa-3",
    hotelName: 'Villa Kosova',
    text: "Villa për qëndrim",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nisi, ornare quis est sed, vulputate consectetur dui. Donec aliquet elit faucibus lectus iaculis, sit amet convallis dui euismod. Nullam in pellentesque dolor. Quisque volutpat condimentum ultrices. Nam lacinia in arcu ut pellentesque. Sed non lectus sagittis, sollicitudin orci in, dignissim felis. Nullam volutpat dui tortor, fringilla egestas metus maximus in. Morbi sed velit ultrices, finibus leo vitae, euismod massa. Nullam ut diam in purus convallis ornare eu in quam. Nam hendrerit vulputate magna id aliquam.",

    address: "Rruga Nene Tereza 21",
    price: "80€",
    room: "2",
    bathroom: "1",
    type: "villa",
    date: "2024-04-25",
    premium: false,
    city: "Podujevë",
    contact: '0123456789',
    meter: '50m2',
  },
];