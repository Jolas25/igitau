import React from 'react'
import leftArrow from "./icons/arrow-left.svg"
import rightArrow from "./icons/arrow-right.svg"

export default function BtnSlider({direction, moveSlide}) {
  return (
    <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
        <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  )
}
