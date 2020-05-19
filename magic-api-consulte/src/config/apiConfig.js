const axios = require("axios");

const apiConfig = axios.create({
    baseURL: "https://api.magicthegathering.io/v1/cards/"
})

export default apiConfig;   