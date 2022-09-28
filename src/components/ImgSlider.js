import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { useState,useEffect } from 'react'
function ImgSlider() {
    const [images, setImages]=useState([])

console.log(images) 
    useEffect (()=>{
    const fetchImages = async()  => {
        const  res = await fetch(`https://api.unsplash.com/photos?client_id=bzDwImAEIQu_SMaYrivh1w5mXJNtZp3_sbMhb5HEqpY`);
        const data =await res.json();
        setImages(data)
    
    }
    
    fetchImages();
    
    },[])



    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };
 
  return (
    <Carousel {...settings}>

{images && 
images.map((img)=>
<Wrap>
    <img src={img.urls.full} alt='no'  />
</Wrap>
)}


     
    </Carousel>
  )
}

export default ImgSlider

const Carousel =styled(Slider)`
margin-top:20px;
ul li button{
    &:before{
        font-size:10px;
        color:white;
    }
}
li.slick-active button:before{
    color:white;
}
.slick-list{
    overflow:visible;
}
button{
    z-index:1;
}
`

const Wrap =styled.div`
cursor:pointer;
img{
  height:400px;
    border:4px solid transparent;
    border-radius:4px;
   
width:100%;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition:300ms;
&:hover{
    border:4px solid rgba(249 ,249, 249 ,0.8);
}
}
`