# 🅱 BruhAPI

Welcome to the official [BruhAPI](https://bruhapi.xyz) NPM package! This package has many things to play around with such as text to image, random jokes & facts, random subreddit images, and more! A documentation of how to use each feature can be found below.


### Initialize BruhAPI NPM
`const bruh = require("bruhapi")`

*_Each module should be wrapped in an async function._

### List of Features
- `tts("text")` - text to speech
- `spotify("discordID")` - get user's playing spotify song
- `cb("text")` - talk to cleverbot FREE
- `tti("text")` - text to image
----------
- `joke()` - random joke
- `word()` - random word
- `fact()` - random fact
----------
- `sub("sub_name")` - random image from subreddit
- `taco()` - random taco image

### Examples
For more examples, check the `examples.js` file on GitHub.
```js
const bruh = require("bruhapi")
async function test() {
console.log(await bruh.joke())
}

test()
```
--------------------
If you have any questions, **please join our [Discord server](https://willm.xyz/discord)**! 