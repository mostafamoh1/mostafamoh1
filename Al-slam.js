require('discord.js')


module.exports = { 
name:'-السلام عليكم', 
description:'reply', 
  aliases:['-سلام عليكم','-سلامو عليكو','-سلامٌ عليكم','-السلام عليكم ورحمة الله وبركاته','-السلام عليكم ورحمة الله','-السلام عليكم والرحمة'], 
async execute(client, message){
try {

await message.reply({ content: `<a:BMG7:1135259194577129582>__** وعليكم السلام ورحمة ﷲ وبركاته **__<a:BMG7:1135259194577129582>`, allowedMentions: { repliedUser: true } })

    } catch (err) {
  if (err) console.log(err)
  }
} 
} 
