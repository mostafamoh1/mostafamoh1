const { PermissionsBitField } = require('discord.js')
const hide = `||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`

module.exports = { 
name:'-موه', 
description:'reply', 
  aliases:[
'-شادو',
'-جست',
'-مصطفى',
'-رضوان',
'-ايوش',
'-دراجون',
'-اودا',
'-زعيم',
'-ادارة',
'-سيف',
'-ايرور',
'-كوبرا', 
'-سالم',
'-ايهم'
], 
async execute(client, message){
try {
  const user = `<@${message.author.id}>`
function reply(mention, kht=`https://imgur.com/a/5xLe6oM`, rd=``) {
 const msg = `**<a:EMG1:1135727885571866704> <@${mention}> <a:FMG1:1135729164842967153>${rd}\n\n<a:KMG2:1135740595927785482> ${user} <a:KMG2:1135740595927785482>**\n${hide} ${kht}`
return message.reply({ content: msg })
}
if(message.content == "شادو"){
await reply(`856512225061634058`,`https://imgur.com/vfVp3B1`/*,`\n\n- أحــَـد أُسـُـود دَولة فـِلـَسـطـيـن <a:Zmg23:1136614492780888074>`*/)
} else if(message.content == "موه"){
await reply(`613421087522553856`, `https://imgur.com/8TOJFHP`)
} else if (message.content =='اودا'){
  await reply(`739751519229968434`)
} else if (message.content =='زعيم'){
  await reply(`897516913071120444`)
} else if(message.content == 'جست') {
  await reply(`839591292417212457`)
} else if(message.content == 'مصطفى'){
  await reply(`1022785761516453919`,`https://imgur.com/PlJXwqs`)
} else if (message.content == 'رضوان'){
  await reply(`1163534592318386237`)
} else if (message.content == 'ايوش'){
  await reply(`806764737944879115`)
} else if (message.content == 'دراجون'){
  await reply(`734071107354624051`,`https://imgur.com/vkRsfUW`)
} else if(message.content == 'ادارة'){
if(message.member.roles.cache.some(role => role.id === '1033001628539822101' ) || message.member.permissions.has(PermissionsBitField.Flags.Administrator)){
let msg = await message.reply({ content: `**<@&887675359577931796> | <@&839474903908745218>**`})
let reacts = ['1135723805084500038','1135723793814392852','1135723799321522216','1135723812449693787']; 
for (let emoji of reacts) {
	msg.react(emoji); 
}
}
  } else if(message.content == 'سيف'){
	await reply(`746461154473410573`,`https://imgur.com/LUcIn6F`)
  } else if(message.content == 'ايرور'){
  await reply(`758666605005373460`,`https://imgur.com/mXno3Ip`)
	} else if(message.content == 'كوبرا'){
	await reply(`939458423307792394`)
  } else if(message.content == 'سالم'){
  await reply(`1101917285377122374`)
} else if(message.content == 'ايهم'){
	await reply(`1038685632853192804`,'https://cdn.discordapp.com/attachments/1150493760099209396/1179473343573921813/Media__.gif?ex=658323a6&is=6570aea6&hm=8275fca2e2538f7f812616c0a2da9f29a11b8dbbb4a39bb39ca586772c3b8057&');
  }
} catch (err) {
  if (err) console.log(err)
  }
} 
} 
