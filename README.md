# node-auth-imperial

A Promise-based NodeJS authentication method for Imperial College student accounts. You may find this useful for any applications you are building for student development initiatives on Imperial's campus.

[![Latest Stable Version](https://img.shields.io/npm/v/auth-imperial.svg)](https://www.npmjs.com/package/auth-imperial) [![License](https://img.shields.io/npm/l/auth-imperial.svg)](https://www.npmjs.com/package/auth-imperial) [![NPM Downloads](https://img.shields.io/npm/dt/auth-imperial.svg)](https://www.npmjs.com/package/auth-imperial) [![NPM Downloads](https://img.shields.io/npm/dm/auth-imperial.svg)](https://www.npmjs.com/package/auth-imperial)

## Installing

Assuming you have `node` and `npm` installed, the package can be installed from `npm`'s public registry.
```
npm install auth-imperial
```

## Usage

The module exports one simple default method. Usage examples are below.
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


## Inspiration

This came about through the lack of methods to authenticate Imperial student accounts externally of the Imperial College website, with the only other provider on campus requiring setting up a Kerberos instance within the Imperial network to communicate with.

This hindered the development of student projects involving Imperial accounts, having to seek very special permissions from the Imperial ICT team.

## Original Method 

After finding an undocumented public API upon the Imperial.ac.uk website, this module was created to allow for student-led projects to attach user accounts to their Imperial student accounts using this API. This was done via:

    POST https://www.imperial.ac.uk/secure/login/

The body for the `POST` request is of the format

    {
        uname: string, // Username / Imperial Shortcode
        pwd: string // Password for their Imperial account
    }

The response from this endpoint would return the resulting HTML of the page to load, which will detail an error message just above the login form based on the success of the login, which was checked against using `cheerio`.

## Current Method

After the Imperial ICT team reached out to us to note that the API endpoint would be deprecated as it was an old webpage that should have been removed long ago but activity from societies and student projects using the endpoint made the ICT team aware of this legacy endpoint.

Luckily, the Imperial College Student Union does offer an endpoint for students to use, which this module has been adapted to using.

    POST https://eactivities.union.ic.ac.uk/user/login

The body for the `POST` request is of the format

    {
        username: string, // Username / Imperial Shortcode
        password: string // Password for their Imperial account
    }

If the username or password is incorrect, a `HTTP 4XX ERROR` is thrown, which is caught and regarded as a failed login attempt. If the user's details are correct, a `HTTP 200 OK` is returned, with the user understood to be verified.