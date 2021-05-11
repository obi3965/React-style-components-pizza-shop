import React from 'react'
import Blogs from '../components/blog/Blogs'
import { blogs, footer } from '../components/data/data'
import Footer from '../components/footer/Footer'


const Blog = () => {
  

  return(
    < >
     <Blogs blogData={blogs}/>

     <Footer footerData={footer}/>
    </>
    
    
   )

 }

export default Blog