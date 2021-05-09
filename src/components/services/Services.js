import React from 'react'
import {ServiceContainer, ServiceCard, ServiceImage,
ServiceTitle, ServiceDesc} from './ServicesStyle'



const Services = ({data}) => {
  return(
    <ServiceContainer>
     {data.map((elem) => {
         const {img, title, desc } = elem
         return(
           <ServiceCard>
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