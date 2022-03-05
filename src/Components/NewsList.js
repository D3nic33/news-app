import axios from 'axios'
import { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

const NewsList = (request) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(request.request)
      setArticles(response.data.articles);
    }
    getArticles()
  }, [request])

  return (
    <div className='grid grid-cols-2 gap-10 w-11/12 mx-auto py-8'>
      {articles.map((article, index) => {
        return(
          <NewsItem
            key={index}
            title = {article.title}
            urlToImage = {article.urlToImage}
            url = {article.url}
            description = {article.description}
            publishedAt = {article.publishedAt}
          />
        )
      })}
    </div>
  )
}

export default NewsList;