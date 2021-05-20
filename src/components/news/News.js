import React,{useEffect} from 'react'
import {NewsBox, NewsContent, NewsItem, NewsP, 
  NewsSpan, Image, NewsLink, NewsH1} from './NewsStyle'
import AOS from 'aos'

const News = ({data}) => {

useEffect(() => {
  AOS.init({
  duration:2000,
  easing:'ease',
  debounceDelay:50
  })
}, []);

  const {id} = data

  return(
    <>
  <NewsH1> our latest news</NewsH1>
    <NewsBox>
      
        {data.map((news) => (
           <NewsItem key={news.id} data-aos='fade-up'>
        <Image src={news.image} />
        <NewsContent>
           <NewsSpan>{news.name}</NewsSpan> 
        </NewsContent>
        <NewsP>{news.desc}</NewsP>
        <NewsLink to={`/news/${id}`}>read more</NewsLink>
      </NewsItem>  
        ))}
   
    </NewsBox>
    </>
   )

 }

export default News