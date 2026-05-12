
const { ethers } = require("hardhat");

async function main() {
  const initialSupply = 100000000; 
  const MyToken = await ethers.getContractFactory("XToken");
  const instance = await MyToken.deploy(initialSupply);

  await instance.deployed();
  console.log("Deployed XToken address:", instance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
