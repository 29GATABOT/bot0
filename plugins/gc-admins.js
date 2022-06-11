let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*𝙈𝙀𝙉𝙎𝘼𝙅𝙀:* ${pesan}`
let text = 
`╭━━[ *𝙄𝙉𝙑𝙊𝘾𝘼𝙉𝘿𝙊 𝘼𝘿𝙈𝙄𝙉𝙎* ]━━━⬣ 

${oi}

*𝙰𝙳𝙼𝙸𝙽𝚂:*
${listAdmin}

*[ ⚠ ️] 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙲𝚄𝙰𝙽𝙳𝙾 𝚂𝙴 𝚃𝚁𝙰𝚃𝙴 𝙳𝙴 𝚄𝙽𝙰 𝙴𝙼𝙴𝚁𝙶𝙴𝙽𝙲𝙸𝙰!!*
╰━━━━[ *𓃠 ${vs}* ]━━━⬣`.trim()

conn.sendHydrated(m.chat, text, wm, pp, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['otra vez',  `${usedPrefix + command} ${pesan}`],
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨', '/cuentasgb'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '.menu']
], m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

//conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['admins <texto>']
handler.tags = ['group']
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
