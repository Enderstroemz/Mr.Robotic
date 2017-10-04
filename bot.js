const discord = require('discord.js');
const bot = new discord.Client();

bot.on('message' , (message) => {
if(message.content == 'DPGW') {
    message.channel.sendMessage('SUCK A DICK IM NOT READY 4 IT......Not yet -_-')
}


});

bot.login(proces.env.BOT_TOKEN);
