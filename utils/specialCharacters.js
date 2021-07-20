const {MultiSelect} = require('enquirer');

const specialCharactersPrompt = new MultiSelect({
  name: 'characters',
  message: 'Special characters?',
  choices: [
    {name: 'numbers (e.g. 1234)', value: 'number'},
    {name: 'symbols (e.g. @#$%)', value: 'symbol'},
    {name: 'lowercase characters (e.g. abcdefgh) (default)', value: 'lowercase'},
    {name: 'uppercase characters (e.g. ABCDEFGH)', value: 'uppercase'},
    {name: 'similar characters (e.g. i,l,1,L,o,0,O)', value: 'similar'}
  ],
  result(names) {
    let res = Object.values(this.map(names));
    if (res.length === 0) return ['lowercase']
    return res;
  }
});

module.exports = specialCharactersPrompt;