require("dotenv").config({ path: __dirname + "/.env" });
const key = process.env["key"];
const secret = process.env["secret"];
const StreamChat = require("stream-chat").StreamChat;

// const key = 'xfyrhz6nwwxz'
// const secret = 'dmpt85ud2kfejnb9ymrwmfeya7ev43y29wcg2fa3vqca8mgs7xu66nsbmszmrkqk'

const test = async () => {
    const chatClient = new StreamChat(key, secret);
    const userID = "Ryan";
    const token = chatClient.createToken(userID);
    // server to client side code
    const set = await chatClient.connectUser({id: userID}, token);
    const channel = chatClient.channel('messaging', 'austin', { 
        name: 'austin', 
        members: ['Ryan', 'Stephen', 'Anders'],
    }); 
     
    await channel.create();  
    return channel
}

test().then((r) => console.log(r));