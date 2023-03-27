const axios = require('axios');

module.exports = (blockHash) => {
  return axios({
    url: `https://blockchain.info/rawblock/` + blockHash,
    method: 'GET',
  });
};
