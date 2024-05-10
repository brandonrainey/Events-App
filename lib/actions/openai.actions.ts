'use server'

import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const generateResponse = async (prompt: string) =>
  await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are an Event Organzier who turns descriptions of an event into captivating format(use bullet points if applicable).',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 1,
    max_tokens: 180,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })

export default generateResponse
