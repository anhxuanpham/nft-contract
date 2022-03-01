const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20-BEP20", function () {
    let [accountA, accountB, accountC] = []
    let token
    let amount = 100
    let totalSupply = 1000000
    beforeEach(async () => {
        [accountA, accountB, accountC] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("SampleToken");
        token = await Token.deploy()
        await token.deployed()

    })
    describe("common()", function (){
        it("total supply should return right value", async function () {
            
        });
        it("balance of account A should return right value", async function () {
            
        });
        it("balance of account B should return right value", async function () {
            
        });
        it("allowance of account A should return right value", async function () {
            
        });

    })
    describe("transfer()", function (){
        it("transfer should revert if amount exceeds balance", async function () {
            
        });
        it("transfer should work correctly", async function () {

        });

    })
    describe("transferFrom()", function (){
        it("transferFrom should revert if amount exceeds allowance balance", async function () {
            
        });
        it("transferFrom should work correctly", async function () {

        });
    })
    describe("approve()", function (){
        it("approve should revert if spender is address 0", async function () {
            
        });
        it("approve should work correctly", async function () {
          
        });
    })
});
