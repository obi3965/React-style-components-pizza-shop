import styled from 'styled-components'


export const ServiceContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background-color:#fd9d3e;
height:400px;

`

export const ServiceCard = styled.div`
display: flex;
justify-content: center;
align-items: center; 
flex-direction:column;
width:400px;
`

export const ServiceImage = styled.img`
display: flex;
justify-content: center;
align-items: center; 
width:100px;
height:auto;
 
`

export const ServiceTitle = styled.div`
  margin-top:15px;
  text-transform: capitalize;
  font-family: "Playfair Display", serif; 
  font-size:25px;
  font-weight: 700;
  letter-spacing: 1px;
   color:#000;
`

export const ServiceDesc = styled.p`
margin-top:15px;
font-size:16px;
`