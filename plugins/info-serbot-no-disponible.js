import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let pp = 'https://i.imgur.com/WwxBm8o.jpg' //'./media/menus/Menu1.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)
} catch (e) {

} finally { }

let text = `${ag} Las funciones .jadibot .bots .serbot .subbot .getcode No estan disponibles en ${gt}`.trim()   
conn.sendButton(m.chat, text, wm, await(await fetch(pp)).buffer(), [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)
}
/*conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝚂𝙴𝚁𝙱𝙾𝚃',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛᴄ ﹣ ʙᴏᴛ',         
previewType: 1, thumbnail: fs.readFileSync(pp),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})   */
//}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler
