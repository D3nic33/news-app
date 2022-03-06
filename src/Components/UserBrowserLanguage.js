const UserBrowserLanguage = () => {
  var userLang = navigator.language || navigator.userLanguage; 
  var checkForCharacter = '-' 
  let countryCode;
  
  console.log(userLang)

  if(!userLang.includes(checkForCharacter)){
    countryCode = userLang
  }
  else{
    var countryCodeSplitted = userLang.split('-')
    countryCode = countryCodeSplitted[1]
  }

  return countryCode;
}

export default UserBrowserLanguage

