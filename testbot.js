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

client.login('NjkxNDkyMzcxNTY4Nzg3NTI3.XnhA3w._BUwq75EKsh-lHzDgxLXGBM7ol4')