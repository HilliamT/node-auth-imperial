const axios = require("axios"); // Makes POST request
const querystring = require("querystring"); // Ensures axios body is form-urlencoded

async function authImperial(shortcode, pass) {
    try {
        await axios.post("https://eactivities.union.ic.ac.uk/user/login", querystring.stringify({
            username: shortcode,
            password: pass
        }));
    } catch (error) {
        return false;
    }
    return true;
}

module.exports = authImperial;