import fs from 'fs'
let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
  {
  conn.sendButton(`*╭━━[ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 | 𝙉𝙊𝙏𝙄𝘾𝙀 ]━━━⬣*\n*┃*\n*┃💌* *[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙵𝚄𝙴 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n\n*—◉ 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚁𝙴𝙰𝙲𝙲𝙸𝙾𝙽𝙰𝚁𝙰 𝙰 𝙽𝙸𝙽𝙶𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙷𝙰𝚂𝚃𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃*\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`, '✅ *𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🎁 𝙄𝙣𝙛𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡', '.cuentasgb'],['🐈 𝙈𝙚𝙣𝙪', '.menu']], false, {
contextInfo: { externalAdReply: {
title: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨',
body: 'Super Bot WhatsApp', 
sourceUrl: `https://www.instagram.com/gata_dios`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
//m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙵𝚄𝙴 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n\n*—◉ 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚁𝙴𝙰𝙲𝙲𝙸𝙾𝙽𝙰𝚁𝙰 𝙰 𝙽𝙸𝙽𝙶𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙷𝙰𝚂𝚃𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃*')
}
handler.help = ['banchat2']
handler.tags = ['owner']
handler.command = /^banchat2$/i
handler.rowner = true

export default handler
