const readline = require('readline');
const chalk = require('chalk');
const figlet = require('figlet');

// It really is this much trouble:
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter some text: ', function (response) {

  console.log(
    chalk.green(
      figlet.textSync(response, {
        font: 'Epic',
        verticalLayout: 'default',
        horizontalLayout: 'default'
      })
    )
  );

  rl.close();
});

// _       _________ _        _          _______  _______    _        _______
// | \    /\\__   __/( \      ( \        (       )(  ____ \  ( (    /|(  ___  )|\     /|
// |  \  / /   ) (   | (      | (        | () () || (    \/  |  \  ( || (   ) || )   ( |
// |  (_/ /    | |   | |      | |        | || || || (__      |   \ | || |   | || | _ | |
// |   _ (     | |   | |      | |        | |(_)| ||  __)     | (\ \) || |   | || |( )| |
// |  ( \ \    | |   | |      | |        | |   | || (        | | \   || |   | || || || |
// |  /  \ \___) (___| (____/\| (____/\  | )   ( || (____/\  | )  \  || (___) || () () |
// |_/    \/\_______/(_______/(_______/  |/     \|(_______/  |/    )_)(_______)(_______)
