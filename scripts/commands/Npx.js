module.exports.config = {
  name: "🙃", 
  version: "1.0.0", 
  permission: 0,
  credits: "Imran Ahmed_X_Mahabub Rahman",
  description: "example",
  prefix: false,
  category: "Fun", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["আমার প্রেমে পড়ার বয়স ছিলো না--!!😌😃\n\nশুধু একজোড়া চোখের দিকে তাকিয়ে অপরাধ করেছিলাম--!!🙂🤕\n\n\nMAHABUB_RAHMAN_۵ღ︵🩷🪽 ","⎯͢⎯⃝💜𝗕𝗯𝘇 𝗜𝘁,𝘀''''Tuni''''''🌺༉''-\n__ღ༎𝗙𝗲𝗲𝗹 𝘁𝗵𝗶𝘀 𝗺𝘆 𝗹𝗶𝗻𝗲 :)>(💜🌺\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎─༅༎༅💜🌺🩷༅༎༅─\n\n•⎯͢⎯⃝💜🪽🪄আমি ছন্নছাড়া বদমেজাজি নিজেও তা মানি,তুমি শুধু থেকে যাও আমি ভালোবাসতেও জানি •⎯͢⎯⃝💜🪽🪄\n\n─༅༎༅💚🌺💙༅༎༅─😇\n\n\nMAHABUB_RAHMAN_۵ღ︵🩷🪽 "];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?id=14rPSaCJzfNa8cc2pM-YJvE16bZVlH7pV","https://drive.google.com/uc?id=17585edZNLDIYMbxZzYy3Xtqny1xWL9Ud","https://drive.google.com/uc?id=178dOeRg7vxjkX3EKBgg9z-c82Vj24_fn"
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
