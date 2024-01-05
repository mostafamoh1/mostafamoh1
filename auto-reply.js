require('discord.js')

const	{ 
	Client,
	Partials, 
	GatewayIntentBits, 
	ActivityType
      } = require('discord.js'); 

const { 
	Guilds,
	GuildMembers, 
	GuildMessages,
	MessageContent
      } = GatewayIntentBits; 

const { 
	User, 
	Message,
	GuildMember,
	Channel 
      } = Partials; 

const client = new Client({
intents: [Guilds, GuildMembers, GuildMessages, MessageContent], 
partials: [User, Message, GuildMember]
}) 

client.login(process.env.token)
client.on('messageCreate', async msg => {
  if (msg.channel.id === '868916934413008896') {
    if(msg.content.startsWith("#مسح")) return; 
    if(msg.content.startsWith("#قفل")) return; 
if(msg.content.startsWith("#فتح")) return; 
    if(msg.author.id == "1131244775161475094" && msg.content.includes(`Suggestion`)){
msg.channel.send(`https://imgur.com/a/5xLe6oM`)
      }
    } else if(msg.channel.id == '1143177608725549107'){
   // console.log(msg)
    if (msg.stickers.size > 0) {
    const sticker = msg.stickers.first(); 
    const stickerID = sticker.id; 
    const stickerURL = `https://cdn.discordapp.com/stickers/${stickerID}.png`;
    msg.reply(`**Sticker link**:  ${stickerURL}`);
}
    }
    }) 
    client.on('messageCreate', async (message) => {
  // Split the message content into words 
  if(message.channel.id !==	"1143177608725549107") return; 
const emojiPattern = /<(a)?:\w+:(\d+)>/g;

  // Find all emoji matches in the message content
  const emojiMatches = message.content.matchAll(emojiPattern);

  for (const match of emojiMatches) {
    const isAnimated = match[1] === 'a';
    const emojiID = match[2];

      const emojiURL = `https://cdn.discordapp.com/emojis/${emojiID}.${isAnimated ? 'gif' : 'png'}`;

      // Reply with the emoji URL
      await message.reply(`**Emoji link**: ${emojiURL}`);
    }
});
/*
client.on('messageCreate', async (message) => {
  if (message.content.startsWith('!deletechannel')) {
    // Extract the channel ID from the message (you can modify this to suit your needs)
    const channelId = message.content.split(' ')[1];

    // Fetch the channel by its ID
    const channelToDelete = message.guild.channels.cache.get(channelId);

    if (channelToDelete) {
      try {
        // Delete the channel
        await channelToDelete.delete();
        console.log(`Deleted channel ${channelToDelete.name}`);
      } catch (error) {
        console.error(error);
      }
    } else {
      message.reply('Channel not found.');
    }
  }
});
*/
