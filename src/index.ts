import contractsMainnet from './contracts-mainnet.json';
import contractsTestnet from './contracts-testnet.json';
import complete from './abi/abiComplete.json';
import erc20 from './abi/abiEERC20.json';
import liquidityMining from './abi/mining_proxy.json';
import { AbiItem } from 'web3-utils';

type AddressListData = {
  [key: string]: string;
};

export const mainnetAddresses: AddressListData = contractsMainnet;
export const testnetAddresses: AddressListData = contractsTestnet;

export const abiComplete = complete as AbiItem[];
export const abiErc20 = erc20 as AbiItem[];
export const abiLiquidityMining = liquidityMining as AbiItem[];
