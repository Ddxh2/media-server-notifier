import { discordService } from "../services/discordService.js";
import { monitorService } from "../services/monitorService.js";
import { addressPingsToMessage } from "../utils/addressPingsToMessage.js";

export const ready = (expressApp) => {
  expressApp.listen(process.env.NOTIFIER_PORT, async (_) => {
    console.log("Listening");
    const addressPings = await monitorService.monitorAddresses();
    await discordService.sendDiscordMessage(
      addressPingsToMessage(addressPings),
    );
  });
  return expressApp;
};
