const snekfetch = require("snekfetch");

module.exports = async (endpoint, query) => {
    const snekfetch = require('snekfetch');
    
    const { body } = await snekfetch
    .get(`https://bruhapi.syntaxpwn.repl.co` + endpoint)
    .catch(err => console.log(err));

return body.res

  }
