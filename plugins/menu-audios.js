const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/menus/Menu1.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
//let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let str = `
╭══〘 🐈⚡️🐈⚡️🐈⚡️🐈 〙══╮    
⎪ *_ミ💖 ¡Hola! ${username} 💖彡_*
⎪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
⎪ *MENU DE AUDIOS*
⎪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
⎪ ✢ Solo escriba la palabra/frase. sin prefijo ⎪ (/ . # etc...) 
⎪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
⎪➫🔊 _Noche de paz_
⎪➫🔊 _Buenos dias_
⎪➫🔊 _Audio hentai_
⎪➫🔊 _Fiesta del admin_
⎪➫🔊 _Fiesta del admin 2_
⎪➫🔊 _Fiesta del administrador_ 
⎪➫🔊 _Viernes_
⎪➫🔊 _Mierda de Bot_
⎪➫🔊 _Me olvidé_
⎪➫🔊 _Baneado_
⎪➫🔊 _Feliz navidad_
⎪➫🔊 _A nadie le importa_
⎪➫🔊 _Sexo_
⎪➫🔊 _Vete a la vrg_
⎪➫🔊 _Ara ara_
⎪➫🔊 _Hola_
⎪➫🔊 _Un pato_
⎪➫🔊 _Nyanpasu_
⎪➫🔊 _Te amo_
⎪➫🔊 _Yamete_
⎪➫🔊 _Te diagnostico con gay_
⎪➫🔊 _Quien es tu sempai botsito 7w7_
⎪➫🔊 _Bañate_
⎪➫🔊 _Vivan los novios_
⎪➫🔊 _Marica quien_
⎪➫🔊 _Es puto_
⎪➫🔊 _La biblia_
⎪➫🔊 _Onichan_
⎪➫🔊 _Bot puto_
⎪➫🔊 _Feliz cumpleaños_
⎪➫🔊 _Pasa pack Bot_
⎪➫🔊 _Atencion grupo_
⎪➫🔊 _Homero chino_
⎪➫🔊 _Oh me vengo_
⎪➫🔊 _Murio el grupo_
⎪➫🔊 _Siuuu_
⎪➫🔊 _Rawr_
⎪➫🔊 _UwU_
⎪➫🔊 _:c_
⎪➫🔊 _a_
⎪➫🔊 _Hey_
⎪➫🔊 _Enojado_
⎪➫🔊 _Enojada_
⎪➫🔊 _Chao_
⎪➫🔊 _Hentai_
⎪➫🔊 _Triste_
⎪➫🔊 _Estoy triste_
⎪➫🔊 _Me pican los cocos_
⎪➫🔊 _Contexto_
⎪➫🔊 _Me voy_
⎪➫🔊 _Tengo los calzones del admin_
⎪➫🔊 _Entrada épica_ 
⎪➫🔊 _Esto va ser épico papus_
⎪➫🔊 _Ingresa épicamente_
⎪➫🔊 _Bv_
⎪➫🔊 _Yoshi_
⎪➫🔊 _No digas eso papu_
⎪➫🔊 _Ma ma masivo_
⎪➫🔊 _Masivo_
⎪➫🔊 _Basado_
⎪➫🔊 _Basada_
⎪➫🔊 _Fino señores_
⎪➫🔊 _Verdad que te engañe_
⎪➫🔊 _Sus_
⎪➫🔊 _Ohayo_
⎪➫🔊 _La voz de hombre_
⎪➫🔊 _Pero esto_
⎪➫🔊 _Bien pensado Woody_
⎪➫🔊 _Jesucristo_
⎪➫🔊 _Wtf_
⎪➫🔊 _Una pregunta_
⎪➫🔊 _Que sucede_
⎪➫🔊 _Hablame_
⎪➫🔊 _Pikachu_
⎪➫🔊 _Niconico_
⎪➫🔊 _Yokese_
⎪➫🔊 _Omaiga_
⎪➫🔊 _Nadie te preguntó_
⎪➫🔊 _Bueno si_
⎪➫🔊 _Usted está detenido_
⎪➫🔊 _No me hables_
⎪➫🔊 _No chu_
⎪➫🔊 _El pepe_
⎪➫🔊 _Pokémon_
⎪➫🔊 _No me hagas usar esto_
⎪➫🔊 _Esto va para ti_
⎪➫🔊 _Abduzcan_
⎪➫🔊 _Joder_
⎪➫🔊 _Hablar primos_
⎪➫🔊 _Mmm_
⎪➫🔊 _Orale_
⎪➫🔊 _Me anda buscando anonymous_
⎪➫🔊 _Blackpink in your area_
⎪➫🔊 _Cambiate a Movistar_
⎪➫🔊 _Momento equisde | Momento XD_
⎪➫🔊 _Todo bien | 😇_
⎪➫🔊 _Te gusta el Pepino | 🥒_
⎪➫🔊 _El tóxico_
⎪➫🔊 _Moshi moshi_
⎪➫🔊 _Calla Fan de BTS_
⎪➫🔊 _Que tal grupo_
⎪➫🔊 _Muchachos_
⎪➫🔊 _Está Zzzz | 😴_
⎪➫🔊 _Goku Pervertido_
⎪➫🔊 _Potaxio | 🥑_
⎪➫🔊 _Nico nico_
⎪➫🔊 _El rap de Fernanfloo_
⎪➫🔊 _Tal vez_
⎪➫🔊 _Corte corte_
⎪➫🔊 _Buenas noches_
⎪➫🔊 _Porque ta tite_
⎪➫🔊 _Eres Fuerte_
⎪➫🔊 _Bueno Master | 🫂_
⎪➫🔊 _No Rompas más | 💔_
⎪➫🔊 _Traiganle una falda_
⎪➫🔊 _Se están riendo de mí_
⎪➫🔊 _Su nivel de pendejo_
⎪➫🔊 _Bienvenido/a | 🥳 | 🤗 | 👋_
⎪➫🔊 _Elmo sabe donde vives_
⎪➫🔊 _tunometecabrasaramambiche_
⎪➫🔊 _Y este quien es_
⎪➫🔊 _Motivación_
⎪➫🔊 _En caso de una investigación_
⎪➫🔊 _Buen día grupo | 🙌_
⎪➫🔊 _Las reglas del grupo_
╰══〘 🐈⚡️🐈⚡️🐈⚡️🐈 〙══╯

╭════• ೋ•✧๑♡๑✧•ೋ •════╮
                      🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈
         0:40 ━❍──────── -8:39
         ↻     ⊲  Ⅱ  ⊳     ↺
         VOLUMEN: ▁▂▃▄▅▆▇ 100%
╰════• ೋ•✧๑♡๑✧•ೋ •════╯
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 ⚡', '#menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
