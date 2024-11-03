require('@nomicfoundation/hardhat-toolbox')
require('hardhat-waffle')
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.27',
  paths: {
    artifacts: './artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    cardona: {
      url: 'https://polygonzkevm-cardona.g.alchemy.com/v2/ss9270TQps48RQe2Yei2Ssj5j5vvwnmb',
    },
  },
}
