const getSentimentAnalysis = async (string) => {

    const url = 'https://twinword-sentiment-analysis.p.rapidapi.com/analyze/';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'b31850b089msh0a090a0715c5fa6p111103jsn2d64396051d2',
            'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com'
        },
            body: new URLSearchParams({
            text: string,
        }),
    };
    
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data
    }
    catch (error) {
        console.error(error);
    }

}
