import * as contractsMainnet from './contracts-mainnet.json';
import * as contractsTestnet from './contracts-testnet.json';
import * as contracts from './build-contracts';
import { AddressListData } from './build-contracts';

console.log(`Using ${process.env.NETWORK_MODE} mode`);

const addresses =
  process.env.NETWORK_MODE && process.env.NETWORK_MODE === 'mainnet'
    ? (contractsMainnet as AddressListData)
    : (contractsTestnet as AddressListData);

module.exports = {
  addresses: addresses,
  contracts: { ...contracts },
  ...contracts,
};
