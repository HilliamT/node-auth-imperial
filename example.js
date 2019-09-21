const { authImperial } = require("./auth");

(async () => {
    let loggedIn = await authImperial("SHORTCODE", "PASS");
    console.log(loggedIn);
})();