import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'



export const FooterBox = styled.footer`
display:flex;
justify-content:space-around;
align-items:center;
background: #101522;
padding-top:25px;
`

export const FooterItem1 = styled.div`
 width:25%;
`

export const FooterItem2 = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:25%;
`

export const FooterItem3 = styled.div`
width:25%;
`

export const FooterLink = styled(LinkR)`
color:#fff;
text-transform:capitalize;
margin-top:8px;
&:hover{
    color:#fff;
    text-decoration:none;

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
`


