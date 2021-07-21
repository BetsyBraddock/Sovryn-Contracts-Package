const contractsMainnet = require("./contracts-mainnet.json")
const contractsTestnet = require("./contracts-testnet.json")
const { contracts } = require("./build-contracts")

module.exports = {
    contractsMainnet: contractsMainnet,
    contractsTestnet: contractsTestnet,
    contracts: contracts
}