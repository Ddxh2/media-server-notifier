import { ping } from "../utils/ping.js";

export const monitorAddresses = async () => {
  const pingTimeout = 1000;
  const addresses = process.env.ADDRESSES_TO_MONITOR.split(",");
  const pings = await Promise.all(
    addresses.map((address) => ping(address, pingTimeout)),
  );

  const addressPings = {};

  for (let i = 0; i < addresses.length; i++) {
    addressPings[addresses[i]] = pings[i];
  }

  return addressPings;
};

export const monitorService = { monitorAddresses };
