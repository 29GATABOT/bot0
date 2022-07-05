import fs from 'fs'
import MessageType from '@adiwajshing/baileys'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants }) => {
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m
let c = m.quoted ? m.quoted : m.msg
const msg = conn.cMod(m.chat,
generateWAMessageFromContent(m.chat, {
[c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
text: c || ''
}
}, {
quoted: m,
userJid: conn.user.id
}),
text || q.text, conn.user.jid, { mentions: users }
)
//await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id }

//await conn.relayMessage(m.chat, msg.message, m, {
//contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
//title: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨',
//body: 'Super Bot WhatsApp',         
//previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
//sourceUrl: `${yt}`}}})
  
conn.sendButton(m.chat, conn.relayMessage(msg.message) + { messageId: msg.key.id }, wm, fs.readFileSync('./src/avatar_contact.png'), 
[['🎁 𝙄𝙣𝙛𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡', '.cuentasgb'],
['🐈 𝙈𝙚𝙣𝙪', '.menu']], false, {
contextInfo: { externalAdReply: {
title: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨',
body: 'Super Bot WhatsApp', 
sourceUrl: `https://www.instagram.com/gata_dios`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})

}
handler.help = ['pengumuman', 'announce', 'hidetag'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(zeus)$/i
handler.group = true
handler.admin = true 
export default handler
