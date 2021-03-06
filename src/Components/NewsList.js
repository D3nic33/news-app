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
    <div>
      {articles.length > 0  ? (
        <div className='md:grid md:grid-cols-2 md:gap-10 w-11/12 mx-auto pb-8'>
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
        ) : (
          <div className='flex justify-center font-semibold text-3xl'>
            <h1>No news available</h1>
          </div>
        )}
    </div>
  )
}

export default NewsList;
