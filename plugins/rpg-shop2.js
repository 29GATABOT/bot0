const xpperlimit = 100
let handler = async (m, { conn, command, args, usedPrefix }) => {
  let count = command.replace(/^buy2/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    //conn.reply(m.chat, `
    let gata = `
╭━━〔 *DATOS DE COMPRA* 〕━━⬣
‣ *Compra Efectuada* : +${count} 💎 
‣ *Ha Gastado* :  -${xpperlimit * count} 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎
╰━━━━━〔 *𓃠 ${vs}* 〕━━━━⬣`.trim()
    
await conn.sendHydrated(m.chat, gata, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙂𝙍𝘼𝘾𝙄𝘼𝙎!', '.top'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
    
  } else //conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantes💎`, m)
  await conn.sendHydrated(m.chat, `No tiene sufuciente 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎 para comprar *${count}* Diamantes 💎\n\nLe recomiendo que interactúe con GataBot-MD para Obtener GataCoins, puede ver su experiencia con el comando ${usedPrefix}exp o ${usedPrefix}experiencia`, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
}
handler.help = ['Buy', 'Buyall']
handler.tags = ['xp']
handler.command = ['buy2', 'buyall2'] 

handler.disabled = false

export default handler
