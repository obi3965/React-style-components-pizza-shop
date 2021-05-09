import React from 'react'
import {FooterBox, FooterItem1, FooterItem2, 
    FooterItem3, FooterLink, FooterImage, FooterDesc,
    FooterEmail, FooterPhone, FooterOpen, FooterH1
} from './FooterStyle'


const Footer = ({footerData}) => {
  return(
    <>
    <FooterBox>
        <FooterItem1>
            <FooterImage src='./image/pizza-logo.png'></FooterImage>
            <FooterDesc>
            20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK 69QJ+2F Alexandria, United Kingdom
            </FooterDesc>
            <FooterPhone>phone: +45 53535412</FooterPhone>
            <FooterEmail>email: obi.3965@gmail.com</FooterEmail>
        </FooterItem1>
        
          
    
        <FooterItem3>
            <FooterH1>OPENING HOURS</FooterH1>
            <FooterOpen>mon - tues : 07 - 20:00</FooterOpen>
            <FooterOpen>ons - thurs : 08 - 20:00</FooterOpen>
            <FooterOpen>fri - sun : 09 : 21:00</FooterOpen>
            
        </FooterItem3>

        <FooterItem2>
               {footerData.map((data,i) => (
            <FooterLink to={data.link}>{data.title}</FooterLink>
        
        ))}
        </FooterItem2>
    </FooterBox>
    </>
   )

 }

export default Footer