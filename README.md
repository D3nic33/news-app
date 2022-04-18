# News App

When you download or clone this project, the following steps need to taken in order to use the news app

## API key
The news app makes use of the https://newsapi.org/ to show the news information. To use this API, an API key is needed. To get this API key you need to go to https://newsapi.org/register and register. After registering you will receive an API key. 

## .env.local 
In order to use this API key in the project, you need to add a .env.local file to the project. Add the following code to the file:

```JavaScript
REACT_APP_NEWS_API_KEY={APIKEY}
```

Replace the {APIKEY} with your actual API key. 

After that you are all set!
