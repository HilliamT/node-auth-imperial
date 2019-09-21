const authImperial = require("auth-imperial");

(async () => {
    let loggedIn = await authImperial("SHORTCODE", "PASS");
    console.log(loggedIn);
})();