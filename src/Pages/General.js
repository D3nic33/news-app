import Header from '../Components/Header'
import NewsList from '../Components/NewsList'

export default function Category() {
  return (
    <div className='container'>
      <Header />
      <NewsList request={`https://newsapi.org/v2/top-headlines?country=nl&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`} />
    </div>
  );
}