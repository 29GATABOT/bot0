/*let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*âĄ ðīðððððð*\n ${pesan}\nâââââââââââââââ`
let teks = `â­âã *ðĻðŧðŽðĩðŠð°ðķðĩ ðŪðđðžð·ðķ* ãââŽĢ\n\n${oi}\n\n`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
for (let username of participants) {
teks += `ââĨ @${username.id.split('@')[0]}\n`}
teks += `â°ââââ[ *ð  ${vs}* ]âââââŽĢ`
//conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
let img = 'https://i.imgur.com/8fuQ7X5.jpeg'  
conn.sendHydrated(m.chat, teks, `ð°ðððð.ðððð | ${wm}`, img, 'https://github.com/GataNina-Li/GataBot-MD', 'ðððĐðð―ðĪðĐ-ððŋ', null, null, [
['ððĢðŦðĪððð§ ðĪðĐð§ð ðŦððŊ ðĢ', `${usedPrefix + command}`],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ â', '.menu']
], m, { mentions: participants.map(a => a.id) })  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(zeus)$/i
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler*/


import MessageType from '@adiwajshing/baileys'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants }) => {
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m
let c = m.quoted ? m.quoted : m.msg
const msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : { text: c || '' }
}, {
quoted: m,
userJid: conn.user.id
}),
conn.reply(m.chat, `${text} Hola` || q.text, conn.user.jid, { mentions: users }), {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ðððĐðð―ðĪðĐ-ððŋ | ðððĐð ðŋððĪðĻ',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})
                      
//`${text} Hola` || q.text, conn.user.jid, { mentions: users })

await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = ['pengumuman', 'announce', 'hidetag'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(dinamica)$/i
handler.group = true
handler.admin = true 
export default handler
