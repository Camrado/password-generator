const {Toggle, Form} = require('enquirer');
const {writeFileSync} = require('fs');

const saveFile = async (password) => {
  try {
    const save = await new Toggle({
      message: 'Save password in a file?',
      enabled: 'Yep',
      disabled: 'Nope'
    }).run();
    if (!save) return console.log('Have a good day!');

    const saveForm = await new Form({
      name: 'save',
      message: 'Provide the following information:',
      choices: [
        {name: 'dir', message: 'Direction to folder'},
        {name: 'name', message: 'File name'},
        {name: 'content', message: 'File content ($ for password)'}
      ]
    }).run();
    let {dir, name, content} = saveForm;

    let folderPath;
    switch (dir) {
      case 'docs':
        folderPath = 'D:/Documents';
        break;
      case 'accs':
        folderPath = 'D:/Work/Coding/ACCOUNTS';
        break;
      case 'desktop':
        folderPath = 'C:/Users/IM/Desktop';
        break;
      default:
        folderPath = dir;
    }

    let path = `${folderPath}/${name}.txt`;

    if (content.includes('$')) content = content.replace('$', password);
    else content += ` ${password}`;

    writeFileSync(path, content);
    console.log('Successfully saved ✔️');
    console.log('Have a good day!');
  } catch (err) {
    console.log(err);
  }
};

module.exports = saveFile;