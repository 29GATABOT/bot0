global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let mat =`❕⊱𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 | 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉⊱❕\n\n✨ 𝙋𝙐𝙀𝘿𝙀 𝙐𝙎𝘼𝙍 𝙇𝙊𝙎 𝘽𝙊𝙏𝙊𝙉𝙀𝙎 𝙊 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙇𝘼 𝘿𝙄𝙁𝙄𝘾𝙐𝙇𝙏𝘼𝘿\n✨ 𝙔𝙊𝙐 𝘾𝘼𝙉 𝙐𝙎𝙀 𝙏𝙃𝙀 𝘽𝙐𝙏𝙏𝙊𝙉𝙎 𝙊𝙍 𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝘿𝙄𝙁𝙁𝙄𝘾𝙐𝙇𝙏𝙔

𝙉𝙄𝙑𝙀𝙇 𝘿𝙀 𝘿𝙄𝙁𝙄𝘾𝙐𝙇𝙏𝘼𝘿 | 𝘿𝙄𝙁𝙁𝙄𝘾𝙐𝙇𝙏𝙔 
${Object.keys(modes).join('  |  ')}

𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀
${usedPrefix + command} noob
${usedPrefix + command} impossible2

😼 𝙈𝙄𝙀𝙉𝙏𝙍𝘼𝙎 𝙈𝘼𝙎 𝘿𝙄𝙁𝙄𝘾𝙐𝙇𝙏𝘼𝘿 𝙈𝘼𝙔𝙊𝙍 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼
😼 𝙈𝙊𝙍𝙀 𝘿𝙄𝙁𝙁𝙄𝘾𝙐𝙇𝙏𝙔 𝙔𝙊𝙐 𝘾𝘼𝙉 𝙂𝙀𝙏 𝙏𝙃𝙀 𝙂𝙍𝙀𝘼𝙏𝙀𝙍 𝙍𝙀𝙒𝘼𝙍𝘿
`.trim()
if (args.length < 1) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['😋 𝙁𝙖𝙘𝙞𝙡 | 𝙀𝙖𝙨𝙮', `${usedPrefix + command} easy`], 
['😎 𝘿𝙞𝙛𝙞𝙘𝙞𝙡 | 𝙃𝙖𝙧𝙙', `${usedPrefix + command} hard`], 
['🤑 𝙀𝙭𝙩𝙧𝙚𝙢𝙤 | 𝙀𝙭𝙩𝙧𝙚𝙢𝙚', `${usedPrefix + command} extreme`]], m)
  
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['😋 𝙁𝙖𝙘𝙞𝙡 | 𝙀𝙖𝙨𝙮', `${usedPrefix + command} easy`], 
['😎 𝘿𝙞𝙛𝙞𝙘𝙞𝙡 | 𝙃𝙖𝙧𝙙', `${usedPrefix + command} hard`], 
['🤑 𝙀𝙭𝙩𝙧𝙚𝙢𝙤 | 𝙀𝙭𝙩𝙧𝙚𝙢𝙚', `${usedPrefix + command} extreme`]], m)
  
let id = m.chat
if (id in global.math) return conn.reply(m.chat, `${ag} 𝙃𝘼𝙔 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼𝙎 𝙎𝙄𝙉 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝙀𝙉 𝙀𝙇 𝘾𝙃𝘼𝙏!!\n\n𝙏𝙃𝙀𝙍𝙀 𝘼𝙍𝙀 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉𝙎 𝙒𝙄𝙏𝙃𝙊𝙐𝙏 𝘼𝙉𝙎𝙒𝙀𝙍𝙄𝙉𝙂 𝙄𝙉 𝙏𝙃𝙀 𝘾𝙃𝘼𝙏!!`, global.math[id][0])
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `𝘾𝙪𝙖𝙡 𝙚𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚 *${math.str} = ?*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙏𝙞𝙚𝙢𝙥𝙤 | 𝙏𝙞𝙢𝙚
🧭 *${(math.time / 1000).toFixed(0)} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙚 𝙖 𝙚𝙨𝙩𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙮 𝙂𝙖𝙣𝙖 
🏆 *${math.bonus} 𝙓𝙋*
dia ${math.dia}`, m),
math, 4,
  
await conn.sendHydrated(m.chat, `⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆`, `𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝘼𝙍𝙍𝙄𝘽𝘼 𝘾𝙊𝙉 𝙇𝘼 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼\n\n𝘼𝙉𝙎𝙒𝙀𝙍 𝙏𝙃𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝘼𝘽𝙊𝙑𝙀 𝙏𝙊 𝙆𝙉𝙊𝙒 𝙔𝙊𝙐𝙍 𝘼𝙉𝙎𝙒𝙀𝙍`, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [ 
['𝙏𝙤𝙥𝙨 | 𝙍𝙖𝙣𝙠𝙞𝙣𝙜 🏆', `${usedPrefix}top`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `${usedPrefix}menu`]
], m), math, 4,
  
setTimeout(() => { 
if (global.math[id]) conn.sendButton(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙴 𝙰𝙷 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝙰𝚁𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁*\n\n*𝙻𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙴𝚂 ${math.result}*`, author, null, [['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁', `${usedPrefix + command} ${math.mode}`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math|mates|matemáticas/i
export default handler

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 10], 
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 5000]
} 

let diamantes = {
noob: [-3, 3,-3, 3, '+-', 15000, 10], 
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 5000]
} 

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

// XP
function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

// Diamantes
function genMath(mod) {
let [aa1, aa2, bb1, bb2, ops, time, dia] = diamantes[mod]
let aa = randomInt(aa1, aa2)
let bb = randomInt(bb1, bb2)
let op = pickRandom([...ops])
let result = (new Function(`return ${aa} ${op.replace('/', '*')} ${bb < 0 ? `(${bb})` : bb}`))()
if (op == '/') [aa, result] = [result, aa]
return {
str: `${aa} ${operators[op]} ${bb}`,
mode,
time,
dia,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
