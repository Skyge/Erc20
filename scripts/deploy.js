require("dotenv").config();
const hre = require("hardhat");

const tokenName = process.env.TOKEN_NAME;
const tokenSymbol = process.env.TOKEN_SYMBOL;

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    // deploy ERC20 token contract.
    const Token = await hre.ethers.getContractFactory("ERC20PresetMinterPauserUpgradeable");
    const token = await upgrades.deployProxy(Token, [tokenName, tokenSymbol], {
        unsafeAllowCustomTypes: true,
        initializer: "initialize",
    });

    console.log("Token contract address is: ", token.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});
