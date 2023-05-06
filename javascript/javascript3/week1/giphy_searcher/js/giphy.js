const key = config['giphy']

const getGiphies = async (input, limit) => {
  
    const base = 'https://api.giphy.com/v1/gifs/search';
    const query = `?api_key=${key}&q=${input}&limit=${limit}&offset=0&rating=g&lang=en`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data;
  
}