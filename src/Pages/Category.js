import Header from '../Components/Header'
import NewsList from '../Components/NewsList'
import { useParams } from "react-router-dom";

export default function Category() {
  const { category } = useParams();
  return (
    <div className='container'>
      <Header />
      <NewsList request={`https://newsapi.org/v2/top-headlines?country=nl&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`} />
    </div>
  );
}