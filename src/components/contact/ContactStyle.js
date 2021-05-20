import styled from 'styled-components'

export const Container = styled.div`
width:90%;
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
margin:50px auto;
@media(min-width:280px) and (max-width:319px){
   flex-direction:column;
   width:94%;
 }
 @media(min-width:320px) and (max-width:767px){
  flex-direction:column;
  width:94%;
}
`

export const Form = styled.form`
display:flex;
justify-content:center;
flex-direction:column;
width:50%;
 @media(min-width:280px) and (max-width:319px){
   width:94%;
 }
 @media(min-width:320px) and (max-width:767px){
  width:94%;
  margin-top:15px;
}
 
`

export const Input = styled.input`
padding:6px;

`

export const Label = styled.label`
text-transform:capitalize;
margin-top:8px;
`

export const Button = styled.button`
width:200px;
margin-top:10px;
padding:12px;
background:#000;
color:#fff;
text-transform:capitalize;
border:none;
letter-spacing:1px;
@media(min-width:768px) and (max-width:1023px){
  width:150px; 
}
@media(min-width:280px) and (max-width:319px){
  width:135px;
  padding:9px;
}
@media(min-width:320px) and (max-width:767px){
 width:135px;
 padding:9px;
}

`

export const Textarea = styled.textarea`


`

export const ContactBox = styled.div`
 width:40%;
 @media(min-width:280px) and (max-width:319px){ 
   width:94%;
 }
 @media(min-width:320px) and (max-width:767px){
  width:94%;
}
@media(min-width:768px) and (max-width:1023px){
  width:45%;
  
}
`

export const ContactH2 = styled.h2`
color:#fd9d3e;
font-family: 'Pacifico', cursive;
padding-top:20px;
font-size:30px;
@media(min-width:768px) and (max-width:1023px){
  font-size:22px;
  
}
@media(min-width:280px) and (max-width:319px){
  font-size:19px;
}
@media(min-width:320px) and (max-width:767px){
  font-size:19px;
}

`

export const ContactH1 = styled.h1`
   color: #000;
   text-transform: capitalize;
   letter-spacing: 2px;
   font-size: 43px;
   font-weight: 900;
   font-family: "Playfair Display", serif; 
   @media(min-width:768px) and (max-width:1023px){
    font-size:30px;
    
  }
  @media(min-width:280px) and (max-width:319px){
    font-size:22px;
  }
  @media(min-width:320px) and (max-width:767px){
    font-size:22px;
  }
`

export const ContactP = styled.p`
font-size:15px;
@media(min-width:768px) and (max-width:1023px){
  font-size:14px;
  
}
`

export const ContactNum = styled.div`
padding:14px;
border:8px solid #fd9d3e;
background:#000;
color:#fff;
width:200px;
text-align:center;
cursor:pointer;
@media(min-width:768px) and (max-width:1023px){
  width:170px;
  padding:12px;
}
@media(min-width:280px) and (max-width:319px){
  width:150px;
  padding:10px;
}
@media(min-width:320px) and (max-width:767px){
  width:150px;
  padding:10px;
}
`

