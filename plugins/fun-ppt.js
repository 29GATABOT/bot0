let handler = async (m, { text, usedPrefix, command }) => {
if (command == 'ppt') {
let salah = `𝙋𝙄𝙀𝘿𝙍𝘼, 𝙋𝘼𝙋𝙀𝙇, 𝙊 𝙏𝙄𝙅𝙀𝙍𝘼\n\n𝙋𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙡𝙤𝙨 𝘽𝙊𝙏𝙊𝙉𝙀𝙎 𝙥𝙖𝙧𝙖 𝙟𝙪𝙜𝙖𝙧 𝙤 𝙩𝙖𝙢𝙗𝙞é𝙣 𝙥𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨:\n${usedPrefix + command} 𝙥𝙞𝙚𝙙𝙧𝙖\n${usedPrefix + command} 𝙥𝙖𝙥𝙚𝙡\n${usedPrefix + command} 𝙩𝙞𝙟𝙚𝙧𝙖\n\n𝙐𝙨𝙚 𝙚𝙣 𝙢𝙞𝙣ú𝙨𝙘𝙪𝙡𝙖𝙨`

conn.sendHydrated(m.chat, wm, salah, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['🪨..', `${usedPrefix + command} piedra`],
['📄', `${usedPrefix + command} papel`],
['✂️', `${usedPrefix + command} tijera`]
], m,)}
  
//  conn.sendHydrated(m.chat, salah, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
//['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
//['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🤭', `ds`],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
//], m,)
                  
//if (!text) throw salah
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
} 
if (text == astro) {
  
//m.reply(`*_🔰 Empate!_*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `*_🔰 Empate!_*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
  
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].money += 1000
  
//m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
  
} else {
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].uang += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
} else {
  
//m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
  
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
  
} else {
  
//m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
  
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
  
} else {
  
//m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
  
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
  
} else {
  
//m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*`)
  
}
} //else {
//throw salah
} //}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
handler.register = false
handler.limit = false
export default handler
