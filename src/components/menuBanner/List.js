import React from 'react'
import {ListItem,Name,Ing1,Ing2,Ing3,
    Image,Desc, Item1, CartLink, Cart} from './MenuBannerStyle'


const List = ({menuList}) => {
  return(   
    <ListItem>
    {menuList.map((data)=>{
        return(
       <>
        <Item1>
          <Image src={data.image}></Image>  
        

          
        <Name>{data.name}</Name>
        <Ing1>{data.ing1} /</Ing1>
        <Ing2> {data.ing2} /</Ing2>
        <Ing3> {data.ing3}</Ing3>
        <Desc>{data.desc}</Desc>
        <Cart>
          <CartLink>buy now</CartLink>  
        </Cart>
        
          </Item1>      
         
        </>
        
        )  
    })}
    </ListItem>
   
   )

 }

export default List