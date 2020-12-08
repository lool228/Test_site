

function getrandom() {

    const fs = require('fs');
    const config = require('./config.json');
    
    console.log('config', config);
    if (existsSync(commandListFile)) {
        const commandListFileContent = readFileSync(commandListFile, 'utf8');
        const commandArray = commandListFileContent.split('\r\n');
        setInterval(() => {
            const randomCommand = commandArray[getRandomInt(0, commandArray.length)];
            console.log('randomCommand', randomCommand);
            appendFileSync(dispatchFile, `${randomCommand}\r\n`);
        }, 5000);
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}