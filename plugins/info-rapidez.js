let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `${eg}*_COMENZANDO PRUEBA DE VELOCIDAD..._*\n*_STARTING SPEED TEST..._*`.trim()
  m.reply(txt)

m.reply('🚀')
m.reply('🚀🚀')
m.reply('🚀🚀🚀')
m.reply(`${rg}\n\n*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)
}
handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad)$/i
export default handler
