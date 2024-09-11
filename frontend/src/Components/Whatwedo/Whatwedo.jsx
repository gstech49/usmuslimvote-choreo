import { useState, useEffect } from "react";
import "./Whatwedo.css";
import bottomlogo from "../../assets/muslimvote_logo_rm.png";
import DataCollection from "../DataCollection/DataCollection";
import Strategise from "../Strategise/Strategise";
import Impact from "../Impact/Impact";
import Act from "./../Act/Act";

const COUNTDOWN_TARGET = new Date("2024-11-05T07:59:59");
const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Whatwedo = () => {
  const [showDataCollection, setShowDataCollection] = useState(false);
  const [showDataStrategy, setShowDataStrategy] = useState(false);
  const [showAct, setShowAct] = useState(false);
  const [showImpact, setShowImpact] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => {
      clearInterval(timer); //to avoid memoryleak
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({ top: window.scrollY + 400, behavior: "smooth" });
    setShowDataCollection(true);
  };

  const handleStrategyClick = () => {
    window.scrollTo({ top: window.scrollY + 400, behavior: "smooth" });
    setShowDataStrategy(true);
  };

  const handleActClick = () => {
    window.scrollTo({ top: window.scrollY + 400, behavior: "smooth" });
    setShowAct(true);
  };

  const handleImpactClick = () => {
    window.scrollTo({ top: window.scrollY + 400, behavior: "smooth" });
    setShowImpact(true);
  };

  return (
    <div className="whatwedo">
      <div className="whatwedo-container">
        <h1>
          AMERICAN MUSLIMS VOTE <br /> AGAINST GENOCIDE
        </h1>
        <p>What is your state? Discover where you stand</p>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" />
      </div>
      <div className="countdown-container">
        {/* <div className="content"> */}
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div className="box">
              <div className="value">
                <span>{value}</span>
              </div>
              <span className="label">{label}</span>
            </div>
          );
        })}
        {/* </div> */}
      </div>
      <div className="data-container">
        <button onClick={handleButtonClick} style={{ cursor: "pointer" }}>
          Collect Data
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleStrategyClick} style={{ cursor: "pointer" }}>
          Strategise
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleActClick} style={{ cursor: "pointer" }}>
          Act
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleImpactClick} style={{ cursor: "pointer" }}>
          Impact
        </button>
        &nbsp;&nbsp;&nbsp;
        {showDataCollection && <DataCollection />}
        {showDataStrategy && <Strategise />}
        {showAct && <Act />}
        {showImpact && <Impact />}
      </div>
      <div className="bottom-container">
        <img src={bottomlogo} alt="" />
      </div>
    </div>
  );
};

export default Whatwedo;
