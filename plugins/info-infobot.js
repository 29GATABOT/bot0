import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let pp = './media/menus/Menu1.jpg'
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╭━━━━[ ${gt} ]━━━━━⬣
┃
┃➥ *CREADORA | CREATOR*
┃ღ *𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *CONTACTO | CONTACT* 
┃ღ *${ig}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃𓃠 *VERSIÓN ACTUAL | VERSION*
┃ღ ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *PREFIJO | PREFIX*
┃ღ *${usedPrefix}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *CHATS PRIVADOS | PRIVATE CHAT*
┃ღ *${chats.length - groups.length}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *CHATS DE GRUPOS | GROUP CHAT*
┃ღ *${groups.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *CHATS EN TOTAL | TOTAL CHATS*
┃ღ *${chats.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *ACTIVIDAD | ACTIVITY*
┃ღ *${uptime}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *USUARIOS | USERS*
┃ღ *${totalreg} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *VELOCIDAD | SPEED*
┃ღ  *${speed}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *AUTOREAD*
┃ღ ${autoread ? '*activado | active*' : '*desactivado | disabled*'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *RESTRICT* 
┃ღ ${restrict ? '*activado | active*' : '*desactivado | disabled*'} 
┃
╰━━━[ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 ]━━⬣`.trim()

conn.sendHydrated(m.chat, info, wm, pp, 'https://github.com/GataNina-Li/GataBot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '/donasi'],
['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '/owner'],
['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']
], m,)
//conn.reply(m.chat, info, m)
}
handler.help = ['infobot']
handler.tags = ['info', 'tools']
handler.command = /^(infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
