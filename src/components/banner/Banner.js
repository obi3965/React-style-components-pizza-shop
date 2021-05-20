import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
// import '../styles/banner.css'
import AOS from 'aos'

import { BannerContainer
,BannerItem , BannerH1, BannerH2, 
Button,BannerButton

} from './BannerStyle'


const Banner = () => {

  useEffect(() => {
    AOS.init({
      duration:2000,
      easing: 'ease',
      debounceDelay: 50,
    })
  }, []);
  return(
  
  <>
    

    <BannerContainer>
      <BannerItem data-aos="fade-up">
      <BannerH2>pizzon</BannerH2>
      <BannerH1>quality foods for healthy body.</BannerH1>
      <BannerButton>
        <Button as={Link} to='/products'>
          see all
        </Button>
      
      </BannerButton>
           
      </BannerItem>
    </BannerContainer>

   
 </>
   
   )

 }

export default Banner