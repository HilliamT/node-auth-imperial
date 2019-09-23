# node-auth-imperial

A Promise-based NodeJS authentication method for Imperial College student accounts

![npm](https://img.shields.io/npm/v/auth-imperial)
![npm](https://img.shields.io/npm/dw/auth-imperial)
![NPM](https://img.shields.io/npm/l/auth-imperial)

This came about through the lack of methods to authenticate Imperial student accounts externally of the Imperial College website, with the only other provider on campus requiring setting up a Kerberos instance within the Imperial network to communicate with.

This way of authenticating was found through looking at the code of "https://www.imperial.ac.uk/secure/login/", which details an undocumented API POST endpoint on the Imperial site, that accepts a "uname" (username / Imperial shortcode) and "pwd" (password).

The response from this endpoint would return the resulting HTML of the page to load, which will detail an error message just above the login form based on the success of the login.

The module can be made skinnier and more lightweight, by simply searching for the error message as a substring within the returned HTML string, and thus be ported over to different languages as a simple API call and substring search. However, I have decided to use Cheerio to traverse the HTML, which will also check for changes in the formatting of the HTML page in the API response.

## Getting Started

### Dependencies

* Just npm!

### Installing

```
npm install auth-imperial
```

### Executing program

It's as simple as exporting the module!
```
const authImperial = require("auth-imperial");

(async () => {
    let loggedIn = await authImperial("SHORTCODE", "PASS");
    console.log(loggedIn);
})();

// OR

authImperial("SHORTCODE", "PASS").then(loggedIn => {
    console.log(loggedIn);
});
```

## Improvements I'd like to make
* More secure authentication to prevent server-sided skimming of passwords by site owners, for campus-wide usage by Imperial societies

## Authors

Contributors names and contact info

Hilliam Tung - Current Joint Maths and Computer Science student @ Imperial College London
[@HilliamT](https://github.com/HilliamT)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details