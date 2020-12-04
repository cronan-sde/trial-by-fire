const dotEnv = require("dotenv").config();
const axios = require("axios");
const LIMIT = 12;
let search = "kanye";
const GIPHY_URL = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=${search}&limit=${LIMIT}`;

  axios.get(GIPHY_URL).then(res => {

    const gifs = res.data.data; //gif array
    console.log(res.data.data);
    
  }).catch(err => {
    console.log(err);
  })