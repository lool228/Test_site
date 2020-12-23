var lool = 'Hello'
const tmi = require('tmi.js');


function getrandom(channel) {
    const fs = require('fs');
    const config = require('./config.json');
    if (fs.existsSync(config.commandListFile)) {
        console.log('config', config);
        const commandListFileContent = fs.readFileSync(config.commandListFile, 'utf8');
        const commandArray = commandListFileContent.split('\r\n');
        const randomCommand = commandArray[getRandomInt(0, commandArray.length)];
        console.log('randomCommand', randomCommand);
        fs.appendFileSync(config.dispatchFile, `${randomCommand}\r\n`);
        client.say(channel, `${randomCommand}, yeah!`);
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'lool2341',
		password: ''
	},
	channels: [ 'VasariTV' ]
});
client.connect().catch(console.error);
client.on('message', (channel, context, tags, message, self) => {
	if(self) return;
    if (context["custom-reward-id"] === "a16e9530-5aa6-4a8b-8ff0-d12786d9fd16") {
        client.say(channel, `@${context.username}, heya!`);
        getrandom(channel)
	}
}
)