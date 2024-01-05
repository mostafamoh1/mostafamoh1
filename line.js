require('discord.js')

const { PermissionsBitField } = require('discord.js');

module.exports = { 
name:'-خط', 
description:'line', 
  aliases:['-الخط'], 
async execute(client, message){
try {
  if(message.member.permissions.has(PermissionsBitField.Flags.ManageMessages)){
 message.channel.send({ content: `https://imgur.com/a/5xLe6oM` }).then(
   await message.delete()
  )
} 
    } catch (err) {
  if (err) console.log(err)
  }
} 
} 

