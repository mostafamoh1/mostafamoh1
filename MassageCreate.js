const { prefix, prefixalt } = require('../config.json');
const { Collection } = require('discord.js');
const delay = new Collection();
const db = require('quick.db');
const ms = require('ms');
const axios = require("axios").default;
const fs = require("fs");

module.exports = {
  name: 'messageCreate',
  async execute(client, message) {
    if (!message.author.bot) {
      const args = message.content.slice().trim().split(/ +/);
      const command = args.shift().toLowerCase();
      
      
      if (command.startsWith(prefix)) {
        const commandName = command.slice(prefix.length);
        let commandFiles = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        
        
        if (commandFiles) {
          commandFiles.execute(client, message, args);
          return; 
        }
      } else {
      
      
      if (command.startsWith(prefixalt)) {
        const commandName = command.slice(prefixalt.length);
        let commandFiles = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        
        
        if (commandFiles) {
          commandFiles.execute(client, message, args);
          return; 
        }
      } else {
      
      let commandnaame = `-${message.content}`;
   
      let commandFiles = client.commands.get(commandnaame) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandnaame));
      
        
        
        if (commandFiles) {
          commandFiles.execute(client, message, args);
          return; 
        }
        }
      }
    }
      
      
    }

};
