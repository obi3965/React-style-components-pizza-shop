import styled from 'styled-components'

export const AboutBox = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
margin-top:50px;
background:#fafaf6;
padding:20px;
height:auto;
padding-bottom:20px;
@media(min-width:280px) and (max-width:319px){
    width:100%;
    margin:12px auto;
  }
  @media(min-width:320px) and (max-width:767px){
    padding-bottom:20px;
  }
`

export const AboutItem = styled.div`
width:50%;
@media(min-width:280px) and (max-width:319px){
    width:88%;
    margin:12px auto;
  }
  @media(min-width:320px) and (max-width:767px){
    width:96%;
    
  }
  @media(min-width:768px) and (max-width:1023px){
    width:60%;
    
  }
  @media(min-width:1024px) and (max-width:1365px){
    width:60%;
    
  }
`

export const AboutTitle = styled.h1`

@media(min-width:280px) and (max-width:319px){
    text-align:center;
    margin:12px auto;
    font-size:20px;
    font-weight:600;
  }
  @media(min-width:320px) and (max-width:767px){
    text-align:center;
    margin:12px auto;
    font-size:22px;
    font-weight:600;
    
  }
  @media(min-width:768px) and (max-width:1023px){
   
    margin:12px auto;
    font-size:28px;
    font-weight:600;
    
  }
  @media(min-width:1024px) and (max-width:1365px){
    margin:12px auto;
    font-size:28px;
    font-weight:600;
    
  }
`

export const AboutText = styled.p`
@media(min-width:280px) and (max-width:319px){
    text-align:justify;
    margin:12px auto;
    font-size:16px;
    
  }
  @media(min-width:320px) and (max-width:767px){{
    text-align:justify;
    margin:12px auto;
    font-size:17px;
  }
  @media(min-width:1024px) and (max-width:1365px){
    text-align:justify;
    margin:12px auto;
    font-size:18px;
    
  }
  
`
export const AboutName = styled.h1`
@media(min-width:280px) and (max-width:319px){
    text-align:center;
    margin:12px auto;
    font-size:20px;
    font-weight:600;
  }
  @media(min-width:320px) and (max-width:767px){{
    text-align:center;
    margin:12px auto;
    font-size:23px;
    font-weight:600;
  }
  @media(min-width:768px) and (max-width:1365px){{
    text-align:center;
    margin:12px auto;
    font-size:23px;
    font-weight:600;
  }
  
  
`
export const AboutImage = styled.div`

`

export const AboutImg = styled.img`
width:100%;
height:560px;
margin-top:30px;
@media(min-width:280px) and (max-width:319px){
    width:200px;
    height:auto;
  }

  @media(min-width:320px) and (max-width:767px){
    width:200px;
    height:auto;
  }
  
  @media(min-width:768px) and (max-width:1023px){
    width:200px;
    height:auto;
    
  }
  @media(min-width:1024px) and (max-width:1365px){
    width:210px;
    height:auto;
    
  }
`