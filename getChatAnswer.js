import { Configuration, OpenAIApi } from 'openai';
import * as doenv from 'dotenv'

doenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getChatAnswer = async (text) => {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: 'You are a film critic. Your job is to find the most suitable movie according to the description' },
      { role: 'user', content: text }],
    temperature: 0.5,

  });
  return completion.data.choices[0].message.content
}
