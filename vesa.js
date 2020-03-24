const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', ()=>{
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'hi') {
        msg.channel.send('Hello there');
    }

    if (msg.content === '!setup server') {
        msg.channel.send('Setting up the server');
        addJustJoinedRole(msg.channel.guild)
        addStudioChannels(msg.channel.guild)
    }
});

function addJustJoinedRole(guild) {
    guild.roles.create({
        data: {
          name: 'JustJoined',
          color: 'BLUE',
        },
        reason: 'This member just joined the server!',
      })
}

function addStudioChannels(guild){
    guild.channels.create('studio',{
        type: 'category',
    })
    guild.channels.create('studio',{
            type: 'text',
        })
    guild.channels.create('studio',{
        type: 'voice',
    })
}

client.on('guildMemberAdd', member => {
    member.guild.systemChannel.send("welcome to the server");

});


const fs = require('fs');
var clientid = fs.readFileSync('clientid.txt', 'utf8');
console.log(`Using client id:\t${clientid}`)
client.login(clientid);