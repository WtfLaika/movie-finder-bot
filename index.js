import TelegramBot from 'node-telegram-bot-api'
import * as doenv from 'dotenv'
import { getChatAnswer } from './getChatAnswer.js'

doenv.config()

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true })

const start = async () => {
  bot.setMyCommands([
    { command: '/start', description: 'Розпочати репортаж' },
  ])
  bot.on('message', async (message) => {
    try {
      const { text, chat: { id } } = message
      if (text === '/start') {
        await bot.sendMessage(id, 'Привіт, я чат бот який допомагає знайти фільм по опису. Запитай мене який фільм ти хочеш знайти')
        return
      }
      await bot.sendMessage(id, await getChatAnswer(text))
    } catch (e) {
      console.log('Error: ', e.message)
    }
  })
}

start()
