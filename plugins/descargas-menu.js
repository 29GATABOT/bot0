import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  

const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀 | 𝘿𝙍𝙊𝙋-𝘿𝙊𝙒𝙉 𝙇𝙄𝙎𝙏`,
rows: [
{title: "❇️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 |  𝘿𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙 ❇️", description: null, rowId: `${usedPrefix}menu`},
{title: "✳️ 𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✳️", description: null, rowId: `${usedPrefix}allmenu`},
{title: "✅ 𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅", description: "𝙊𝘽𝙏𝙀𝙉 𝙈𝘼𝙎 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿\n𝙂𝙀𝙏 𝙈𝙊𝙍𝙀 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 𝙁𝙍𝙊𝙈 𝙂𝘼𝙏𝘼𝘽𝙊𝙏-𝙈𝘿", rowId: `${usedPrefix}cuentasgatabot`},
{title: "🚀 𝙄𝙢𝙖𝙜𝙚𝙣 𝙙𝙚 𝙂𝙤𝙤𝙜𝙡𝙚 | 𝙂𝙤𝙤𝙜𝙡𝙚 𝙄𝙢𝙖𝙜𝙚 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙄𝙈𝘼𝙂𝙀𝙉 𝘿𝙀 𝙂𝙊𝙊𝙂𝙇𝙀\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙄𝙈𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝙂𝙊𝙊𝙂𝙇𝙀", rowId: `${usedPrefix}imagen`},
{title: "🚀 𝙄𝙢𝙖𝙜𝙚𝙣 𝙙𝙚 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 | 𝙄𝙢𝙖𝙜𝙚 𝙛𝙧𝙤𝙢 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 🚀", description: "𝙋𝙐𝙀𝘿𝙀𝙎 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙄𝙈𝘼𝙂𝙀𝙉𝙀𝙎 𝘿𝙀 𝙋𝙄𝙉𝙏𝙀𝙍𝙀𝙎𝙏\n𝙔𝙊𝙐 𝘾𝘼𝙉 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙄𝙈𝘼𝙂𝙀𝙎 𝙁𝙍𝙊𝙈 𝙋𝙄𝙉𝙏𝙀𝙍𝙀𝙎𝙏", rowId: `${usedPrefix}pinterest`},
{title: "🚀 𝙄𝙢𝙖𝙜𝙚𝙣𝙚𝙨 𝙙𝙚 𝙁𝙤𝙣𝙙𝙤 | 𝙒𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝙄𝙈𝘼𝙂𝙀𝙎 𝘿𝙀 𝙁𝙊𝙉𝘿𝙊\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝘽𝘼𝘾𝙆𝙂𝙍𝙊𝙐𝙉𝘿 𝙄𝙈𝘼𝙂𝙀𝙎", rowId: `${usedPrefix}wallpaper`},
{title: "🚀 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 | 𝙋𝙡𝙖𝙮𝙨 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝙑𝙄𝘿𝙀𝙊𝙎 𝙊 𝘼𝙐𝘿𝙄𝙊𝙎 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙀𝙉𝙇𝘼𝘾𝙀 \n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙑𝙄𝘿𝙀𝙊𝙎 𝙊𝙍 𝘼𝙐𝘿𝙄𝙊𝙎 𝙐𝙎𝙄𝙉𝙂 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙍 𝙇𝙄𝙉𝙆", rowId: `${usedPrefix}play`},
{title: "🚀 𝘼𝙪𝙙𝙞𝙤𝙨 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 | 𝙋𝙡𝙖𝙮 𝘼𝙪𝙙𝙞𝙤 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝘼𝙐𝘿𝙄𝙊𝙎 𝙐𝙎𝘼𝙉𝘿𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝘼𝙐𝘿𝙄𝙊𝙎 𝙐𝙎𝙄𝙉𝙂 𝘼 𝙇𝙄𝙉𝙆", rowId: `${usedPrefix}yta`},
{title: "🚀 𝙑𝙞𝙙𝙚𝙤𝙨 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 | 𝙋𝙡𝙖𝙮 𝙑𝙞𝙙𝙚𝙤 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝙑𝙄𝘿𝙀𝙊𝙎 𝙐𝙎𝘼𝙉𝘿𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙑𝙄𝘿𝙀𝙊𝙎 𝙐𝙎𝙄𝙉𝙂 𝘼 𝙇𝙄𝙉𝙆", rowId: `${usedPrefix}ytv`},
{title: "🚀 𝙑𝙞𝙙𝙚𝙤𝙨 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 | 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙑𝙞𝙙𝙚𝙤 🚀", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝙑𝙄𝘿𝙀𝙊𝙎 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝘾𝙊𝙉 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙑𝙄𝘿𝙀𝙊𝙎 𝙁𝙍𝙊𝙈 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙒𝙄𝙏𝙃 𝘼 𝙇𝙄𝙉𝙆", rowId: `${usedPrefix}facebook`},
{title: "🚀 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 𝙙𝙚 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 | 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙨 💖", description: "𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 𝙑𝙄𝘿𝙀𝙊𝙎 𝙊 𝙄𝙈𝘼𝙂𝙀𝙉𝙀𝙎 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝘾𝙊𝙉 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀\n𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙑𝙄𝘿𝙀𝙊𝙎 𝙊𝙍 𝙄𝙈𝘼𝙂𝙀𝙎 𝙁𝙍𝙊𝙈 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙒𝙄𝙏𝙃 𝘼 𝙇𝙄𝙉𝙆", rowId: `${usedPrefix}instagram`},
{title: "🚀 𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤𝙨 | 𝙂𝙧𝙤𝙪𝙥 𝙇𝙞𝙨𝙩 🔰", description: "𝙑𝙄𝙎𝙐𝘼𝙇𝙄𝙕𝘼𝙍 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈\n𝙑𝙄𝙀𝙒 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙐𝙎𝙀𝙍", rowId: `${usedPrefix}igstalk`},
{title: "🚀 𝙀𝙨𝙩𝙖𝙙𝙤 | 𝙎𝙩𝙖𝙩𝙪𝙨 💡", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙀𝙎𝙏𝘼𝘿𝙊 𝙔 𝙈𝘼𝙎 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉\n𝙆𝙉𝙊𝙒 𝙈𝙔 𝙎𝙏𝘼𝙏𝙐𝙎 𝘼𝙉𝘿 𝙈𝙊𝙍𝙀 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉", rowId: `${usedPrefix}estado`},   
{title: "🚀 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙖 | 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙚 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 ⚜️", description: "𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙏𝘼𝙇𝙇𝘼𝘿𝘼\n𝘿𝙀𝙏𝘼𝙄𝙇𝙀𝘿 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉", rowId: `${usedPrefix}infogata`},    
{title: "🚀 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 𝙙𝙚 𝙢𝙞 𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 🪄", description: "𝙈𝙄 𝘾𝙍𝙀𝘼𝘿𝙊𝙍𝘼\n𝙈𝙔 𝘾𝙍𝙀𝘼𝙏𝙊𝙍", rowId: `${usedPrefix}creadora`},      
{title: "🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙋𝙞𝙣𝙜 🚀", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿\n𝙆𝙉𝙊𝙒 𝙈𝙔 𝙎𝙋𝙀𝙀𝘿", rowId: `${usedPrefix}ping`},    
{title: "🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙋𝙞𝙣𝙜 🚀", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿\n𝙆𝙉𝙊𝙒 𝙈𝙔 𝙎𝙋𝙀𝙀𝘿", rowId: `${usedPrefix}ping`},
{title: "🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙋𝙞𝙣𝙜 🚀", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿\n𝙆𝙉𝙊𝙒 𝙈𝙔 𝙎𝙋𝙀𝙀𝘿", rowId: `${usedPrefix}ping`},
{title: "🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙋𝙞𝙣𝙜 🚀", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿\n𝙆𝙉𝙊𝙒 𝙈𝙔 𝙎𝙋𝙀𝙀𝘿", rowId: `${usedPrefix}ping`},
{title: "🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙋𝙞𝙣𝙜 🚀", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿\n𝙆𝙉𝙊𝙒 𝙈𝙔 𝙎𝙋𝙀𝙀𝘿", rowId: `${usedPrefix}ping`},
{title: "🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙋𝙞𝙣𝙜 🚀", description: "𝘾𝙊𝙉𝙊𝘾𝙀 𝙈𝙄 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿\n𝙆𝙉𝙊𝙒 𝙈𝙔 𝙎𝙋𝙀𝙀𝘿", rowId: `${usedPrefix}ping`},
]}, ]
//let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)


const listMessage = {
text: `💗 *¡HOLA | HI!* ${username}`,
footer: `╭━━〔 *${wm}* 〕━━⬣
┃🪄🪄🪄🪄🪄🪄🪄🪄🪄
┃✪ *EXPERIENCIA | EXP ➺ ${exp}*
┃✪ *NIVEL | LEVEL ➺ ${level}*
┃✪ *ROL ➺ ${role}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *FECHA ➺ ${week}, ${date}*
┃✪ *USUARIOS | USERS ➺ ${Object.keys(global.db.data.users).length}* 
┃🪄🪄🪄🪄🪄🪄🪄🪄🪄
╰━━━━━━〔 𓃠 *${vs}* 〕━━━━━━⬣

