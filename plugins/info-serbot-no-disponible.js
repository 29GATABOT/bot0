import fs from 'fs'
//import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let pp = 'https://i.imgur.com/WwxBm8o.jpg' //'./media/menus/Menu1.jpg'
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//try {
//pp = await conn.getProfilePicture(who)
//} catch (e) {

//} finally { }
await m.reply('╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮')
let text = `*Las funciones .jadibot .bots .serbot .subbot .getcode No estan disponibles en* ${gt}\n*The functions .jadibot .bots .serbot .subbot .getcode are not available*`.trim()   
//conn.sendButton(m.chat, text, wm, await(await fetch(pp)).buffer(), [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: `https://github.com/GataNina-Li/GataBot-MD`, mediaType: 1, description: `git`, 
title: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})   
}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler
