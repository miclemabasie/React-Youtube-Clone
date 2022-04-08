import axios from "axios";

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/`,
    })

// URL: https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY
//      &part=snippet,contentDetails,statistics,status