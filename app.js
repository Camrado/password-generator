const specialCharactersPrompt = require('./utils/specialCharacters');
const lengthPrompt = require('./utils/length');
const generatePassword = require('./logic/generatePassword');
const {Toggle} = require('enquirer');
const clipboardy = require('clipboardy');
const saveFile = require('./utils/saveFile');

async function app() {
  try {
    let options = await specialCharactersPrompt.run();
    let length = await lengthPrompt.run();
    let password, retry = false;

    do {
      password = generatePassword(options, length);
      console.log(password);

      retry = await new Toggle({
        message: 'Retry?',
        enabled: 'Yep',
        disabled: 'Nope'
      }).run();
    } while (retry);

    let copy = await new Toggle({
      message: 'Copy to clipboard?',
      enabled: 'Yep',
      disabled: 'Nope'
    }).run();
    if(copy) clipboardy.writeSync(password);
    console.log('Successfully copied ✔️');

    await saveFile(password);
  } catch (err) {
    console.log(err)
  }
}

app();


