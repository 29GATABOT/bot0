let handler = async (m, { conn }) => {
let emot = pickRandom(["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🤩", "🥰", "😘", "😊", "🥳", "😏", "😳", "🥵", "🤯", "😱", "😨", "🤫", "🥴", "🤧", "🤑", "🤠", "🤖", "👾", "🎃", "👻", "🤡", "🤝", "💪", "👑", "🥶", "😚", "🐱", "🐈", "🐆", "🐅", "💫", "⭐️", "🌟", "✨", "⚡️", "🌈", "☃️", "⛄️", "🌝", "🌛", "🌜", "🍓", "🍎", "🍭", "🍩", "🍫", "🍧", "🚀", "🚅", "🚄", "🎈", "🪄", "🪅", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "♓️", "♒️", "♑️", "♐️", "♏️", "♎️", "♍️", "♌️", "♋️", "🔯", "🕎", "☦️", "🛐", "⛎", "♈️", "♉️", "♊️", "✅", "🌝", "😎", "👻", "🔥", "🖕", "🐦"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
    	}
    })	
}
handler.customPrefix = /(bot|gatadios|dios|gatabot-md|gata dios|𝙎𝙚 𝙪𝙣𝙞𝙤 🥳 | 𝙃𝙞!!|gata - bot|gata-bot|gatabot|gata|gatabotmd|gata - bot md)/i
handler.command = new RegExp

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]} 
