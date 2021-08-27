import contractsMainnet from './contracts-mainnet.json';
import contractsTestnet from './contracts-testnet.json';
import { contractMap } from './build-contracts';
import { AddressListData } from './build-contracts';

console.log(`Using ${process.env.NETWORK_MODE} mode`);

export const addresses =
  process.env.NETWORK_MODE && process.env.NETWORK_MODE === 'mainnet'
    ? (contractsMainnet as AddressListData)
    : (contractsTestnet as AddressListData);

export const contracts = contractMap;
