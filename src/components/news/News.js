import React from 'react'
import {NewsBox, NewsContent, NewsItem, NewsP, NewsSpan, Image, NewsLink} from './NewsStyle'


const News = ({data}) => {

  const {id} = data
  return(
    <NewsBox>
        {data.map((news) => (
           <NewsItem key={news.id}>
        <Image src={news.image} />
        <NewsContent>
           <NewsSpan>{news.name}</NewsSpan> 
        </NewsContent>
        <NewsP>{news.desc}</NewsP>
        <NewsLink to={`/news/${id}`}>read more</NewsLink>
      </NewsItem>  
        ))}
   
    </NewsBox>
   )

 }

export default News