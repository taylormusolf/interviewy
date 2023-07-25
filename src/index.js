let proxy;
if(process.env.NODE_ENV === 'development'){
    proxy = 'https://localhost:5002'
}else{
    proxy = 'https://cors-proxy-serv-d5884527e532.herokuapp.com'
}

//

const messages = [];

const chatFetch = async(messages)=>{

    try{
        const res = await fetch(`${proxy}/chat`,{
            body: JSON.stringify(messages)
        });
        if(res.ok){
            const data = await res.json();

        } else {
            throw res;
        }

    }catch(err){
        console.error(err)
    }
    
}




// const getAiResponse = async (chatBot, chat, chatRequest) =>{
//     const openai = new OpenAIApi(new Configuration({
//       apiKey: process.env.CHAT_API_KEY
//     }));
//     const from = chatBot.from ? `from ${chatBot.from}` : '';
//     const prompt = chatBot.prompt ? `${chatBot.prompt}` : '';
//     const description = chatBot.description ? `${chatBot.description}` : '';
//     const greeting = chatBot.greeting ? {role:'assistant', content: chatBot.greeting} : {};
//     let systemPrompt = `You are ${chatBot.name} ${from}.  The user you are speaking with is ${chatRequest.name}. ${rules.join(' ')} ${description}. ${prompt}.`
//     let messages = [{role:'system', content: systemPrompt}, greeting, ...chat.messages, chatRequest]
  
//     const res = await openai.createChatCompletion({
//       model: "gpt-4",
//       // model: "gpt-3.5-turbo",
//       messages: messages,
//       max_tokens: 150,
//       temperature: 0.9
//     });
//     return res.data.choices[0].message
//   }