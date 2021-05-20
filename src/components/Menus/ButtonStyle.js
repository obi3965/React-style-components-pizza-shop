import styled from 'styled-components'

export const ButtonShow = styled.button`
color:#fff;
margin-top:20px;
background:#fd9d3e;
margin-left:10px;
text-transform:capitalize;
@media(min-width:280px) and (max-width:319px){
    font-size:15px;
}
@media(min-width:320px) and (max-width:767px){
  font-size:15px;
}
`


export const ButtonContainer = styled.div`
display:flex;
 justify-content:center;
 align-items:center;
 flex-wrap:wrap;
 @media(min-width:280px) and (max-width:319px){
    
  }
  @media(min-width:320px) and (max-width:767px){
    width:78%;
    margin:auto;
  }
`