const axios = require("axios"); // Makes POST request
const querystring = require("querystring"); // Ensures axios body is form-urlencoded
const cheerio = require("cheerio"); // Traverse returned HTML from request

// A bank of error messages provided upon different results of login request
const messageBank = {
    "Your access request has timed out.": true, 
    // success - message alerting user of a missed redirection to successful login page

    "The username and/or password you entered was incorrect, please try again.": false,
    // failure - wrong login details

    "An error occurred, please try again.": false
    // failure - no password given
}

async function authImperial(shortcode, pass) {
    let { data } = await axios.post("https://www.imperial.ac.uk/secure/login/ldap-login/", querystring.stringify({
        uname: shortcode,
        pwd: pass
    }));

    // data holds the resulting page as HTML to load after the request
    let $ = cheerio.load(data);

    // classify error message
    let msg = $('form[action="/secure/login/ldap-login/"] > .error-text > .module > h3.title').first().text();
    return messageBank[msg] || false;
}

module.exports = authImperial;