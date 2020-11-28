require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');

const privateKey = process.env.PRIVATE_KEY;
const infuraKey = process.env.INFURA_KEY;


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  mocha: { timeout: 2000000 },
  networks: {
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraKey}`,
      accounts: [`0x${privateKey}`],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraKey}`,
      accounts: [`0x${privateKey}`],
      gasPrice: 20000000000,
    },
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
    },
  },
  // TODO: there is an unexpected case when tries to verify contracts, so do not use it at now!!!
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
