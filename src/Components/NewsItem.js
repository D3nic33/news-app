import React from 'react'

const NewsItem = ({title, urlToImage, url, description, publishedAt}) => {

  const TransformTime = () => {
    const publishedAtDate = publishedAt.split('T')
    const publishedAtDateTime = publishedAtDate[1] 
    const time = publishedAtDateTime.replace('Z', '')

    return (
      <div>
        { time }
      </div>
    )
  }
  
  const TransformDate = () => {
    const input = publishedAt
    const date = input.split('T')
    const [year, month, day] =  date[0].split('-')
    const transformedDate = (`${day}/${month}/${year}`)
    
    return (
      <div>
        { transformedDate }
      </div>
    )
  }

  return (
    <div className='border border-gray-300 rounded-md my-5 md:my-0'>
      <div>
        <img 
          src={urlToImage}
          alt={urlToImage}
          className='rounded-t-md'
        />
      </div>
      <div className='px-3'>
        <div>
          <h2 className='font-semibold text-2xl py-2'>
            {title}
          </h2>
          <div className='flex text-xs pb-3'>
            <div className='pr-1-1'>
              <TransformDate />
            </div>
            <div className='pl-1'>
              <TransformTime />
            </div>
          </div>
        </div>
        <div>
          {description}
        </div>
        <div className='py-2'>
          <a
            href={url}
            className="underline"
          >
            Originele artikel
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem;