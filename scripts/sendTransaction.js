require('dotenv').config();
const { Relayer } = require('defender-relay-client');
const { API_KEY: apiKey, API_SECRET: apiSecret} = process.env;
const relayer = new Relayer({ apiKey, apiSecret });

const main = async () => {
const tx = await relayer.sendTransaction({
    to: '0xa8633D55cD7F116f20e80b6b6c2Ba597f7985f6D',
    value: '0x16345785d8a0000',
    data: '0x5af3107a',
    speed: 'fast',
    gasLimit: 100000,
  });

  console.log('tx = ', tx)
  return tx;
}

main();
