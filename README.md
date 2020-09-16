# 🅱 BruhAPI

Welcome to the official [BruhAPI](https://bruhapi.xyz) NPM package! This package has many things to play around with such as text to image, random jokes & facts, random subreddit images, and more! A documentation of how to use each feature can be found below.


### Initialize BruhAPI NPM
`npm install bruhapi`  will install the package.

`const bruh = require("bruhapi")` will reference the package.

*_Each function using BruhAPI should be async._

### How to Use
Using the BruhAPI NPM module is very easy! Just use `bruh('/endpoint')` and it'll return the `res` query from the endpoint response. Most responses return `res` for the most important query.
### Examples
```js
const bruh = require("bruhapi") //require the package
test() //call the function
async function test() 
{console.log(await bruh('/fact'))} //declare the function
``` 
will return this to the console: `Washington, DC is the capital of the United States of America.`

--------------------
If you have any questions, **please join our [Discord server](https://willm.xyz/discord)**! 