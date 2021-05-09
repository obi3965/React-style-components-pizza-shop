import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const BannerItem = styled.div`
 background-image:url('https://images.pexels.com/photos/2067401/pexels-photo-2067401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
 height:70vh;
 position: relative;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
` 

export const BannerLink = styled(LinkR)`
background-color: #fd9d3e ;
    padding:10px 60px;
    color:#fff;
    text-transform: capitalize;
    font-size: 22px;
    border: 2px solid #fd9d3e;
    border-radius: 25px;
    transition: all ease-in-out .5s;
    text-align:center;
    margin-top:20px;

    &:hover{
      border: none;
      background-color: #fd9d3e;
      color: #000;
      font-weight: 500;
      transition: all ease-in-out .5s;
      text-decoration:none;
    }
`

export const BannerContent = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`

export const BannerH1 = styled.h1`
color: #fff;
text-transform: capitalize;
font-family: "Playfair Display", serif;  
font-size: 52px;
font-weight: 700;
letter-spacing: 1px;
`

export const Ing1= styled.span`
font-weight:600;
opacity:.80;
`

export const Ing2 = styled.span`
font-weight:600;
opacity:.80;
`

export const Ing3 = styled.span`
font-weight:600;
opacity:.80;
`

export const Name = styled.h2`
text-transform: uppercase;  
font-size: 22px;
font-weight: 600;
letter-spacing: 1px;
margin:10px auto;
`

export const Desc = styled.p`
font-size:15px;
opacity:.80;
text-align:justify;
word-break:keep-all;
margin:10px auto;
`

export const Image = styled.img`

`
export const Item1 = styled.div`
width:390px;
margin:30px auto;
text-align:center;

`



export const ListItem = styled.div`
width:92%;
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
margin:30px auto;
`

export const CartLink = styled(LinkR)`
font-size:18px;
border:none;
padding:8px 20px;
color:#fd9d3e;
text-transform:capitalize;
outline:none;
text-decoration:underline;
font-weight:700;

&:hover{
  // text-decoration:none;
  color:#fd9d3e;
}
`

export const Cart = styled.div`
justify-content:center;
align-items:center;
display:flex;
`