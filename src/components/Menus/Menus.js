import React from 'react'
import { 
    Item, ItemIcon, ItemContainer,
    ItemImage, ItemPrice, ItemH2, ItemDesc
} from './MenusStyle'

const Menus = ({menuItem}) => {
  return(
    <Item>
    {
        menuItem.map((item, i) =>{
            return <ItemIcon key={i.id}>
                <ItemContainer>
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