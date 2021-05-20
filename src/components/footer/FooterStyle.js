import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'



export const FooterBox = styled.footer`
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
background: #101522;
padding-top:25px;
@media(min-width:280px) and (max-width:319px){
   flex-direction:column;
  }

  @media(min-width:320px) and (max-width:767px){
   padding-bottom:20px;
   flex-direction:column;
 }
`

export const FooterItem1 = styled.div`
 width:25%;
 @media(min-width:280px) and (max-width:319px){
    width:85%;
     margin: auto;
     
  }
  @media(min-width:320px) and (max-width:767px){
    width:85%;
    margin: auto;
    
 }
`

export const FooterItem2 = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:25%;
@media(min-width:280px) and (max-width:319px){
    width:85%;
     margin: auto;
     
  }

  @media(min-width:320px) and (max-width:767px){
   width:85%;
    margin: auto;
    
 }
`

export const FooterItem3 = styled.div`
width:25%;
text-transform:capitalize;
@media(min-width:280px) and (max-width:319px){
    width:85%;
     margin: auto;
     order:1;
     margin-top:10px;
  }
  @media(min-width:320px) and (max-width:767px){
   width:85%;
    margin: auto;
    order:1;
    margin-top:10px;
 }

`

export const FooterLink = styled(LinkR)`
color:#fff;
text-transform:capitalize;
margin-top:8px;
&:hover{
    color:#fff;
    text-decoration:none;

}
@media(min-width:280px) and (max-width:319px){
    width:85%;
     margin: auto;
     order:0;
     margin:5px;
     color:#fd9d3e;
  }
  @media(min-width:320px) and (max-width:767px){
   width:85%;
    margin-right: auto;
    order:0;
    margin:5px;
    color:#fd9d3e;
 }
 @media(min-width:768px) and (max-width:1023px){
   font-size:23px;
   color:#fd9d3e;
  }
  @media(min-width:1024px) and (max-width:1365px){
   font-size:24px;
   color:#fd9d3e;
  }
  
`

export const FooterImage = styled.img`
height:45px;
margin-top:12px;
`

export const FooterDesc = styled.p`
color:#fff;
margin-top:12px;
`

export const FooterEmail = styled.p`
color:#fff;
`

export const FooterPhone = styled.p`
color:#fff;
`

export const FooterOpen = styled.p`
color:#fff;
`

export const FooterH1 = styled.h1`
color:#fff;
font-size:28px;
@media(min-width:280px) and (max-width:319px){
   font-size:20px;
  }
  @media(min-width:320px) and (max-width:767px){
   font-size:23px;
  }
  @media(min-width:768px) and (max-width:1023px){
   font-size:23px;
  }
  @media(min-width:1024px) and (max-width:1365px){
   font-size:22px;
  }
`


