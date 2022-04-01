import React from 'react'
import {image5,image6,image7} from '../../image/index'
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import './slide.scss'
export default function SlideShow() {
    const slideImages = [
        {
          id: 1 ,
          url: image5,
          caption: 'Slide 1'
        },
        {
          id: 2,
          url: image6,
          caption: 'Slide 2'
        },
        {
          id: 3 ,
          url: image7,
          caption: 'Slide 3'
        },
      ];
    return (
        <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
            <Link to ={"/store/product/"+slideImage.id}><img  className='slide-img' src={slideImage.url} alt="logo" /></Link>
            </div>
          ))} 
        </Slide>
        </div>
    )
}
