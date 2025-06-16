#!/usr/bin/env ts-node

import { Bot, InlineKeyboard, Keyboard } from "grammy";

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);

const keyboard = new Keyboard().requestChat("Choose chat", 111).oneTime();

bot.command("start", async (ctx) => {
  await ctx.reply("Hello!", {
    reply_markup: keyboard,
  });
});

bot.on("message:chat_shared", (ctx) => {
  //   console.log(ctx);
  if (ctx.update.message) {
    const chatId = ctx.update.message.chat_shared.chat_id;
    console.log({ chatId });
  }
});

bot.start();
