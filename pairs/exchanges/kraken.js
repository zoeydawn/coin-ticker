const axios = require('axios');

const assetAlts = {
  'XBT': 'BTC',
  'XBT.d': 'BTC.d',
}

const format = (asset) => {
  return assetAlts[asset] || asset;
}

const trimXAndZ = (asset) => {
  let trimmedAsset = asset;
  if (trimmedAsset.length > 3) {
    trimmedAsset = trimmedAsset[0] === 'X' ? trimmedAsset.substr(1) : trimmedAsset;
    const lastChar = trimmedAsset[trimmedAsset.length - 1];
    trimmedAsset = lastChar === 'Z' || lastChar === 'X' ? trimmedAsset.substr(0, trimmedAsset.length-1) : trimmedAsset;
  }
  return format(trimmedAsset);
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

        return trimXAndZ(first) + '_' + format(second);
      }).filter((pair) => (
        !pair.includes('.')
      ));
    })
    .catch((err) => {
      console.error('Error fetching kraken pairs:', err);
    });
}
