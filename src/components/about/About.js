import React,{useEffect} from 'react'
import {AboutBox, AboutImage, AboutItem, AboutName, 
    AboutTitle, AboutText, AboutImg} from './AboutStyle'
import AOS from 'aos'

const About = () => {

 useEffect(() => {
   AOS.init({
     duration:2000,
     easing:'ease',
     debounceDelay:50
   })
 }, [])

    const aboutData = [
        {
            
            name:'Delicious Restaurant',
            title:'ABOUT PIZZON',
            text:'Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur',
            image:'./image/about-pizzon.png'
        }
    ]
  return(
      <div>
    <AboutBox>
      {aboutData.map(item => {
         return <>
          <AboutItem data-aos='fade-up'>
          <AboutName>{item.name}</AboutName>
          <AboutTitle>{item.title}</AboutTitle>
          <AboutText>{item.text}</AboutText>  
          </AboutItem>
          
          <AboutImage data-aos='fade-up'>
              <AboutImg src={item.image} />
          </AboutImage>
        </>
      })}
   </AboutBox>
   </div>
   )

 }

export default About