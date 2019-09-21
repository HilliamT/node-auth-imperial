# node-auth-imperial

A Promise-based NodeJS authentication method for Imperial College student accounts

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

## Authors

Contributors names and contact info

Hilliam Tung - Current Joint Maths and Computer Science student @ Imperial College London
[@HilliamT](https://github.com/HilliamT)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details