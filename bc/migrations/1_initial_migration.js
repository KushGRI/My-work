const TimelockController = artifacts.require("TimelockController");

module.exports = function (deployer,network, accounts) { 
  deployer.deploy(TimelockController,50,[accounts[1]],[accounts[2]],accounts[0],{from: accounts[0]});
};
