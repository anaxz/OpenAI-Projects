const API_KEY = "api key here or make separate file";

async function fetchData(){
    // url = fetch the model type we want to use
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        // this body object will hold everything that you want to pass into OpenAI
        // max_tokens is optional
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "Hello how are you today?",
            max_tokens: 7
        })
    })
    const data = await response.json()
    console.log(data)
}

// fetchData()

async function fetchData2(){
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        // this body object will hold everything that you want to pass into OpenAI
        // max_tokens is optional
        body: JSON.stringify({
            model: "gpt-4",
            // messages takes an array of objects in specific chat format to generate chat completions
            messages: [{
                role: "user",
                content: "Hello!"
            }]
        })
    })
    const data = await response.json()
    console.log(data)
}

fetchData2()