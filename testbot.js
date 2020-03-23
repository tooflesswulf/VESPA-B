const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', ()=>{
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === ';hi') {
        msg.reply('Helo thar');
    }
});

client.login('NjkxNDkyMzcxNTY4Nzg3NTI3.Xng5Fw.ia5HNHBvbgy4rCA3W0jieMsb0QQ')