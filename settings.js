//═══════════════════════════════════════════════════════//
//                    💞 KING kaushitha 💞
//                              
//             
//       𝕊𝕣𝕚 𝕃𝕒𝕟𝕜𝕒 𝔹𝕖𝕤𝕥  𝕎𝕙𝕒𝕥𝕤𝕒𝕡𝕡 𝔹𝕆𝕋...
//
//════════════════════════════//


const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'TnFQSndzZzI=', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.owner = ['0768270859'] //your owner number
global.premium = ['0768270859'] //your Owner number in menu msg
global.ownernomer = '0768270859' //your owner number info

global.ownername = 'kaushitha' //your owner name
global.botname = '💞 KING kaushitha 💞' //your bot name    // ඔයා බොට්ගේ නම නම් වෙනස් කලාට වැඩක් නෑ... බොට්ගේ නම ( 💞 KING kaushitha 💞 ) තමයි...
global.footer = '💞 KING kaushitha 💞' 

global.ig = 'https://github.com/kawshithahirush/KING-Kaushitha-MD' //Github Account!
global.region = 'Sri Lanka'
global.sc = 'https://github.com/kawshithahirush/KING-Kaushitha-MD'
global.myweb = 'https://chat.whatsapp.com/IVgEIpFyVSLLWWetZUtU6o' //your chanal link
global.packname = '💞 KING kaushitha 💞'

global.alivemsgimage = 'https://wallpaperaccess.com/full/1585213.jpg' 'https://wallpaperaccess.com/full/1275101.jpg' // ඔයාගේ Alive massege එකට වැටෙන්න ඕන image එකක Link එකක් මෙතනට දෙන්න...

global.chatbotpre = "true"

global.author = '𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺:- Kaushitha hirush'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']                          // 👈 මේවා ඔයාට ඕන විදියට වෙනස් කර ගන්න \\ 
global.sp = '⭔'

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE .....👇
	
	
    success: 'හරි ✅',
    admin: 'උබට බෑ බං ඇඩ්මින්ට විතරයි පුලුවන්...!',
    botAdmin: 'ඔයා ඇඩ්මින් කෙනෙක් නෙවෙයි... !',
    owner: 'මට විතරයි මේක කරන්න පුලුවන්!',
    group: 'Groups වල විතරයි පුලුවන්...!',
    private: 'Private Chat වල විතරයි පුලුවන්...!',
    bot: 'මෙම විශේෂාංගය Bot සඳහා පමණි...',
    wait: 'පොඩ්ඩක් ඉන්න Wait ⏳ ...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
	
	
	
	
	 // මේවා වෙනස් කරන්න එපා .....👇 \\
	
	
	
}
    global.limitawal = {        
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./https://wallpaperaccess.com/full/1275101.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
