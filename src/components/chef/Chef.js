import React from 'react'
import Carousel from "react-elastic-carousel";
import {Slide, Item, ItemH2, ItemP, Image} from './ChefStyle'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];


const Chef = ({data}) => {
  return(
    <>
    <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <Slide>
        <Carousel enableAutoPlay autoPlaySpeed={2000} breakPoints={breakPoints}>
          {data.map((elem, i) => (
             
                <Item key={i}>
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