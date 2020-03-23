from discord.ext import commands

cmd_prefix = ';'
client = commands.Bot(cmd_prefix,
                      description='REEEEE\n'
                                  'Tell Albert if u see this. Say bot is brooken and dumb')

@client.event
async def on_ready():
    print('Logged in as:\n\t{}\n\t{}'.format(client.user.name, client.user.id))
    print('------------')


@client.command()
async def hi(ctx):
    await ctx.send('Hello there')


client.run('NjkxNDkyMzcxNTY4Nzg3NTI3.Xngxlw.qXvT0UQIqc9ETFvIkrb8rDmrgro')
print('Properly exited')
