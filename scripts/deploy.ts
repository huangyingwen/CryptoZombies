import { ethers } from "hardhat";

async function main() {
  const cryptoZombies = await ethers.deployContract("CryptoZombies");
  await cryptoZombies.waitForDeployment();
  console.log(`crypto zombies`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
