import axios from "axios";

const URL = 'https://api.unsplash.com/';
// Access key below 
const API_KEY = 'Y9nXx0lqg4HgXb7xPKyAQHpDixgTe0pn_6A_n0DoYKE';

// Create fetchWeather asynchronous function that receives an input-parameter (query)
export const fetchImage = async (query) => {
    // const response = await axios.get('https://api.unsplash.com/photos/random/?client_id=Y9nXx0lqg4HgXb7xPKyAQHpDixgTe0pn_6A_n0DoYKE');
    const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query="${query}"&client_id=Y9nXx0lqg4HgXb7xPKyAQHpDixgTe0pn_6A_n0DoYKE`);

    const imgData = await response.data;
    console.log(imgData.results);
    // We need to specify our parameters to be received
    // Then we destructure the image data from the info gotten

    // const { imgData } = await axios.get(URL, {
    //     params : {
    //         q: query,
    //         units: 'metric',
    //         APPID: API_KEY,
    //     }
    // });
    return imgData;
}