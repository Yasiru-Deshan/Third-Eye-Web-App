import React,{useEffect} from "react";
import ReactPlayer from "react-player";
import FaceId from "./../images/Face-ID-iPhone.jpg";
import Weapon from "./../images/360_F_368681491_e7azLWNVDzXoqlJ8D2CKILOKD8bVEiai.jpg";
import Behaviour from "./../images/5778332.png";
import Emotion from "./../images/istockphoto-1349643293-170667a.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home = ()=>{

 useEffect(() => {
   Aos.init({ duration: 1000 });
 }, []);

  return (
    <div>
      <div style={{ width: "60%", margin: "auto", marginTop: "20px" }}>
        <ReactPlayer
          width="900px"
          height="450px"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
      </div>
      <div
        style={{
          width: "80%",
          height: "240px",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          padding: "30px",
        }}
      >
     
        <div
          style={{
            backgroundColor: "white",
            marginLeft: "40px",
            marginRight: "20px",
            width: "20%",
            height: "80%",
            borderRadius: "20px",
            textAlign: "center",
            fontSize: "20px",
            padding: "20px",
            boxShadow: "0 6px 20px rgba(56, 125, 255, 0.17)",
          }}
          data-aos="fade-left"
        > <Link to='/faceid'>
          <img
            src={FaceId}
            alt=""
            style={{
              backgroundColor: "white",
              marginInline: "20px",
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          /></Link>
          <p> Face ID</p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            marginInline: "20px",
            width: "20%",
            height: "80%",
            borderRadius: "20px",

            textAlign: "center",
            fontSize: "20px",
            padding: "20px",
            boxShadow: "0 6px 20px rgba(56, 125, 255, 0.17)",
          }}
          data-aos="fade-left"
        ><Link to='/emotion'>
          <img
            src={Emotion}
            alt=""
            style={{
              backgroundColor: "white",
              marginInline: "20px",
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          /></Link>
          <p> Emotion Detection</p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            marginInline: "20px",
            width: "20%",
            height: "80%",
            borderRadius: "20px",

            textAlign: "center",
            fontSize: "20px",
            padding: "20px",
            boxShadow: "0 6px 20px rgba(56, 125, 255, 0.17)",
          }}
          data-aos="fade-left"
        ><Link to='/weapon'>
          <img
            src={Weapon}
            alt=""
            style={{
              backgroundColor: "white",
              marginInline: "20px",
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          /></Link>
          <p> Weapon Detection</p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            marginInline: "20px",
            width: "20%",
            height: "80%",
            borderRadius: "20px",
            textAlign: "center",
            fontSize: "20px",
            padding: "20px",
            boxShadow: "0 6px 20px rgba(56, 125, 255, 0.17)",
          }}
          data-aos="fade-left"
        ><Link to='/behaviour'>
          <img
            src={Behaviour}
            alt=""
            style={{
              backgroundColor: "white",
              marginInline: "20px",
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          /></Link>
          <p>Behavioural Detection</p>
        </div>
      </div>
    </div>
  );
}

export default Home;