const axios = require('axios');

const assetAlts = {
  'XBT': 'BTC',
  'XBT.d': 'BTC.d',
}

const format = (asset) => {
  return assetAlts[asset] || asset;
}

module.exports = () => {
  return axios.get('https://api.kraken.com/0/public/AssetPairs')
    .then((res) => {
      const pairArr = Object.keys(res.data.result);
      return pairArr.map((pair) => {
        const first = pair.slice(0, -3);
        const second = pair.includes('.')
          ? pair.substr(pair.length - 5)
          : pair.substr(pair.length - 3);

        return format(first) + '_' + format(second);
      });
    })
    .catch((err) => {
      console.error('Error fetching kraken pairs:', err);
    });
}
