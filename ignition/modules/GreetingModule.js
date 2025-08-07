const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("GreetingModule", (m) => {
  const greeting = m.contract("Greeting", ["Hello from Ignition!"]);
  return { greeting };
});
