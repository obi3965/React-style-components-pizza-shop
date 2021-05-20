import React,{ useEffect} from 'react'
import {ServiceContainer, ServiceCard, ServiceImage,
ServiceTitle, ServiceDesc} from './ServicesStyle'
import AOS from 'aos'


const Services = ({data}) => {

  useEffect(() => {
    AOS.init({
      duration:2000,
      easing:'ease',
      debounceDelay:50
    })
  }, []);


  return(
    <ServiceContainer>
     {data.map((elem) => {
         const {img, title, desc } = elem
         return(
           <ServiceCard data-aos='fade-up'>
             <ServiceImage src={img} />
             <ServiceTitle>{title}</ServiceTitle>
             <ServiceDesc>{desc}</ServiceDesc>
            </ServiceCard>   
         )
          
     })}
    
          
          
     
     
      
        
            
        
    

    </ServiceContainer>
   )

 }

export default Services