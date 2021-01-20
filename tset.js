const tmi = require('tmi.js');


function getrandom(context, channel) {
    const fs = require('fs');
    const config = require('./config.json');
    if (fs.existsSync(config.commandListFile)) {
        console.log('config', config);

        const commandListFileContent = fs.readFileSync(config.commandListFile, 'utf8');
        var Command = 'Isaac.Spawn(EntityType.ENTITY_ENVY, 1, 0, arandomspot, Vector(0, 0), player)'
        if (context["custom-reward-id"] === "*********") {
            var Command = '******'
        }
        if (context["custom-reward-id"] === "*********") {
            var Command = '******'
        }


        console.log('Command', Command);
        fs.appendFileSync(config.dispatchFile, `${Command}\r\n`);
        client.say(channel, `${Command}`);
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const client = new tmi.Client
({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'Expert_Gennadiy',
		password: 'oauth:rxh9ysujl9h1phv6z3i7216nuqx6zx'
	},
	channels: [ 'VasariTV' ]
});
client.connect().catch(console.error);
client.on('message', (channel, context, tags, message, self) => {
	if(self) return;
    getrandom(context, channel)
})