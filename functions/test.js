const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-Oyoa0o8GqjpBw4Bbhb5ek8ou",
    apiKey: "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" //process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
async function runCompletion () {
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "How are you today?",
          });
          console.log(completion.data.choices[0].text);

    }
    catch (error) {
        console.log(error);
    }
   
}
runCompletion();
