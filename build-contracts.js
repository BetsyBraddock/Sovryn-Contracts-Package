const Web3 = require("web3");
const abiComplete = require("./abi/ISovryn.json");
const abiLoanToken = require("./abi/abiLoanToken.json");
const abiLoanOpeningEvents = require("./abi/abiLoanOpeningEvents.json");
const abiERC20 = require("./abi/abiEERC20.json");
const abiGovernorAlpha = require("./abi/abiGovenorAlpha.json");
const abiSovrynSwapNetwork = require("./abi/abiSovrynSwapNetwork.json");
const abiLiquidityPool = require("./abi/abiLiquidityPoolV2Converter.json");
const abiLiquidityPoolV1 = require("./abi/abiLiquidityPoolV1Converter.json");
const abiVesting = require("./abi/VestingRegistry.json");
const abiStaking = require("./abi/Staking.json");
const abiWrapperProxy_new = require("./abi/abiWrapperProxy_new.json");
const abiWrapperProxy_old = require("./abi/abiRBTCWrapperProxy_old.json");
const abiPriceFeed = require("./abi/abiPriceFeed.json");
const abiLiquidityMining = require("./abi/mining_proxy.json");
const contractsTestnet = require("./contracts-testnet.json");
const contractsMainnet = require("./contracts-mainnet.json");

const addresses = process.env.NETWORK_MODE === "testnet" ? contractsTestnet : contractsMainnet
const web3 = new Web3(process.env.NETWORK_MODE || "https://testnet2.sovryn.app/rpc");


module.exports = {
    sovrynProtocol: new web3.eth.Contract(abiComplete, addresses.Protocol.toLowerCase()),

    DOC_lending: new web3.eth.Contract(abiLoanToken.concat(abiLoanOpeningEvents), addresses.DOC_lending.toLowerCase()),
    BTC_lending: new web3.eth.Contract(abiLoanToken.concat(abiLoanOpeningEvents), addresses.BTC_lending.toLowerCase()),
    USDT_lending: new web3.eth.Contract(abiLoanToken.concat(abiLoanOpeningEvents), addresses.USDT_lending.toLowerCase()),
    BPRO_lending: new web3.eth.Contract(abiLoanToken.concat(abiLoanOpeningEvents), addresses.BPRO_lending.toLowerCase()),
    XUSD_lending: new web3.eth.Contract(abiLoanToken.concat(abiLoanOpeningEvents), addresses.XUSD_lending.toLowerCase()),

    DOC_amm: new web3.eth.Contract(abiLiquidityPool, addresses.DOC_amm.toLowerCase()),
    USDT_amm: new web3.eth.Contract(abiLiquidityPool, addresses.USDT_amm.toLowerCase()),
    BPRO_amm: new web3.eth.Contract(abiLiquidityPool, addresses.BPRO_amm.toLowerCase()),
    SOV_amm: new web3.eth.Contract(abiLiquidityPoolV1, addresses.SOV_amm.toLowerCase()),
    ETH_amm: new web3.eth.Contract(abiLiquidityPoolV1, addresses.ETH_amm.toLowerCase()),
    MOC_amm: new web3.eth.Contract(abiLiquidityPoolV1, addresses.MOC_amm.toLowerCase()),
    XUSD_amm: new web3.eth.Contract(abiLiquidityPoolV1, addresses.XUSD_amm.toLowerCase()),
    BNBS_amm: new web3.eth.Contract(abiLiquidityPoolV1, addresses.BNBS_amm.toLowerCase()),

    DOC_token: new web3.eth.Contract(abiERC20, addresses.DOC_token.toLowerCase()),
    USDT_token: new web3.eth.Contract(abiERC20, addresses.USDT_token.toLowerCase()),
    BTC_token: new web3.eth.Contract(abiERC20, addresses.BTC_token.toLowerCase()),
    BPRO_token: new web3.eth.Contract(abiERC20, addresses.BPRO_token.toLowerCase()),
    SOV_token: new web3.eth.Contract(abiERC20, addresses.SOV_token.toLowerCase()),
    ETH_token: new web3.eth.Contract(abiERC20, addresses.ETH_token.toLowerCase()),
    MOC_token: new web3.eth.Contract(abiERC20, addresses.MOC_token.toLowerCase()),
    XUSD_token: new web3.eth.Contract(abiERC20, addresses.XUSD_token.toLowerCase()),
    BNBS_token: new web3.eth.Contract(abiERC20, addresses.BNBS_token.toLowerCase()),
    NTSov_token: new web3.eth.Contract(abiERC20, addresses.NTSOVToken.toLowerCase()),

    DOC_pool: new web3.eth.Contract(abiERC20, addresses.DOC_pool.toLowerCase()),
    BTC_DOC_pool: new web3.eth.Contract(abiERC20, addresses.BTC_DOC_pool.toLowerCase()),
    USDT_pool: new web3.eth.Contract(abiERC20, addresses.USDT_pool.toLowerCase()),
    BTC_USDT_pool: new web3.eth.Contract(abiERC20, addresses.BTC_USDT_pool.toLowerCase()),
    BPRO_pool: new web3.eth.Contract(abiERC20, addresses.BPRO_pool.toLowerCase()),
    BTC_BPRO_pool: new web3.eth.Contract(abiERC20, addresses.BTC_BPRO_pool.toLowerCase()),
    SOV_pool: new web3.eth.Contract(abiERC20, addresses.SOV_pool.toLowerCase()),
    ETH_pool: new web3.eth.Contract(abiERC20, addresses.ETH_pool.toLowerCase()),
    MOC_pool: new web3.eth.Contract(abiERC20, addresses.MOC_pool.toLowerCase()),
    XUSD_pool: new web3.eth.Contract(abiERC20, addresses.XUSD_pool.toLowerCase()),
    BNBS_pool: new web3.eth.Contract(abiERC20, addresses.BNBS_pool.toLowerCase()),

    Governor_Alpha: new web3.eth.Contract(abiGovernorAlpha, addresses.governorAlpha.toLowerCase()),
    Governor_Owner: new web3.eth.Contract(abiGovernorAlpha, addresses.governorOwner.toLowerCase()),
    Governor_Admin: new web3.eth.Contract(abiGovernorAlpha, addresses.governorAdmin.toLowerCase()),

    BTC_proxy_new: new web3.eth.Contract(abiWrapperProxy_new, addresses.btcWrapperProxy_new.toLowerCase()),
    BTC_proxy_old: new web3.eth.Contract(abiWrapperProxy_old, addresses.btcWrapperProxy_old.toLowerCase()),

    swapNetwork: new web3.eth.Contract(abiSovrynSwapNetwork, addresses.swapNetwork.toLowerCase()),
    priceFeed: new web3.eth.Contract(abiPriceFeed, addresses.priceFeed.toLowerCase()),

    vesting1: new web3.eth.Contract(abiVesting, addresses.vestingRegistry1.toLowerCase()),
    vesting2: new web3.eth.Contract(abiVesting, addresses.vestingRegistry2.toLowerCase()),
    vesting3: new web3.eth.Contract(abiVesting, addresses.vestingRegistry3.toLowerCase()),
    staking: new web3.eth.Contract(abiStaking, addresses.staking.toLowerCase()),

    liquidityMining: new web3.eth.Contract(abiLiquidityMining, addresses.liquidityMiningProxy.toLowerCase())
}