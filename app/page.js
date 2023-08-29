import Hero from "@components/Hero";
import About from "@components/About";
import ExpectedOutcomes from "@components/ExpectedOutcomes";
import Speakers from "@components/Speakers";
import ContactForm from "@components/ContactForm";
import Objective from "@components/Objective";
import Schedule from "@components/Schedule";
import Sponsors from "@components/Sponsors";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <ExpectedOutcomes />
      <Objective />
      <Schedule />
      <Speakers />
      <Sponsors />
      <ContactForm />
    </>
  );
};

export default page;
