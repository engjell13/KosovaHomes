import AccordionItem from "../components/Accordion.tsx";
import Navbar from "../components/navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="pt-40">
        <AccordionItem title="title" description="description" />
        <AccordionItem title="title" description="description" />
      </div>
    </>
  );
};

export default About;
