require('dotenv').config();

import abiComplete from './abi/ISovryn';
import abiLoanToken from './abi/abiLoanToken';
import abiLoanOpeningEvents from './abi/abiLoanOpeningEvents';
import abiERC20 from './abi/abiEERC20';
import abiGovernorAlpha from './abi/abiGovenorAlpha';
import abiSovrynSwapNetwork from './abi/abiSovrynSwapNetwork';
import abiLiquidityPool from './abi/abiLiquidityPoolV2Converter';
import abiLiquidityPoolV1 from './abi/abiLiquidityPoolV1Converter';
import abiVesting from './abi/VestingRegistry';
import abiStaking from './abi/abiStaking';
import abiWrapperProxy_new from './abi/abiWrapperProxy_new';
import abiWrapperProxy_old from './abi/abiRBTCWrapperProxy_old';
import abiPriceFeed from './abi/abiPriceFeed';
import abiLiquidityMining from './abi/mining_proxy';
import abiFeeSharingProxy from './abi/abiFeeSharingProxy';
import abiOracle from './abi/abiOracle';
import abiDevelopmentFund from './abi/abiDevelopmentFund';
import abiMultisig from './abi/abiMultisig';
import abiStakingReward from './abi/abiStakingReward';
import abiLockedSOV from './abi/LockedSOV';
import abiFeeHelper from './abi/FeesHelper';
import abiAffiliateFees from './abi/AffiliateFeeSharing';
import abiProtocolSettings from './abi/abiProtocolSettings';
import abiInterestUser from './abi/abiInterestUser';

import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

import * as contractsTestnet from './contracts-testnet.json';
import * as contractsMainnet from './contracts-mainnet.json';

export type AddressListData = {
  [key: string]: string;
};

const addresses: AddressListData =
  process.env.NETWORK_MODE && process.env.NETWORK_MODE === 'mainnet'
    ? (contractsMainnet as AddressListData)
    : (contractsTestnet as AddressListData);

const web3 = new Web3(process.env.WEB3_PROVIDER || 'https://testnet2.sovryn.app/rpc');

