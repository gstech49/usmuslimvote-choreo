import "./Hero.css";
import mv_video from "../../assets/muslimvote_vid.mp4";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <>
      <div className="hero container">
        <video className="background-video" loop autoplay muted ref={videoRef}>
          <source src={mv_video} type="video/mp4" />
        </video>
        <div className="hero-text">
          <div className="hero-span">
            <h2>Who we are</h2>
          </div>
          <p>
            A United Muslim Political Front Against{" "}
            <span className="span-tag">Genocide</span>
          </p>
          <button className="btn1">Explore More</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