╭━━〔 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 | 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙎 〕━━⬣
┃ *PRESIONE ESTE MENSAJE PARA IR AL MENÚ.*
┃ *PRESS THIS MESSAGE TO GO TO THE MENU.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🚀➺ _${usedPrefix}imagen | image *texto*_
┃🚀➺ _${usedPrefix}pinterest | dlpinterest *texto*_
┃🚀➺ _${usedPrefix}wallpaper|wp *texto*_
┃🚀➺ _${usedPrefix}play | play2 *texto o link*_
┃🚀➺ _${usedPrefix}play.1 *texto o link*_
┃🚀➺ _${usedPrefix}play.2 *texto o link*_ 
┃🚀➺ _${usedPrefix}ytmp3 | yta *link*_
┃🚀➺ _${usedPrefix}ytmp4 | ytv *link*_
┃🚀➺ _${usedPrefix}facebook | fb *link*_
┃🚀➺ _${usedPrefix}instagram *link video o imagen*_
┃🚀➺ _${usedPrefix}verig | igstalk *usuario(a)*_
┃🚀➺ _${usedPrefix}ighistoria | igstory *usuario(a)*_
┃🚀➺ _${usedPrefix}tiktok *link*_
┃🚀➺ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
┃🚀➺ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
┃🚀➺ _${usedPrefix}mediafire | dlmediafire *link*_
┃🚀➺ _${usedPrefix}clonarepo | gitclone *link*_
╰━━━━━━━━━━━━━━━━━━━━⬣
${wm}`,
title: null,
buttonText: "𝙋𝙍𝙀𝙎𝙄𝙊𝙉𝙀 𝘼𝙌𝙐Í | 𝙋𝙍𝙀𝙎𝙎 𝙃𝙀𝙍𝙀", 
sections }

await conn.sendMessage(m.chat, listMessage)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(descargasmenuu)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