export const contractMap = {
  /** TODO: Include AbiAffiliateFees and AbiProtocolSettings here. Typescript error, not sure why  */
  sovrynProtocol: new web3.eth.Contract(
    abiComplete.concat(abiFeeHelper).concat(abiAffiliateFees).concat(abiProtocolSettings) as AbiItem[],
    addresses.Protocol.toLowerCase(),
  ),

  // Lending contracts
  DOC_lending: new web3.eth.Contract(
    abiLoanToken.concat(abiLoanOpeningEvents).concat(abiInterestUser) as AbiItem[],
    addresses.DOC_lending.toLowerCase(),
  ),
  BTC_lending: new web3.eth.Contract(
    abiLoanToken.concat(abiLoanOpeningEvents).concat(abiInterestUser) as AbiItem[],
    addresses.BTC_lending.toLowerCase(),
  ),
  USDT_lending: new web3.eth.Contract(
    abiLoanToken.concat(abiLoanOpeningEvents).concat(abiInterestUser) as AbiItem[],
    addresses.USDT_lending.toLowerCase(),
  ),
  BPRO_lending: new web3.eth.Contract(
    abiLoanToken.concat(abiLoanOpeningEvents).concat(abiInterestUser) as AbiItem[],
    addresses.BPRO_lending.toLowerCase(),
  ),
  XUSD_lending: new web3.eth.Contract(
    abiLoanToken.concat(abiLoanOpeningEvents).concat(abiInterestUser) as AbiItem[],
    addresses.XUSD_lending.toLowerCase(),
  ),

  //AMM contracts
  DOC_amm: new web3.eth.Contract(abiLiquidityPool as AbiItem[], addresses.DOC_amm.toLowerCase()),
  USDT_amm: new web3.eth.Contract(abiLiquidityPool as AbiItem[], addresses.USDT_amm.toLowerCase()),
  BPRO_amm: new web3.eth.Contract(abiLiquidityPool as AbiItem[], addresses.BPRO_amm.toLowerCase()),
  SOV_amm: new web3.eth.Contract(abiLiquidityPoolV1 as AbiItem[], addresses.SOV_amm.toLowerCase()),
  ETH_amm: new web3.eth.Contract(abiLiquidityPoolV1 as AbiItem[], addresses.ETH_amm.toLowerCase()),
  MOC_amm: new web3.eth.Contract(abiLiquidityPoolV1 as AbiItem[], addresses.MOC_amm.toLowerCase()),
  XUSD_amm: new web3.eth.Contract(abiLiquidityPoolV1 as AbiItem[], addresses.XUSD_amm.toLowerCase()),
  BNBS_amm: new web3.eth.Contract(abiLiquidityPoolV1 as AbiItem[], addresses.BNBS_amm.toLowerCase()),

  //ERC20 tokens
  DOC_token: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.DOC_token.toLowerCase()),
  USDT_token: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.USDT_token.toLowerCase()),
  BTC_token: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.BTC_token.toLowerCase()),
  BPRO_token: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.BPRO_token.toLowerCase()),
  SOV_token: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.SOV_token.toLowerCase()),
  ETH_token: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.ETH_token.toLowerCase()),
  MOC_token: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.MOC_token.toLowerCase()),
  XUSD_token: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.XUSD_token.toLowerCase()),
  BNBS_token: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.BNBS_token.toLowerCase()),
  NTSov_token: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.NTSOVToken.toLowerCase()),

  //ERC20 pool tokens
  DOC_pool: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.DOC_pool.toLowerCase()),
  BTC_DOC_pool: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.BTC_DOC_pool.toLowerCase()),
  USDT_pool: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.USDT_pool.toLowerCase()),
  BTC_USDT_pool: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.BTC_USDT_pool.toLowerCase()),
  BPRO_pool: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.BPRO_pool.toLowerCase()),
  BTC_BPRO_pool: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.BTC_BPRO_pool.toLowerCase()),
  SOV_pool: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.SOV_pool.toLowerCase()),
  ETH_pool: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.ETH_pool.toLowerCase()),
  MOC_pool: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.MOC_pool.toLowerCase()),
  XUSD_pool: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.XUSD_pool.toLowerCase()),
  BNBS_pool: new web3.eth.Contract(abiERC20 as AbiItem[], addresses.BNBS_pool.toLowerCase()),

  //Treasury contracts
  Governor_Alpha: new web3.eth.Contract(abiGovernorAlpha as AbiItem[], addresses.governorAlpha.toLowerCase()),
  Governor_Owner: new web3.eth.Contract(abiGovernorAlpha as AbiItem[], addresses.governorOwner.toLowerCase()),
  Governor_Admin: new web3.eth.Contract(abiGovernorAlpha as AbiItem[], addresses.governorAdmin.toLowerCase()),

  //Proxy contracts
  BTC_proxy_new: new web3.eth.Contract(abiWrapperProxy_new as AbiItem[], addresses.proxy3.toLowerCase()),
  BTC_proxy_old: new web3.eth.Contract(abiWrapperProxy_old as AbiItem[], addresses.btcWrapperProxy_new.toLowerCase()),
  feeSharingProxy: new web3.eth.Contract(abiFeeSharingProxy as AbiItem[], addresses.feeSharingProxy.toLowerCase()),

  //Swaps and prices
  swapNetwork: new web3.eth.Contract(abiSovrynSwapNetwork as AbiItem[], addresses.swapNetwork.toLowerCase()),
  priceFeed: new web3.eth.Contract(abiPriceFeed as AbiItem[], addresses.priceFeed.toLowerCase()),

  //Oracles
  SOV_oracle: new web3.eth.Contract(abiOracle as AbiItem[], addresses.SOV_oracle.toLowerCase()),
  XUSD_oracle: new web3.eth.Contract(abiOracle as AbiItem[], addresses.XUSD_oracle.toLowerCase()),
  ETHS_oracle: new web3.eth.Contract(abiOracle as AbiItem[], addresses.ETHS_oracle.toLowerCase()),
  ETH_oracle: new web3.eth.Contract(abiOracle as AbiItem[], addresses.ETH_oracle.toLowerCase()),
  MOC_oracle: new web3.eth.Contract(abiOracle as AbiItem[], addresses.MOC_oracle.toLowerCase()),
  BNBS_oracle: new web3.eth.Contract(abiOracle as AbiItem[], addresses.BNBS_oracle.toLowerCase()),

  //Vesting / staking / mining
  vestingRegistry1: new web3.eth.Contract(abiVesting as AbiItem[], addresses.vestingRegistry1.toLowerCase()),
  vestingRegistry2: new web3.eth.Contract(abiVesting as AbiItem[], addresses.vestingRegistry2.toLowerCase()),
  vestingRegistry3: new web3.eth.Contract(abiVesting as AbiItem[], addresses.vestingRegistry3.toLowerCase()),
  staking: new web3.eth.Contract(abiStaking as AbiItem[], addresses.staking.toLowerCase()),
  liquidityMiningProxy: new web3.eth.Contract(
    abiLiquidityMining as AbiItem[],
    addresses.liquidityMiningProxy.toLowerCase(),
  ),
  lockedSOV: new web3.eth.Contract(abiLockedSOV as AbiItem[], addresses.lockedSOV.toLowerCase()),

  multisig: new web3.eth.Contract(abiMultisig as AbiItem[], addresses.multisig.toLowerCase()),
};

if (process.env.NETWORK_MODE && process.env.NETWORK_MODE === 'mainnet') {
  /** IF MAINNET */
  module.exports.AdoptionFund = new web3.eth.Contract(
    abiDevelopmentFund as AbiItem[],
    addresses.AdoptionFund.toLowerCase(),
  );
  module.exports.Development_Fund = new web3.eth.Contract(
    abiDevelopmentFund as AbiItem[],
    addresses.DevelopmentFund.toLowerCase(),
  );
} else {
  /** IF TESTNET */
  module.exports.stakingReward = new web3.eth.Contract(
    abiStakingReward as AbiItem[],
    addresses.stakingReward.toLowerCase(),
  );
}
