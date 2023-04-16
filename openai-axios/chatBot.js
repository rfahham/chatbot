// npm install axios

const OPEN_API_KEY = ""

const GPT_URL = "https://api.openai.com/v1/engines/text-davinci-003/completions"
const axios = require('axios');
const headers = {
    'Content-type': 'application/json',
    'Authorization': "Bearer " + OPEN_API_KEY,
};

function perguntar(pergunta){
    const data = {
        prompt: pergunta,
        max_tokens: 200,
        temperature: 0.7,
    }

    axios.post(GPT_URL, data, {headers: headers})
        .then((response) => {
            console.log('Resposta do ChatGPT:',
                response.data.choices[0].text);
        });

}

perguntar("Qual é o melhor IDE para programaçãoo WEB?")