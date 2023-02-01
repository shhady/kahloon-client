import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import "./Hero.css"
import { sliderData } from "./Slider.jsx";
export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };
  
    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
    useEffect(() => {
      if (autoScroll) {
        auto();
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide]);
  return (
    <div className="hero">
    {/* <Link to="/meals" style={{textDecoration:"none"}}>
   <div className="homePageMeals">
   <div className="Locationwrapper" style={{textAlign:"center"}}>
    <span>
   ארוחה רומנטית
   </span></div>
   </div>
   </Link>
   <Link to="/collections" style={{textDecoration:"none"}}>
   <div className="homePageCollections">
   <div className="Locationwrapper" style={{textAlign:"center"}}>
   <span>
יום פינוק    
 </span>
 </div>
   </div>
   </Link>
   <Link to="/attractions" style={{textDecoration:"none"}}>
   <div className="homePageAttractions">
   <div className="Locationwrapper">
   <span>
     אטרקציות
     </span> </div>
   </div>
   </Link> */}
    {sliderData.map((slide, i) => {
        return (
          <div
            className={i === currentSlide ? "slide current" : "slide"}
            key={i}
          >
            {i === currentSlide && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <img src={slide.image} alt="slide" width="100%" height="100%" />
                <div className="content">
                    <div>
                  <h1>{slide.heading}</h1>
                  <h3>{slide.desc}</h3>
                  </div>
                  {/* {user ? (
                    <Link to="/Subscribe" style={{ textDecoration: "none" }}>
                      <button className="getStarted">
                        رفع مستوى الاشتراك{" "}
                      </button>
                    </Link>
                  ) : (
                    <Link to="/auth" style={{ textDecoration: "none" }}>
                      <button className="getStarted">تسجيل الدخول</button>
                    </Link>
                  )} */}
                </div>
              </div>
            )}
          </div>
        );
      })}
 </div>
  )
}
