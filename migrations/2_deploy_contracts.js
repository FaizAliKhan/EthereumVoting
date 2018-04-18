var Voting = artifacts.require("./Voting.sol");
module.exports = function(deployer) {
 deployer.deploy(Voting, 10000, web3.toWei('1', 'ether'), ['Candidate 1', 'Candidate 2', 'Candidate 3']);
};
