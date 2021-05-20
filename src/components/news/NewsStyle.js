import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const NewsH1 = styled.h1`
text-align: center;
text-transform:uppercase;
padding-top:20px;
font-size:45px;
font-family: "Playfair Display", serif; 
font-weight:800;
@media(min-width:768px) and (max-width:1023px){
  font-size:35px;
  font-weight:800;
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

export const NewsBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap:wrap;
  width:90%;
  margin:30px auto;
  @media(min-width:280px) and (max-width:319px){  
    width:90%;
    margin:auto;
  }
  @media(min-width:768px) and (max-width:1023px){
    width:94%;
    margin:15px auto;
  }
  @media(min-width:280px) and (max-width:319px){
    width:90%;
    margin:15px auto;
  }
  @media(min-width:320px) and (max-width:767px){
    width:94%;
    margin:15px auto;
  }
 
` 

export const NewsItem = styled.div`
width:350px;
@media(min-width:280px) and (max-width:319px){
 margin:25px auto;
  width:100%;
}
@media(min-width:768px) and (max-width:1023px){
  width:200px;
  margin-top:12px;
}

@media(min-width:1024px) and (max-width:1365px){
  width:260px;
}
@media(min-width:280px) and (max-width:319px){
  width:240px;
  margin-top:12px;
}
@media(min-width:320px) and (max-width:767px){
  width:290px;
  margin-top:12px;
}
`

export const NewsContent = styled.div`
width:100%;
@media(min-width:768px) and (max-width:1023px){
  width:100%;
  tex-transform:capitalize;
  font-weight:500;
  margin-top:12px;
}
@media(min-width:1024px) and (max-width:1365px){
  width:100%;
  tex-transform:capitalize;
  font-weight:500;
  margin-top:12px;
}
@media(min-width:280px) and (max-width:319px){
  width:100%;
  tex-transform:capitalize;
  font-weight:500;
  margin-top:12px;
}
@media(min-width:320px) and (max-width:767px){
  width:100%;
  tex-transform:capitalize;
  font-weight:500;
  margin-top:12px;
}
`

export const NewsSpan = styled.span`
margin-top:10px;
@media(min-width:768px) and (max-width:1023px){
  text-transform:capitalize;
  font-weight:600;
  
}
@media(min-width:1024px) and (max-width:1365px){
  text-transform:capitalize;
  font-weight:600;
  
}
@media(min-width:280px) and (max-width:319px){
  text-transform:capitalize;
  font-weight:600;
}
@media(min-width:320px) and (max-width:767px){
  text-transform:capitalize;
  font-weight:600;
}
`

export const NewsP = styled.p`
@media(min-width:768px) and (max-width:1023px){
  text-transform:capitalize;
  font-weight:400;
  font-size:13px;
  width:100%;
  text-align:justify;
  word-break:break-all;
  margin-top:7px;
}
@media(min-width:1024px) and (max-width:1365px){
  text-transform:capitalize;
  font-weight:400;
  font-size:14px;
  width:100%;
  text-align:justify;
  word-break:break-all;
  margin-top:7px;
  
}
@media(min-width:280px) and (max-width:319px){
  text-transform:capitalize;
  font-weight:400;
  font-size:13px;
  width:100%;
  text-align:justify;
  word-break:break-all;
  margin-top:7px;
}
@media(min-width:320px) and (max-width:767px){
  text-transform:capitalize;
  font-weight:400;
  font-size:13px;
  width:100%;
  text-align:justify;
  word-break:break-all;
  margin-top:7px;
}
`


export const Image = styled.img`
 width:100%;
`

export const NewsLink = styled(LinkR)`
text-transform:capitalize;
font-weight:400;
color:#fd9d3e;
letter-spacing:1px;

`