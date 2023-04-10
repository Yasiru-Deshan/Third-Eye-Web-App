import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import Aos from "aos";
import "aos/dist/aos.css";

const Behaviour = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div style={{ width: "60%", margin: "auto", marginTop: "20px",paddding:'20px' }}>
      <center> <h1 style={{ fontWeight: "520", fontSize: "60px" }}>
          Behaviour Detection
        </h1></center>
        <ReactPlayer
          width="900px"
          height="450px"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
      </div>
    </div>
  );
};

export default Behaviour;
