require('discord.js')
const { PermissionsBitField } = require('discord.js');

module.exports = { 
name:'-علنوم', 
description:'reply', 
  aliases:['-نامو'], 
async execute(client, message){
try {
  if(message.member.permissions.has(PermissionsBitField.Flags.ManageMessages) || message.member.roles.cache.has('1063779589580673034')){
await message.channel.send({ content: `.　　　　　　　　　　　　　.　　　　　　　　　　　　　*　　　　　　　　　.
　　　　　　　　　　.　　　　　　　　　　　　　.
　　　　　　　　　　　　　　　　       　   　　　　
　　　　　　　　　　　　　　　　       　   　　　　　　　　　　　　　　　　       　    ✦ 
　   　　　,　　　　　　　　　*　　     　　　　 　　,　　　 ‍ ‍ ‍ ‍ 　 　　　　　　　　　　　　.　　　　　 　　
　　　.　　　　　　　　　　　　　 　           　　　　　　　　　　　　　　　　　　　˚   　　　　　　　　　　　    　　　　　　　　　　　　　　　.　　　
 　　    　　　　　 　　　　　.　　　　　　　.　　　　　　　　　　　　　　　*
　　   ✦　　　　　　　　　　.
　　　　　　　　　　.　　　　　　　　　　　　　.
　   　   　　　　　　　　　　　　　　　　  
.　　　　　　　　　　　　　.
　　 　　　　　　　　　　　　　　　　       　    ✦ 
　   　　　,　　　　　　　　
　　　　　　　　　　.　　　　　　　　　　　　　.　　　　　　       　   　　　　　　　　　　　　　　　　       　    ✦ 
　   　　　,　　　　　　　　　*　　     　　　　 　　,　　　 ‍ ‍ ‍ ‍ 　 　　　　.　　　　　 　　
　         ، 　　.　　　　　　　　　　　　　 　           　　　　　　　　　　　　　　　　　　　˚　   　　　　,　　　　　　　　　　　      　　　　　　　　　.　　　
 　　 　　　　　.　　　　　　　　　　　　　.　　　　　　　　　　
 　　　　　 ✦　　　　　　　　　　.
　　　　　　　　　　.　　　　　　.　　　　　　       　   　　　　
　　　　　　　　　　　　　　　　       　   　　　　　　　　　　　　　　　　       　    ✦ 
　   　　　,　     　**<a:AMG3:1135723799321522216> 
تصــبحـون عــلى ما تتــمــنون**\n||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||https://imgur.com/a/T4fGP6b `})
}
    } catch (err) {
  if (err) console.log(err)
  }
} 
} 