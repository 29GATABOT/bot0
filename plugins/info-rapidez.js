let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `${eg}*_COMENZANDO PRUEBA DE VELOCIDAD..._*\n*_STARTING SPEED TEST..._*`.trim()
  m.reply(txt)

m.reply('🚀')
m.reply('🚀🚀')
m.reply('🚀🚀🚀')
 
const templateButtons = [
{index: 1, urlButton: {displayText: 'URL 1', url: link}},
{index: 2, urlButton: {displayText: 'URL 2', url: link}},
{index: 3, quickReplyButton: {displayText: 'Boton 1', id: '#comando 1'}},
{index: 4, quickReplyButton: {displayText: 'Boton 2', id: '#comando 2'}},
{index: 5, quickReplyButton: {displayText: 'Boton 3', id: '#comando 3'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons
}
conn.sendMessage(m.chat, tm, m)
}
// let veloz = `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`.trim() 
//conn.sendButton(m.chat, `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`, wm, veloz, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', /${command}]], m)
                                               
//m.reply(`${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)

 

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad)$/i
export default handler
