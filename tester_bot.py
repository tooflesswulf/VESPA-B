from discord.ext import commands

cmd_prefix = ';'
client = commands.Bot(cmd_prefix,
                      description='REEEEE\n'
                                  'Tell Albert if u see this. Say bot is brooken and dumb')

@client.event
async def on_ready():
    print('Logged in as:\n\t{}\n\t{}'.format(client.user.name, client.user.id))
    print('------------')


client.run('NTIwMzIwMzQzMDQzMjExMjg1.XK1XzA.95zdEiAjehH8cjMOV0nXz91TR4I')
print('Properly exited')
