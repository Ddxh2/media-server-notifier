export const ping = (address, timeout) => {
  const interval = 100;
  const maxAttempts = Math.floor(timeout / interval) || 1;

  return new Promise(async (resolve) => {
    let currentAttempt = 0;
    while (currentAttempt < maxAttempts) {
      try {
        const response = await fetch(address);
        if (response.ok) {
          currentAttempt = maxAttempts;
          resolve(true);
        } else {
          throw new Error();
        }
      } catch (error) {
        await new Promise((r) => {
          setTimeout(r, interval);
        });
        currentAttempt += 1;
      }
    }
    if (currentAttempt === maxAttempts) resolve(false);
  });
};
