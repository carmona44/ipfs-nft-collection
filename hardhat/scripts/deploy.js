const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
    const metadataURL = "ipfs://QmbbsBVRYxupGTDrLZ9HQuZwMFxLrMJiCEjUSHQGmuJ5sM/";

    const buenasChicasContract = await ethers.getContractFactory("BuenasChicas");

    const deployedBuenasChicasContract = await buenasChicasContract.deploy(metadataURL);

    await deployedBuenasChicasContract.deployed();

    console.log("BuenasChicas Contract Address:", deployedBuenasChicasContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });