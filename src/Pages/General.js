import Header from '../Components/Header'
import NewsList from '../Components/NewsList'

export default function Category() {
  const title = 'Uitgelicht'
  return (
    <div>
      <Header />
      <div className='flex justify-center font-semibold text-2xl place-items-center py-8 capitalize'>
        { title }
      </div>
      <NewsList request={`https://newsapi.org/v2/top-headlines?country=nl&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`} />
    </div>
  );
}