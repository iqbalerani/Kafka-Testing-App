const retry = async (fn, retries = 3) => {
  while (retries > 0) {
    try {
      return await fn();
    } catch (err) {
      retries -= 1;
      console.log(`Retrying... attempts left: ${retries}`);
      if (retries === 0) throw err;
    }
  }
};

module.exports = { retry };
