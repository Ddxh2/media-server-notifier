import Discord from "discord.js";

export class DiscordBot {
  constructor() {}

  async setUp() {
    return new Promise((resolve) => {
      this.bot = new Discord.Client({
        intents: [
          Discord.GatewayIntentBits.Guilds,
          Discord.GatewayIntentBits.GuildMessages,
        ],
      });

      this.bot.login(process.env.DISCORD_TOKEN);

      this.bot.on("clientReady", () => {
        this.bot.channels.cache.forEach((value) => {
          if (
            value.type === Discord.ChannelType.GuildText &&
            value.name.toLowerCase() === process.env.DISCORD_CHANNEL_NAME
          ) {
            this.textChannel = value;
          }
        });
        resolve();
      });
    });
  }

  tearDown() {
    this.bot.destroy();
  }

  sendMessage(message) {
    this.textChannel.send(message);
  }
}
