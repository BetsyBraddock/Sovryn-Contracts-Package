import contractsMainnet from './contracts-mainnet.json';
import contractsTestnet from './contracts-testnet.json';
import { contractMap } from './build-contracts';
import { AddressListData } from './build-contracts';

export const mainnetAddresses: AddressListData = contractsMainnet;
export const testnetAddresses: AddressListData = contractsTestnet;

export const contracts = contractMap;
