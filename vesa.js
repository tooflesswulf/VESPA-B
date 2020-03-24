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


client.login('NjkxNTE5Njc3MzMxMTQ0Nzk0.XnjTOQ.fw28vufF4EB9SqdOknrdCtbOCT4');