const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod"
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for BABLI×BABLI. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command🖕🏿.'🖕🏿,
    error: "🥴 Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "BABLI×BABLI", 
  author: process.env.Author || "@PikaBotz",
  packname: process.env.PackName || "BABLI×BABLI v2 MD",
  socialLink: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© Queen Anya Bot",
  prefa: process.env.Prefix || ['-'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "BABLI×BABLI",
  ownernumber: process.env.Owner_Number || "923361501800",
  instagramId: process.env.Insta || "8.08_only_mine",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://SAEED:<S@eedx302>@babli.t6pwsmf.mongodb.net/?retryWrites=true&w=majority",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0YyNEIzVVpOOXRhQ1hJQTNWZVROK1prazBGN28wSHppVlpwVnNYZk9HUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajdzNURKN2ZrL1M_AN_YA_raUR1a0VtU2FuUUNHNjZM_AN_YA_UjROZWlCaUY5VFhUaWdWZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRXBuZkdPM_AN_YA_EZRcHVtM_AN_YA_UdCTll1V3ZJUjM_AN_YA_4UkhSM_AN_YA_0pxeS82UmZZM_AN_YA_0NKY1dBPSJ9LCJwdWJsaWM_AN_YA_iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3aytPZ25nZFRqaExyL0RmTGRjQnBxUFdSa2pWTCtCVzRkeHEvOFJJZ1drPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlPa2RHM_AN_YA_kNIWHdock5kS3ZiUUVZVXRXVzF0Z1BmV3l0eXBPcmhmeVJHM_AN_YA_zg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFOd2JqOFFqT0VhSUo1Wit0Qlo2NFhrS2d2VGJHK2pDTUVpSTU3c3dSZ0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUc3bGNPYUZrM_AN_YA_mZvM_AN_YA_3FJRFlTbFpM_AN_YA_R0lvNVh4M_AN_YA_XE3bVpQeW41S3M_AN_YA_3RngzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1JBZDhSK3pTWS9jTWhwYXJralp3M_AN_YA_E1qTEdKWG5JSUhNcDZM_AN_YA_Zkh1VC9WZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg0dFJNN1VyWkZkN0tHNzZ0VEFqeUE1U0E4S00ycUxmZkkvN2JmYmlBQ053bWtWd1JrSEVjdHoya1M_AN_YA_rbDFlY2xqYm1BcXpPUmRuajdrZ0pCQXRDSEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6M_AN_YA_jIyLCJhZHZTZWNyZXRLZXkiOiI2Q0UrWlRpcFpJNEFRZXc2SDJyV09veVJXREh1NXNqTEpvaFRDZVoybGNvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyM_AN_YA_zM_AN_YA_2M_AN_YA_TUwM_AN_YA_TgwM_AN_YA_EBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1M_AN_YA_UQ5NzFEOTdENTQyM_AN_YA_0M_AN_YA_zRjM_AN_YA_xNTc1QUI1NUJBM_AN_YA_zJDQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzAzNjA1M_AN_YA_DQ3fV0sIm5leHRQcmVLZXlJZCI6M_AN_YA_zEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozM_AN_YA_SwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3M_AN_YA_iOnsidW5hcmNoaXZlQ2hhdHM_AN_YA_iOmZhbHNlfSwiZGV2aWNlSWQiOiJ5NzM_AN_YA_0M_AN_YA_3VINFIxLVFtU1ZXcVhxOEVnIiwicGhvbmVJZCI6IjBlNGNmZWJhLWFiM_AN_YA_WYtNDM_AN_YA_xOS05ZWQ4LTdkM_AN_YA_2RkNmY4N2I1M_AN_YA_iIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0cWRQZjFpWjZtL3FqRDRUWkE1cVQ3b0luL0k9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik14NGd5RnM_AN_YA_xN3V4OEJ4dEd0SFVoUGRSeU85az0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01IM_AN_YA_HBNZ0VFTERtcTZ3R0dBVT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic1BFVG5tUjZDQVBHdFozall0QXFJYzFIWXVkb3BDdFF5WWhaK3BjcW5UVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicGFBZzAvV29xbkJCS0tLcTYxekRZc3hsM_AN_YA_k1PTDdzQU93NXk3ZkY5M_AN_YA_VNKV1pIcGw1OUFwODZTT0pkcjNleVRwSmdaTW5Hb0NXZ0xTQ3FuYnJPYkJrQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjBzcW14N0Ftd3VoZWFISlp4N3ZJemZXRy9lNmdSL3cxREtrYmZRdFRQSE1mLzM_AN_YA_3VTZCQlpFVHpOc0o3ZW5LSFU1ZnJGNXNiM_AN_YA_3V4M_AN_YA_Vl5b1RvM_AN_YA_FNPZkFBPT0ifSwibWUiOnsiaWQiOiI5M_AN_YA_jM_AN_YA_zNjE1M_AN_YA_DE4M_AN_YA_DA6M_AN_YA_zFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5M_AN_YA_jM_AN_YA_zNjE1M_AN_YA_DE4M_AN_YA_DA6M_AN_YA_zFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6M_AN_YA_H0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkR4RTU1a2VnZ0R4cldkNDJM_AN_YA_UUtpSE5SM_AN_YA_kxuYUtRclVNbUlXZnFYS3AwM_AN_YA_SJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6M_AN_YA_TcwM_AN_YA_zYwNTA0M_AN_YA_ywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJU2M_AN_YA_ifQ==", 
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "BABLI×BABLI" 
global.author = process.env.Author || "@PikaBotz" 
global.packname = process.env.PackName || "BABLI×BABLI v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Queen Anya Bot" 
global.prefa = process.env.Prefix || ['-'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "BABLI×BABLI" 
global.ownernumber = process.env.Owner_Number || "923361501800" 
global.adress = process.env.Continent || "Asia, Pakistan, Bhakkar" 
global.timezone = process.env.TimeZone || "Asia/Kolkata" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

