import { DiscordBot } from "../utils/discord.js";

const sendDiscordMessage = async (message) => {
  const discordBot = new DiscordBot();
  await discordBot.setUp();
  discordBot.sendMessage(message);
};

export const discordService = { sendDiscordMessage };
