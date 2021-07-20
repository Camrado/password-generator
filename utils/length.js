const {NumberPrompt} = require('enquirer');

const lengthPrompt = new NumberPrompt({
  name: 'number',
  message: 'Pick a length. (Min 5. Max 30. Only integers.)',
  result(num) {
    if (num < 5) return 5;
    else if (num > 30) return 30;
    return Math.trunc(num);
  }
});

module.exports = lengthPrompt;