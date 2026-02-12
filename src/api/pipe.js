import { discordService } from "../services/discordService.js";

export const pipe = (expressApp) => {
  expressApp.post("/pipe", async (req, res) => {
    const { listening } = req.body;
    const message = listening ? "Listening to Pipe" : "Connection to Pipe lost";
    await discordService.sendDiscordMessage(message);
    res.send("Received pipe request");
  });

  return expressApp;
};
