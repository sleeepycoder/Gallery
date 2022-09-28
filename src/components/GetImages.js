import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';

function GetImages() {
const [images, setImages]=useState([])


useEffect (()=>{
const fetchImages = async()  => {
    const  res = await fetch(`https://api.unsplash.com/photos?client_id=bzDwImAEIQu_SMaYrivh1w5mXJNtZp3_sbMhb5HEqpY`);
    const data =await res.json();
    setImages(data)

}

fetchImages();

},[])








  return (
  <><ImgSlider />
  <Container>
      <h4> Recommende for you</h4>

      <Content>
        {images &&
          images.map((img) => (
            <Wrap key={img.id}>
              <Link>
                <img src={img.urls.small} alt="no" />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container></>

  )
}

export default GetImages

const Container= styled.div``

const Content =styled.div`margin-top: 20px;
display: grid;
grid-gap: 25px;
padding: 30px 0px 26px;
grid-template-columns: repeat(4, minmax(0, 1fr));`


const Wrap =styled.div`

height: 200px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 30px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(025, 0.46, 0.45, 0.94) 0s;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`


