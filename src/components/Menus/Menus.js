import React,{useEffect} from 'react'
import AOS from 'aos'

import { 
    Item, ItemIcon, ItemContainer,
    ItemImage, ItemPrice, ItemH2, ItemDesc
} from './MenusStyle'


const Menus = ({menuItem}) => {

    useEffect(() => {
        AOS.init({
          duration:2000,
          easing: 'ease',
          debounceDelay: 50,
        })
      }, []);

  return(
    <Item>
    {
        menuItem.map((item, i) =>{
            return <ItemIcon key={i.id}>
                <ItemContainer data-aos="fade-up">
                    
                    <ItemImage src={item.image} alt=""/>
                    <ItemH2>{item.title}</ItemH2>
                    <ItemDesc>{item.text}</ItemDesc>
                    
                    <ItemPrice>$ {item.price}</ItemPrice>
                </ItemContainer>
            </ItemIcon>
        })
    }
</Item>
   )

 }

export default Menus