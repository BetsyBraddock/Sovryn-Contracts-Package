import contractsMainnet from './contracts-mainnet.json';
import contractsTestnet from './contracts-testnet.json';

import complete from './abi/abiComplete.json';
import erc20 from './abi/abiEERC20.json';
import liquidityMining from './abi/mining_proxy.json';
import devFund from './abi/abiDevelopmentFund.json';
import feeSharing from './abi/abiFeeSharingProxy.json';
import governorAlpha from './abi/abiGovenorAlpha.json';
import liquidityPoolV1 from './abi/abiLiquidityPoolV1Converter.json';
import liquidityPoolV2 from './abi/abiLiquidityPoolV2Converter.json';
import loanOpenings from './abi/abiLoanOpeningEvents.json';
import loanToken from './abi/abiLoanToken.json';
import oracle from './abi/abiOracle.json';
import priceFeed from './abi/abiPriceFeed.json';
import wrapperProxyOld from './abi/abiRBTCWrapperProxy_old.json';
import swapNetwork from './abi/abiSovrynSwapNetwork.json';
import staking from './abi/Staking.json';
import wrapperProxyNew from './abi/proxy_new.json';
import affiliateFeeSharing from './abi/AffiliateFeeSharing.json';
import feesHelper from './abi/FeesHelper.json';
import iSovryn from './abi/ISovryn.json';
import lockedSov from './abi/LockedSOV.json';
import vestingLogic from './abi/VestingLogic.json';
import vestingRegistry from './abi/VestingRegistry.json';

import { AbiItem } from 'web3-utils';

type AddressListData = {
  [key: string]: string;
};

export const mainnetAddresses: AddressListData = contractsMainnet;
export const testnetAddresses: AddressListData = contractsTestnet;

export const abiComplete = complete as AbiItem[];
export const abiErc20 = erc20 as AbiItem[];
export const abiLiquidityMining = liquidityMining as AbiItem[];
export const abiDevelopmentFund = devFund as AbiItem[];
export const abiFeeSharingProxy = feeSharing as AbiItem[];
export const abiGovenorAlpha = governorAlpha as AbiItem[];
export const abiLiquidityPoolV1Converter = liquidityPoolV1 as AbiItem[];
export const abiLiquidityPoolV2Converter = liquidityPoolV2 as AbiItem[];
export const abiLoanOpeningEvents = loanOpenings as AbiItem[];
export const abiLoanToken = loanToken as AbiItem[];
export const abiOracle = oracle as AbiItem[];
export const abiPriceFeed = priceFeed as AbiItem[];
export const abiWrapperProxy = wrapperProxyNew as AbiItem[];
export const abiWrapperProxyOld = wrapperProxyOld as AbiItem[];
export const abiSovrynSwapNetwork = swapNetwork as AbiItem[];
export const abiStaking = staking as AbiItem[];
export const abiAffiliateFeeSharing = affiliateFeeSharing as AbiItem[];
export const abiFeesHelper = feesHelper as AbiItem[];
export const abiISovryn = iSovryn as AbiItem[];
export const abiLockedSov = lockedSov as AbiItem[];
export const abiVestingLogic = vestingLogic as AbiItem[];
export const abiVestingRegistry = vestingRegistry as AbiItem[];
