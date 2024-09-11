import { useState } from "react";
import "./Goal.css";
import arrow from "../../assets/arrowicon-rmbg.png";

const Goal = () => {
  const [goals] = useState([
    {
      title: "The Muslim Vote",
      text: `Priority vote`,
    },
    {
      title: "Overseas Voting",
      text: `resources`,
    },
    {
      title: "Is it Halal to vote",
      text: `a MEND resource`,
    },
    {
      title: "Why vote?",
      text: ` A MEND resource`,
    },
    {
      title: "Important Campaigning",
      text: `Rules`,
    },
    {
      title: "Policy pledges from the",
      text: `Community Policy Forum`,
    },
    {
      title: "Top tips on door to door",
      text: `canvassing`,
    },
    {
      title: "6 tips on communicating",
      text: ` your get out the vote campaign`,
    },
    {
      title: "Top tips on how to",
      text: `Get out to vote`,
    },
  ]);
  return (
    <div className="goal">
      <div className="goal-text">
        <h1>We focus on following major goals given below:</h1>
        <div className="goals">
          {goals.map((goal, i) => (
            <div key={i} className="goal-container">
              <h3>{goal.title}</h3>
              <br />
              <p>{goal.text}</p>
              <br />
              <a href="/" target="_blank">
                Learn More
                <img src={arrow} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goal;
