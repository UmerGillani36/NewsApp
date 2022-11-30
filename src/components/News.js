import React from 'react'
import { useContext } from 'react'
import NewsCard from './NewsCard';
import { newscontext } from './NewsContext'
const News = (props) => {
    const {data}=useContext(newscontext);
    
    return (
        <div className='Container'> 
            {
                data?
            data.articles.map((article)=>(
                <NewsCard data={article} key={article.url}/>
               
            )):"Loading"
            }
        
        
    </div>
  )
}

export default News