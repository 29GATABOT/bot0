let handler = async (m, { text, usedPrefix, command }) => {
if (command == 'ppt') {
let salah = `*PIEDRA, PAPEL, O TIJERA*\n\nPuedes usar los *Botones* para jugar o también puedes usar estos comandos:\n*${usedPrefix + command} piedra*\n*${usedPrefix + command} papel*\n*${usedPrefix + command} tijera*_Hola 👋🏻, bienvenido al juego de piedra, papel o tijera_*\n\nUse en minúsculas`

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
