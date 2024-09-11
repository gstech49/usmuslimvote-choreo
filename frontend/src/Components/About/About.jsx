import "./About.css";
import person from "../../assets/muslim_woman.jfif";
import person1 from "../../assets/muslim_man1.jfif";
import person2 from "../../assets/muslim_man2.jfif";
import person3 from "../../assets/muslim_man5.jfif";
import person4 from "../../assets/muslim_man4.png";
import person8 from "../../assets/muslim_woman1.jfif";
import person9 from "../../assets/muslim_woman2.jfif";
import person10 from "../../assets/muslim_woman3.jfif";

const About = () => {
  return (
    <div className="about">
      <div className="about-progs">
        <img src={person} alt="" className="about-img" height="300" />
        <h1 className="about-title">Person</h1>
        <p className="about-desc">CEO National</p>
        <a href="/about" target="_blank" className="about-btn">
          Explore More
        </a>
      </div>
      <div className="about-progs">
        <img src={person1} height="300" alt="" className="about-img" />
        <h1 className="about-title">Person 1</h1>
        <p className="about-desc">Finance Manager</p>
        <a href="/about" target="_blank" className="about-btn">
          Explore More
        </a>
      </div>
      <div className="about-progs">
        <img src={person2} alt="" className="about-img" />
        <h1 className="about-title">Person 2</h1>
        <p>Research Analyst</p>
        <a href="/about" target="_blank" className="about-btn">
          Explore More
        </a>
      </div>
      <div className="about-progs">
        <img src={person3} alt="" className="about-img" />
        <h1 className="about-title">Person 3</h1>
        <p>Marketing Assistant</p>
        <a href="/about" target="_blank" className="about-btn">
          Explore More
        </a>
      </div>
      <div className="about-progs">
        <img src={person4} alt="" className="about-img" />
        <h1 className="about-title">Person 4</h1>
        <p>Accounts Officer</p>
        <a href="/about" target="_blank" className="about-btn">
          Explore More
        </a>
      </div>
      <div className="about-progs">
        <img src={person8} alt="" className="about-img" height="320" />
        <h1 className="about-title">Person 5</h1>
        <p>Sales Person</p>
        <a href="/about" target="_blank" className="about-btn">
          Explore More
        </a>
      </div>
      <div className="about-progs">
        <img src={person9} alt="" className="about-img" />
        <h1 className="about-title">Person 6</h1>
        <p>Programmer</p>
        <a href="/about" target="_blank" className="about-btn">
          Explore More
        </a>
      </div>
      <div className="about-progs">
        <img src={person10} alt="" className="about-img" />
        <h1 className="about-title">Person 7</h1>
        <p>Database Administrator</p>
        <a href="/about" target="_blank" className="about-btn">
          Explore More
        </a>
      </div>
    </div>
  );
};

export default About;
