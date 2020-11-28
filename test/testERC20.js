const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20 Token", function () {
    let token;
    let deployer;
    let users, user1, user2;

    before(async function () {
        [deployer, ...users] = await ethers.getSigners();
        user1 = users[0];
        user2 = users[1];

        const Token = await ethers.getContractFactory("ERC20PresetMinterPauserUpgradeable");
        token = await upgrades.deployProxy(Token, ["Test Token", "TT"], {
            unsafeAllowCustomTypes: true,
            initializer: "initialize",
        });
    });

    it("Should mint token", async function () {
        const mintAmount = ethers.utils.parseEther("10000");

        console.log("before mint, user1 balance is: ", (await token.balanceOf(user1.address)).toString(), "\n");

        console.log("user1 is going to mint token:  ", mintAmount.toString());

        await token.connect(deployer).mint(user1.address, mintAmount);
        let afterMintUser1Balance = await token.balanceOf(user1.address);
        console.log("after mint, user1 balance is : ", afterMintUser1Balance.toString(), "\n");

        // Cause there is only one user, so his balance should be equal to total supply.
        expect(afterMintUser1Balance, await token.totalSupply());
    });

    it("Should burn token", async function () {
        const burnAmout = ethers.utils.parseEther("500");

        let beforeBurnUser1Balance = await token.balanceOf(user1.address);
        console.log("before burn, user1 balance is:", beforeBurnUser1Balance.toString(), "\n");

        console.log("user1 is going to burn token:   ", burnAmout.toString());

        await token.connect(user1).burn(burnAmout);

        let afterBurnUser1Balance = await token.balanceOf(user1.address);
        console.log("after burn, user1 balance is:  ", afterBurnUser1Balance.toString());

        let tokenChangedAmount = beforeBurnUser1Balance.sub(afterBurnUser1Balance);

        expect(tokenChangedAmount.toString(), burnAmout);
    });
});
