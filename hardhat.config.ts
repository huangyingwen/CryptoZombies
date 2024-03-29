import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = "egu/Px68QFSUyK8/H1yXxjWnroK8umexglPhp3IzfwTb7S0cxx4pqg";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY =
  "fa0ac5d26b3ff596c9ba9df468cf0bf3754e4f1fe9ba9e93ad5ff8059ca74a76";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  etherscan: {
    apiKey: "ABCDE12345ABCDE12345ABCDE123456789",
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};

export default config;
