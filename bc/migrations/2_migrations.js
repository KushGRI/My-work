const ERC20Basic = artifacts.require("ERC20Basic");

module.exports = function (deployer) { 
  deployer.deploy(ERC20Basic, "0x90004e28979153bE3a58B7Ce4AE3254436B3d93f");
};
