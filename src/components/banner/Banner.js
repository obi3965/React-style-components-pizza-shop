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
    {/* <div className="banner">
     <div className="banner-items" data-aos="fade-right">
         <h2>Movflx</h2>
         <h1>Unlimited Movie, TVs Shows, and More.</h1>
         <div className="banner-btn" data-aos="fade-up">
             <Link to="/movies">
             <button className="btn btn-danger">see movies</button>
             </Link>
         </div>
     </div>

      

   
    </div> */}

    <BannerContainer>
      <BannerItem data-aos="fade-right">
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