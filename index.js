const Discord = require("discord.js");
const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000
const auto = require('./autoreply.js')
app.get('/', (req, res) => {
  res.send('ONLINE')
})
app.post("/uptime_devtools", (req, res) => {
  res.send({
    msg: "done uptime",
    access: "by_devtools",
  })
})
app.listen(port, () => {
// console.log(`app listening on port ${port}`)
  })
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

module.exports = client; 
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Collection } = require('discord.js')
module.exports = client;
client.commands = new Collection();
client.events = new Collection();
client.slashCommands = new Collection();
['commands', 'events', 'slash'].forEach(handler => {
  require(`./Handlers/${handler}`)(client);
})

const commands = client.slashCommands.map(({ execute, ...data }) => data);

// Register slash commands
const rest = new REST({ version: '10' }).setToken(process.env.token);
rest.put(
  Routes.applicationCommands('1184256550576070716'),
  { body: commands },
).then(() => console.log(('Done').red))
