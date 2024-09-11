import "./FAQ.css";
import questionData from "../../data/questions.json";
import { useEffect, useState } from "react";


const API_URL = `${import.meta.env.VITE_API_URL}/posts/`;

const FAQ = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL); // Replace with your actual API endpoint
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures fetching data only once on component mount

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="faq">
      <div className="faq_wrapper">
        {/* {questionData.map((questionData, i) => (
          <div className="item" key={i}>
            <div className="titleFAQ" onClick={() => toggle(i)}>
              <h2>{questionData.question}</h2>
              <span>{selected == i ? "-" : "+"}</span>
            </div>
            <div className={selected == i ? "content show" : "content"}>
              {questionData.answer}
            </div>
          </div>
        ))} */}
        {data.map((questionData, i) => (
          <div className="item" key={questionData.id || i}>
            <div className="titleFAQ" onClick={() => toggle(i)}>
              <h2>{questionData.question}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {questionData.answer}
              {questionData.source}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
