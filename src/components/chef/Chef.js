import React,{ useEffect} from 'react'
import Carousel from "react-elastic-carousel";
import {Slide, Item, ItemH2, ItemP, 
  Image, ChefH1} from './ChefStyle'
import '../../styles/nav.css'
import AOS from 'aos'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];


const Chef = ({data}) => {

  useEffect(() => {
    AOS.init({
      duration:2000,
      easing:'ease',
      debounceDelay:50
    })
  }, []);


  return(
    <>
    <ChefH1>our chefs</ChefH1>
      <Slide>
        
        <Carousel enableAutoPlay autoPlaySpeed={2000} breakPoints={breakPoints}>
          {data.map((elem, i) => (
             
                <Item key={i} data-aos='fade-up'>
                 <Image src={elem.image}/>
                 <ItemH2>{elem.name}</ItemH2>
                 <ItemP>{elem.job}</ItemP>
                </Item>
              )
          )}
          
          
        </Carousel>
        
      </Slide>
    
    </>
   )

 }

export default Chef