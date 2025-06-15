#!/usr/bin/env ts-node

import { Bot } from "grammy";

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);

bot.on("message:text", (ctx) => {
//   console.log(ctx);
  ctx.reply("Echo: " + ctx.message.text);
});

bot.start();
