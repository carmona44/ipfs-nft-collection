const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
    const metadataURL = "ipfs://QmbbsBVRYxupGTDrLZ9HQuZwMFxLrMJiCEjUSHQGmuJ5sM/";

    const buenasChicasContract = await ethers.getContractFactory("BuenasChicas");

    const deployedBuenasChicasContract = await buenasChicasContract.deploy(metadataURL);

    await deployedBuenasChicasContract.deployed();

    console.log("BuenasChicas Contract Address:", deployedBuenasChicasContract.address);
    //0xF41823D6988D4FC31Cc652B1319357F5eA45a61C
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });