import styled from 'styled-components'


export const BannerContainer = styled.div`
background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)),
url('/image/bg.jpg');
height: 100vh;
position: relative;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media(min-width:280px) and (max-width:319px){
  height:60vh;
  
}
@media(min-width:320px) and (max-width:767px){
  height:60vh;
}
@media(min-width:768px) and (max-width:1023px){
  height:55vh;
}
@media(min-width:1024px) and (max-width:1365px){
  height:45vh;
}
`

export const BannerItem = styled.div`
position: absolute;
top: 40%;
left: 10%;
transform: translateY(-10%,-40%);
width: 600px;

@media(min-width:280px) and (max-width:319px){
  width:90%;
  top:34%;
}
@media(min-width:320px) and (max-width:767px){
  width:83%;
  top:34%;
}
@media(min-width:768px) and (max-width:1023px){
  width:78%;
  top:30%;
}
@media(min-width:1024px) and (max-width:1365px){
  width:60%;
  top:30%;
}

`

export const BannerH1 = styled.h1`
    color: #fff;
    text-transform: capitalize;
    font-family: "Playfair Display", serif;  
   font-size: 52px;
   font-weight: 700;
   letter-spacing: 1px;
   @media(min-width:280px) and (max-width:319px){
    font-size:24px;
    
  }

  @media(min-width:320px) and (max-width:767px){
    font-size:28px;
  }
  @media(min-width:768px) and (max-width:1023px){
    font-size: 48px;
  }
  @media(min-width:1024px) and (max-width:1365px){
    font-size: 54px;
  }
  
`

export const BannerH2 = styled.h2`
   color: #fd9d3e;
   text-transform: capitalize;
   letter-spacing: 2px;
   font-size: 40px;
   font-weight: 900;
   font-family: "Playfair Display", serif;
   @media(min-width:280px) and (max-width:319px){
    font-size:28px;
  }
  @media(min-width:320px) and (max-width:767px){
    font-size:29px;
  }
  @media(min-width:768px) and (max-width:1023px){
    font-size: 48px;
  }
  @media(min-width:1024px) and (max-width:1365px){
    font-size: 54px;
  }
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
    @media(min-width:280px) and (max-width:319px){
      padding:6px;
      font-size:16px;
      width: 120px;
      
    }
    @media(min-width:320px) and (max-width:767px){
      padding:8px;
      font-size:16px;
      width: 140px;
    }
    @media(min-width:1024px) and (max-width:1365px){
      padding:11px;
      font-size:20px;
      width: 170px;
      letter-spacing:1px;
    }
`

export const BannerButton = styled.div`
margin-top: 30px;
display: flex;
justify-content: flex-start;
align-items: center;
`