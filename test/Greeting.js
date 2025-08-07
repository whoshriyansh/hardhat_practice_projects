const { expect } = require("chai");
const { ethers } = require("hardhat");

//decribe is a function given to use by mocha test runner to group all the test under the same name greetings
describe("Greeting", function () {
  //it stands for individual test and comes from mocha runner
  //it takes 2 arguments i.e. description of what this test is verifying and then a callback async function
  //Async because blockchain interactions are promises (transactions, contract calls).
  it("Should return the initial greeting", async function () {
    //ethers here is Ethers.js — injected globally by Hardhat in tests.
    //getContractFactory("Greeting") creates a factory (a deployable blueprint) for the Greeting contract.
    const Greeting = await ethers.getContractFactory("Greeting");

    //Calls the constructor of Greeting with "Hello".
    const greeting = await Greeting.deploy("Hello");

    //Waits until the deployment transaction is mined and the contract is live.
    await greeting.waitForDeployment();

    //we use expect to say that on given value we recive only this given output
    //Calls contract’s retrieveGreeting() function.
    //Compares the returned value to "Hello" using Chai’s expect.
    expect(await greeting.retrieveGreeting()).to.equal("Hello");
  });

  it("Should change the greeting", async function () {
    const Greeting = await ethers.getContractFactory("Greeting");
    const greeting = await Greeting.deploy("Hello");
    await greeting.waitForDeployment();

    await greeting.changeGreeting("Hi there");

    expect(await greeting.retrieveGreeting()).to.equal("Hi there");
  });
});
