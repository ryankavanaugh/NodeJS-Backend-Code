const StreamChat = require("stream-chat").StreamChat;

Dkey = 'sbpa4hs6h67q'
Dsecret = 'td96qy4ngfqj82zcbb6hmr2rx7yszjnypbsd9pnszgdhdkwnsq6yxnne64ngr3uu'


image = "https://d3jycsk0m72ya7.cloudfront.net/images/2022/8/12/Jensen_Jake.JPG?width=146"

const test = async () => {
    const chatClient = new StreamChat(Dkey, Dsecret);
    const userID = "AJ";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);

    const channel = chatClient.channel('messaging', 'HunterChan1',  { 
        name: 'Dave',
        members: ['Dave', 'Hunter'],
        image: image,
    }); 
     
    await channel.create();  
    return channel.id
}

test().then((r) => console.log(r));