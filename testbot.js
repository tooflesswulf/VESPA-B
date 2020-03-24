const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', ()=>{
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === ';hi') {
        msg.channel.send('Helo thar');
    }
});


client.on('guildMemberAdd', member => {
    member.guild.systemChannel.send("welcome to the server");

});


const fs = require('fs');
var clientid = fs.readFileSync('clientid.txt', 'utf8');
console.log(`Using client id:\t${clientid}`)
client.login(clientid);
