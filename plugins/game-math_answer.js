global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  
  let gata = {
noob: [-3, 3,-3, 3, '+-', 15000, 10], 
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 5000]
} 
  
let id = m.chat
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^𝘾𝙪𝙖𝙡 𝙚𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return conn.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚂𝙴 𝙰𝙷 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙸𝙳𝙾 𝙰 𝙴𝚂𝙰 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰*', author, null, [['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙹𝚄𝙶𝙰𝚁', '/mates']], m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
let money0 = global.db.data.users[m.sender].money += gata
if (m.text == math.result) {
  if (math.mode == money0) {
 
conn.sendButton(m.chat, `*𝚁𝙴𝚂𝙿𝚄𝙴𝚂 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰!!*\n*𝙷𝙰𝚉 𝙶𝙰𝙽𝙰𝙳𝙾: ${math.bonus} 𝚇𝙿*\bono ${money0}`, author, null, [['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙹𝚄𝙶𝙰𝚁', `/math ${math.mode}`]], m)}
global.db.data.users[m.sender].exp += math.bonus

clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
conn.sendButton(m.chat, `*𝚂𝙴 𝙰𝙲𝙰𝙱𝙰𝚁𝙾𝙽 𝚃𝚄𝚂 𝙾𝙿𝙾𝚁𝚃𝚄𝙽𝙸𝙳𝙰𝙳𝙴𝚂*\n*𝙻𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙴𝚂: ${math.result}*`, author, null, [['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙹𝚄𝙶𝙰𝚁', `/math ${math.mode}`]], m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `*𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰!!*\n*𝙰𝚄𝙽 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂 ${global.math[id][2]} 𝚘𝚙𝚘𝚛𝚝𝚞𝚗𝚒𝚍𝚊𝚍𝚎𝚜*`, m)
}}}

handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0
export default handler
