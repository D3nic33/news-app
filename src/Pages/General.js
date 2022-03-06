import Header from '../Components/Header'
import NewsList from '../Components/NewsList'
import UserBrowserLanguage from '../Components/UserBrowserLanguage'

export default function General() {
  const title = 'Uitgelicht'
  const countryCode = UserBrowserLanguage()

  return (
    <div>
      <Header />
      <div className='flex justify-center font-semibold text-2xl place-items-center py-8 capitalize'>
        { title }
      </div>
      <NewsList request={`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`} />
    </div>
  );
}