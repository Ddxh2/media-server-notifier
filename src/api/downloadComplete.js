import { discordService } from "../services/discordService.js";

export const downloadComplete = (expressApp) => {
  expressApp.post("/downloadComplete", async (req, res) => {
    const message = `Successfully downloaded: ${req?.body?.fileName || "N/A"}`;
    await discordService.sendDiscordMessage(message);
    res.send("Received download complete request");
  });

  return expressApp;
};
