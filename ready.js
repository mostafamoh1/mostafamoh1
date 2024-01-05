const Discord = require('discord.js');
const { ActivityType } = require('discord.js'); 
const db = require('quick.db');
const prefix = process.env.prefix


module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log((`Logged in as ${client.user.tag}`).red);
    console.log((`Servers: ${client.guilds.cache.size}`).magenta, (`Users: ${client.guilds.cache
      .reduce((a, b) => a + b.memberCount, 0)
      .toLocaleString()}`).yellow, (`Commands: ${client.commands.size}`).green)
client.user.setStatus(`dnd`)

client.user.setPresence({
activities: [{
      type: ActivityType.Custom, 
      name: 'custom', 
      state: 'Developed by Shadow',
    }],
  })
               // }, 8000)
    
    }
}
