export const addressPingsToMessage = (addressPings) => {
  const messageLines = ["Successfully started Notifier"];

  Object.entries(addressPings).forEach((entry) => {
    const [address, pingResponse] = entry;

    const addressName = address.split("//")[1].split(":")[0];
    const capitalisedAddressName =
      addressName[0].toUpperCase() + addressName.slice(1, addressName.length);
    messageLines.push(
      `${pingResponse ? "Successfully started" : "Failed to start"} ${capitalisedAddressName}`,
    );
  });

  return messageLines.join("\n");
};
