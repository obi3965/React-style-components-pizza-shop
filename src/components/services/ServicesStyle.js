import styled from 'styled-components'


export const ServiceContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap:wrap;
background-color:#fd9d3e;
height:400px;

@media(min-width:280px) and (max-width:319px){
  height:auto;
  padding-bottom:10px;
}

@media(min-width:320px) and (max-width:767px){
  height:auto;
  padding-bottom:10px;
}
@media(min-width:768px) and (max-width:1023px){
  height:auto;
  flex-wrap:row-wrap;
  padding:20px;
}
@media(min-width:1024px) and (max-width:1365px){
  height:auto;
  flex-wrap:row-wrap;
  padding:20px;
}
`

export const ServiceCard = styled.div`
display: flex;
justify-content: center;
align-items: center; 
flex-direction:column;
width:400px;
@media(min-width:280px) and (max-width:319px){
  width:85%;
  text-align:justify;
  word-break:keep-all;
}
@media(min-width:320px) and (max-width:767px){
  width:85%;
  text-align:justify;
  word-break:keep-all;
}
@media(min-width:768px) and (max-width:1023px){
  width:220px;
}
@media(min-width:1024px) and (max-width:1365px){
  width:270px;
}
`

export const ServiceImage = styled.img`
display: flex;
justify-content: center;
align-items: center; 
width:100px;
height:auto;
@media(min-width:280px) and (max-width:319px){
  height:auto;
  width:80px;
  margin-top:20px;
}
@media(min-width:320px) and (max-width:767px){
  height:auto;
  width:80px;
  margin-top:20px;
}
@media(min-width:768px) and (max-width:1023px){
  height:auto;
  width:70px;
  margin-top:20px;
}
@media(min-width:1024px) and (max-width:1365px){
  height:auto;
  width:70px;
  margin-top:20px;
}
`

export const ServiceTitle = styled.div`
  margin-top:15px;
  text-transform: capitalize;
  font-family: "Playfair Display", serif; 
  font-size:25px;
  font-weight: 700;
  letter-spacing: 1px;
   color:#000;
   @media(min-width:280px) and (max-width:319px){
    font-size:20px;
  }
  @media(min-width:320px) and (max-width:767px){
    font-size:22px;
  }
  @media(min-width:768px) and (max-width:1023px){
    font-size:16px;
  }
  @media(min-width:1024px) and (max-width:1365px){
    font-size:17px;
  }
  
`

export const ServiceDesc = styled.p`
margin-top:15px;
font-size:16px;
@media(min-width:280px) and (max-width:319px){
  font-size:15px;
  
}
@media(min-width:320px) and (max-width:767px){
  font-size:16px;
}
@media(min-width:768px) and (max-width:1023px){
  font-size:13px;
  tex-align:center;
  word-break:break-all;
}
@media(min-width:1024px) and (max-width:1365px){
  font-size:15px;
  tex-align:center;
  word-break:break-all;
}
`