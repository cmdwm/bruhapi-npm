var bruh = require("./index.js");

async function test() {
  console.log(await bruh.tts("hello"));
  console.log(await bruh.spotify("339177677326123018"));
  console.log(await bruh.cb("hello"));
  console.log(await bruh.tti("hello"));
  console.log(await bruh.joke());
  console.log(await bruh.word());
  console.log(await bruh.fact());
  console.log(await bruh.sub("memes"));
  console.log(await bruh.taco());
}

test();
