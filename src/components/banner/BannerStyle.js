import styled from 'styled-components'
import {Link, Link as LinkR} from 'react-router-dom'


export const BannerContainer = styled.div`
background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)),
url('/image/bg.jpg');
height: 100vh;
position: relative;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const BannerItem = styled.div`
position: absolute;
top: 40%;
left: 10%;
transform: translateY(-10%,-40%);
width: 600px;

`

export const BannerH1 = styled.h1`
    color: #fff;
    text-transform: capitalize;
    font-family: "Playfair Display", serif;  
   font-size: 52px;
   font-weight: 700;
   letter-spacing: 1px;

`

export const BannerH2 = styled.h2`
   color: #fd9d3e;
   text-transform: capitalize;
   letter-spacing: 2px;
   font-size: 40px;
   font-weight: 900;
   font-family: "Playfair Display", serif;

`

export const Button = styled.button`
    background-color: transparent;
    padding:10px 0px;
    color:#fff;
    width: 170px;
    text-transform: capitalize;
    font-size: 22px;
    border: 2px solid #fd9d3e;
    border-radius: 25px;
    transition: all ease-in-out .5s;
    text-align:center;

    &:hover{
      border: none;
      background-color: #fd9d3e;
      color: #000;
      font-weight: 500;
      transition: all ease-in-out .5s;
      text-decoration:none;
    }
`

export const BannerButton = styled.div`
margin-top: 30px;
display: flex;
justify-content: flex-start;
align-items: center;
`