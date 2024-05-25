import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.tsx";
import Home from "./pages/Home.tsx";
import PropertyInfo from "./pages/PropertyInfo.tsx";
import Publish from "./pages/Publish.tsx";
import About from "./pages/About.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Publiko",
    element: <Publish />,
  },
  {
    path: "/Kontakto",
    element: <Contact />,
  },
  {
    path: "/property/:id/:PropertySlug", // Add route for PropertyDetail with dynamic ID
    element: <PropertyInfo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
