require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.12",
  settings: {
    allowUnlimitedContractSize: true,
    optimizer: {
      enabled: true,
      runs: 20,
      details: { yul: false },
    },
  },
  allowUnlimitedContractSize: true,
  networks: {
    localhost: {
      settings: {
        allowUnlimitedContractSize: true,
        optimizer: {
          enabled: true,
          runs: 2,
          details: { yul: false },
        },
      },
      url: process.env.NETWORK_RPC,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 20000000000,
      gas: 6000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000
    },

    goerli: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 2,
          details: { yul: false },
        },
      },
      url: process.env.NETWORK_RPC,
      accounts: [process.env.PRIVATE_KEY],
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000
    },
  },

  paths: {
    artifacts: "./smart_contract/artifacts",
    sources: "./smart_contract/contracts",
    cache: "./smart_contract/cache",
  },
};
