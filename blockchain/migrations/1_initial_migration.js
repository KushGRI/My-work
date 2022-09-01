const gasLessPool = artifacts.require("gasLessPool");

module.exports = function (deployer) {
  deployer.deploy(gasLessPool);
};
