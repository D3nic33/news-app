import Header from '../Components/Header'
import NewsList from '../Components/NewsList'
import { useParams } from "react-router-dom";

export default function Category() {
  const { category } = useParams();
  return (
    <div>
      <Header />
      <div className='flex justify-center font-semibold text-2xl place-items-center py-8 capitalize'>
        { category }
      </div>
      <NewsList request={`https://newsapi.org/v2/top-headlines?country=nl&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`} />
    </div>
  );
}