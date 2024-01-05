require('discord.js'); 
const { PermissionsBitField } = require('discord.js');


module.exports = { 
name:'العاب_تصويت', 
description:'reply', 
  aliases:['-تصويت_الالعاب'], 
async execute(client, message){
try {
if(!message.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return; 
const msg = await message.reply({ content: `### - قم بالتصويت على اللعبة التي تريد لعبها\n- :one: مافيا\n- :two: روليت\n- :three: اكس او\n- :four: حجرة\n- :five: كراسي\n- :six: نرد\n- :seven: ايفنت العاب سريعة`, allowedMentions: { repliedUser: true } })
const emojis = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣'] 
for (let emoji of emojis) {
	msg.react(emoji)
}
    } catch (err) {
  if (err) console.log(err)
  }
} 
} 
