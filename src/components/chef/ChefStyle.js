import styled from 'styled-components'


export const ChefH1 = styled.h1`
text-align:center;
text-transform:uppercase;
font-size:45px;
font-family: "Playfair Display", serif; 
font-weight:800;
color:#000;
padding-top: 30px;
@media(min-width:768px) and (max-width:1023px){
  
  font-size:35px;
}
@media(min-width:1024px) and (max-width:1365px){
  font-size:35px;
  font-weight:800;
}
@media(min-width:280px) and (max-width:319px){
  font-size:25px;
  font-weight:700;
  letter-spacing:1px;
}
@media(min-width:320px) and (max-width:767px){
  font-size:25px;
  font-weight:700;
  letter-spacing:1px;
}
`

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 96%;
  color: #fff;
  margin: 20px auto;
  font-size: 4em;
  padding:10px;
  
`


export const Item = styled.div`
margin: 20px auto;

`

export const ItemH2 = styled.h2`
font-size:19px;
text-align:center;
color:#000;
margin-top:8px;
text-transform:capitalize;
font-weight:600;

`

export const ItemP = styled.p`
font-size:15px;
text-align:center;
color:#000;
margin-top:8px;
text-transform:capitalize;
font-weight:500;
`

export const Image = styled.img`
width:100%;
height:auto;
`