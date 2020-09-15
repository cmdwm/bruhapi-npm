const snekfetch = require("snekfetch");

//TEXT ENDPOINTS
module.exports.joke = async () => {
  const { body } = await snekfetch
    .get(`https://bruhapi.xyz/joke`)
    .catch(err => console.log(err));
  return body.joke;
};

module.exports.word = async () => {
  const { body } = await snekfetch
    .get(`https://bruhapi.xyz/word`)
    .catch(err => console.log(err));
  return body.word;
};

module.exports.fact = async () => {
  const { body } = await snekfetch
    .get(`https://bruhapi.xyz/fact`)
    .catch(err => console.log(err));
  return body.fact;
};

//IMAGE ENDPOINTS
module.exports.tti = word => {
  return "https://bruhapi.xyz/tti/" + word.replace(/ /g, "%20");
};

module.exports.sub = async sub => {
  const { body } = await snekfetch
    .get(`https://bruhapi.xyz/reddit/` + sub)
    .catch(err => console.log(err));
  return body.img;
};

module.exports.taco = async () => {
  const { body } = await snekfetch
    .get(`https://bruhapi.xyz/taco`)
    .catch(err => console.log(err));
  return body.taco;
};

//MISC ENDPOINTS
module.exports.tts = async word => {
  const { body } = await snekfetch
    .get(`https://bruhapi.xyz/tts/` + word.replace(/ /g, "%20"))
    .catch(err => console.log(err));
  return body.url;
};

module.exports.cb = async word => {
  const { body } = await snekfetch
    .get(`https://bruhapi.xyz/cb/` + word.replace(/ /g, "%20"))
    .catch(err => console.log(err));
  return body.res;
};

module.exports.spotify = async disid => {
  const { body } = await snekfetch
    .get(`https://bruhapi.xyz/spotify/` + disid)
    .catch(err => console.log(err));
  return body.res;
};
