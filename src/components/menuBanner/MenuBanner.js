import React from 'react'

import {BannerItem, BannerLink, BannerH1, BannerContent
     } from './MenuBannerStyle'


const MenuBanner = () => {
  return(
    <BannerItem>
     <BannerContent >
         <BannerH1 data-aos='fade-up'>FOOD MENUS</BannerH1>
         <BannerLink to='/'>home</BannerLink>
     </BannerContent>
   </BannerItem>
   )

 }

export default MenuBanner