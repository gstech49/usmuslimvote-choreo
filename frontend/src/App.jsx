import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Whatwedo from "./Components/Whatwedo/Whatwedo";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Goal from "./Components/Goal/Goal";
import Reports from "./Components/Reports/Reports";
import { useState } from "react";
import SearchResultsList from "./Components/SearchResultsList/SearchResultsList";
import InteractiveMap from "./Components/InteractiveMap/InteractiveMap";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import FAQ from "./Components/FAQ/FAQ";

const App = () => {
  const [results, setResults] = useState([]);
  const markers = [
    {
      geocode: [37.0902, 95.7129],
      popup: "Hello, i am a popup",
    },
    {
      geocode: [37.0902, 95.7129],
      popup: "Hello, i am a popup2",
    },
    {
      geocode: [37.0902, 95.7129],
      popup: "Hello, i am a popup3",
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Mission" title="What we do" />
        <Whatwedo />

        <Title subTitle="Muslim vote in US" title="Interactive Map" />
        <InteractiveMap />
        <Title
          subTitle="This is all about us, the way we work altogether as a team"
          title="About Us"
        />
        <About />
        <Title subTitle="Our Vision" title="Our Goal" />
        <Goal />
        <Title subTitle="Annual Report" title="Our Reports" />
        <Reports setResults={setResults} />
        <SearchResultsList results={results} />
        <br /><br /><br />
        <Title subTitle="Frequently Asked Questions" title="FAQs" />
        <FAQ />
        <Title subTitle="Contact Us" title="Get in touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
