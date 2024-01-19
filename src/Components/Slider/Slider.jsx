
import React, {useEffect, useState} from 'react'
import BtnSlider from "./BtnSlider"
import dataSlider from "./dataSlider"
import "./Slider.scss"

const publicUrl = import.meta.env.BASE_URL

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [slideIndex]);

  const nextSlide = () => {
    if(slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1){
      setSlideIndex(dataSlider.length)
    }
  }
  return (
    <div className='container-slider'>
      {dataSlider.map((obj, index) => {
        return (
          <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
            <img src={publicUrl + `Imgs/Img${index + 1}.jpg`}/>
              {/* <img src={process.env.PUBLIC_URL + `Imgs/img${index + 1}.jpg`}/> */}
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"}/>
      <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
      <div className="container-dots">
        {
          Array.from({length: 3}).map((item, index) => (
            <div className="dot"></div>
          ))
        }
      </div>
    </div>
    )
}