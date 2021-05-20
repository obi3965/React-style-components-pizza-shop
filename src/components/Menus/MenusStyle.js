import styled from 'styled-components'


export const TabContainer = styled.div`
background:#121619;
padding-bottom:30px;
`

export const Item = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-wrap:wrap;
  margin-top:20px;
`
export const ItemContainer = styled.div`
 width:340px;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 margin-top:20px;
 @media(min-width:280px) and (max-width:319px){
  width:90%;
  margin:auto;
}
@media(min-width:320px) and (max-width:767px){
  width:90%;
  margin:auto;
}
@media(min-width:768px) and (max-width:1023px){
  width:280px;
  margin:auto;
  
}
`

export const ItemImage = styled.img`
width:200px;
@media(min-width:280px) and (max-width:319px){
  width:120px;
}
@media(min-width:320px) and (max-width:767px){
  width:130px;
  
}
@media(min-width:768px) and (max-width:1023px){
  width:150px;
  margin:auto;
}
`

export const ItemH2 = styled.h2`
color:#fff;
font-size:20px;
margin-top:15px;
@media(min-width:280px) and (max-width:319px){
  font-size:16px;
}
@media(min-width:320px) and (max-width:767px){
  font-size:17px;
}
@media(min-width:768px) and (max-width:1023px){
  font-size:17px;
}
`

export const ItemDesc = styled.p`
color:#fff;
font-size:16px;
margin-top:15px;
text-align:center;
opacity:.75;
@media(min-width:280px) and (max-width:319px){
  font-size:14px;
  margin-top:8px;
}
`


export const ItemPrice = styled.span`
color:#fd9d3e;
font-size:18px;
`

export const ItemIcon = styled.div`
margin-top:20px;
`

export const TabDesc = styled.p`
text-align:center;
color:#fd9d3e;
font-family: 'Pacifico', cursive;
padding-top:20px;
font-size:30px;
@media(min-width:280px) and (max-width:319px){
  font-size:19px;
}
`

export const TabH1 = styled.h1`
text-align:center;
color:#fff;
text-transform:uppercase;
font-size:35px;
font-family: "Playfair Display", serif; 
font-weight:700;
@media(min-width:280px) and (max-width:319px){
  font-size:20px;
  text-align:center;
  letter-spacing:1px;
}
`