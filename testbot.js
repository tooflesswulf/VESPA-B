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


client.login('NjkxNDkyMzcxNTY4Nzg3NTI3.XnhCUg.3VnyQXKo-qQ9SKUy4DWKjAGVrew');