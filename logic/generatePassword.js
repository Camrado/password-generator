let numbers = '1234567890'.split('');
let lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let symbols = '!@#$%^&*()_+-=/*.?~'.split('');
let similar = 'il1Lo0O'.split('');

const generatePassword = (options, length) => {
  let password = ``;

  for (let i = 0; i < length; i++) {
    let optionIndex = Math.floor(Math.random() * options.length);
    password += returnChar(options, optionIndex);
  }

  return password;
};

// returns random element of options[optionIndex]
const returnChar = (options, optionIndex) => {
  let char;
  switch (options[optionIndex]) {
    case 'number':
      char = numbers[Math.floor(Math.random() * numbers.length)];
      break;
    case 'symbol':
      char = symbols[Math.floor(Math.random() * symbols.length)];
      break;
    case 'lowercase':
      char = lowercase[Math.floor(Math.random() * lowercase.length)];
      break;
    case 'uppercase':
      char = uppercase[Math.floor(Math.random() * uppercase.length)];
      break;
    case 'similar':
      char = similar[Math.floor(Math.random() * similar.length)];
      break;
  }
  return char;
}

module.exports = generatePassword;