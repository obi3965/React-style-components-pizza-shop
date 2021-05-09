import React from 'react'
import Chef from '../components/chef/Chef';
import Contact from '../components/contact/Contact';
import { chefsData, footer, lists } from '../components/data/data';
import Footer from '../components/footer/Footer';
import List from '../components/menuBanner/List';
import MenuBanner from '../components/menuBanner/MenuBanner'






const MenuList = () => {
  

   

  return(

    <>
    <MenuBanner />
    <List menuList={lists}/>
    
    <Chef data={chefsData}/>
    
    <Contact/>

    <Footer footerData={footer}/>
    </>
   )

 }

export default MenuList