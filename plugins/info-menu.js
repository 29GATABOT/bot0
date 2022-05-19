let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀 | 𝘿𝙍𝙊𝙋-𝘿𝙊𝙒𝙉 𝙇𝙄𝙎𝙏`,
rows: [
{title: "✅ 𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅", description: "𝙊𝘽𝙏𝙀𝙉 𝙈𝘼𝙎 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿\n𝙂𝙀𝙏 𝙈𝙊𝙍𝙀 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 𝙁𝙍𝙊𝙈 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿", rowId: `${usedPrefix}cuentasgatabot`},
{title: "💖 𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 💖", description: "𝙐𝙉𝙀𝙏𝙀 𝘼 𝙇𝘼 𝘾𝙊𝙈𝙐𝙉𝙄𝘿𝘼𝘿 𝙂𝘼𝙏𝘼𝘽𝙊𝙏\n𝙅𝙊𝙄𝙉 𝙏𝙃𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏 𝘾𝙊𝙈𝙈𝙐𝙉𝙄𝙏𝙔", rowId: `${usedPrefix}gruposgb`},
{title: "🔰 𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤𝙨 | 𝙂𝙧𝙤𝙪𝙥 𝙇𝙞𝙨𝙩 🔰", description: "𝙂𝙍𝙐𝙋𝙊𝙎 𝙀𝙉 𝘿𝙊𝙉𝘿𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿 𝙃𝘼 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝘿𝙊\n𝙂𝙍𝙊𝙐𝙋𝙎 𝙒𝙃𝙀𝙍𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿 𝙃𝘼𝙎 𝙅𝙊𝙄𝙉𝙀𝘿", rowId: `${usedPrefix}listagrupos`},
{title: "💡 𝙀𝙨𝙩𝙖𝙙𝙤 | 𝙎𝙩𝙖𝙩𝙪𝙨 💡", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙀𝙎𝙏𝘼𝘿𝙊 𝙔 𝙈𝘼𝙎 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉\n𝙆𝙉𝙊𝙒 𝙈𝙔 𝙎𝙏𝘼𝙏𝙐𝙎 𝘼𝙉𝘿 𝙈𝙊𝙍𝙀 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉", rowId: `${usedPrefix}estado`},   
{title: "⚜️ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙖 | 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙚 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 ⚜️", description: "𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙏𝘼𝙇𝙇𝘼𝘿𝘼\n𝘿𝙀𝙏𝘼𝙄𝙇𝙀𝘿 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉", rowId: `${usedPrefix}infogata`},    
{title: "🪄 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 𝙙𝙚 𝙢𝙞 𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 🪄", description: "𝙈𝙄 𝘾𝙍𝙀𝘼𝘿𝙊𝙍𝘼\n𝙈𝙔 𝘾𝙍𝙀𝘼𝙏𝙊𝙍", rowId: `${usedPrefix}creadora`},      
{title: "🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙋𝙞𝙣𝙜 🚀", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿\n𝙆𝙉𝙊𝙒 𝙈𝙔 𝙎𝙋𝙀𝙀𝘿", rowId: `${usedPrefix}ping`},    
]}, ]
//let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)

const listMessage = {
text: ' ',
footer: `╭━━〔 *${wm}* 〕━━⬣
┃🌟🌟🌟🌟🌟🌟🌟🌟🌟
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💗 *¡Hola | Hi!* ${username}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌟🌟🌟🌟🌟🌟🌟🌟🌟
╰━━━━━━〔 𓃠 *${vs}* 〕━━━━━━⬣

╭━━〔 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄Ó𝙉 | 𝙄𝙉𝙁𝙊 𝙈𝙀𝙉𝙐 〕━━⬣
┃ *PRESIONE ESTE MENSAJE PARA IR AL MENÚ.*
┃ *PRESS THIS MESSAGE TO GO TO THE MENU.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💫➺ _${usedPrefix}cuentasgatabot | cuentasgb | accounts_
┃💫➺ _${usedPrefix}gruposgb | grupos | groupgb_
┃💫➺ _${usedPrefix}listagrupos | grouplist_
┃💫➺ _${usedPrefix}estado | heygata | status_
┃💫➺ _${usedPrefix}infogata | infobot_
┃💫➺ _${usedPrefix}creadora | owner_
┃💫➺ _${usedPrefix}velocidad | ping_
┃💫➺ _Bot_ 
╰━━━━━━━━━━━━━━━━━━━━⬣
${wm}`,
title: null,
buttonText: "𝙋𝙍𝙀𝙎𝙄𝙊𝙉𝙀 𝘼𝙌𝙐Í | 𝙋𝙍𝙀𝙎𝙎 𝙃𝙀𝙍𝙀", 
sections }

await conn.sendMessage(m.chat, listMessage)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(infomenu)$/i
export default handler
