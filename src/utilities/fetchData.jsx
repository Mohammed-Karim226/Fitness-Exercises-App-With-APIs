
export const exerciseOptions ={
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':'e60ab0803bmsh11b824d297dde15p13b1c2jsn9fb98b0d3d55'
      
    }

}

export const options = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  headers: {
    'X-RapidAPI-Key': '94fb36e401msh81d64af0ff77155p1ab937jsnf43847d6d26c',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = response.json();
    return data;
}

