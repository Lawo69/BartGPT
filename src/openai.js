import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: "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",dangerouslyAllowBrowser: true});

export async function sendMsgToOpenAI(message) {
    const completion = await openai.completions.create({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0
    });
    return completion.choices[0].text;
}