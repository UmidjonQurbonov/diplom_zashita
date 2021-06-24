

const appSearch = {
  method: 'GET',
  url: 'https://gplaystore.p.rapidapi.com/applicationSearch',
  params: {q: 'lamezia+airport', lang: 'en', country: 'us'},
  headers: {
    'x-rapidapi-key': '3eafc1afccmsh898cb249f366fe3p162bcfjsn8db0eab2dcf7',
    'x-rapidapi-host': 'gplaystore.p.rapidapi.com'
  }
};



  const appDetailsPost = {
    method: 'POST',
    url: 'https://gplaystore.p.rapidapi.com/applicationDetails',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-key': '3eafc1afccmsh898cb249f366fe3p162bcfjsn8db0eab2dcf7',
      'x-rapidapi-host': 'gplaystore.p.rapidapi.com'
    },
    data: {country: 'American', ids: ['net.luxteam.sacal'], lang: 'eng'}
  };

  const appReviews = {
    method: 'GET',
    url: 'https://gplaystore.p.rapidapi.com/applicationReviews',
    params: {id: 'net.luxteam.sacal', lang: 'it'},
    headers: {
      'x-rapidapi-key': '3eafc1afccmsh898cb249f366fe3p162bcfjsn8db0eab2dcf7',
      'x-rapidapi-host': 'gplaystore.p.rapidapi.com'
    }
  };

  

const appDetails = {
  method: 'GET',
  url: 'https://gplaystore.p.rapidapi.com/applicationDetails',
  params: {id: 'net.luxteam.sacal', lang: 'en', country: 'us'},
  headers: {
    'x-rapidapi-key': '3eafc1afccmsh898cb249f366fe3p162bcfjsn8db0eab2dcf7',
    'x-rapidapi-host': 'gplaystore.p.rapidapi.com'
  }
};

  export { appSearch,  appDetailsPost, appReviews, appDetails}