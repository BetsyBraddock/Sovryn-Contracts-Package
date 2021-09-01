"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.abiLiquidityMining = exports.abiErc20 = exports.abiComplete = exports.testnetAddresses = exports.mainnetAddresses = void 0;
var contracts_mainnet_json_1 = __importDefault(require("./contracts-mainnet.json"));
var contracts_testnet_json_1 = __importDefault(require("./contracts-testnet.json"));
var abiComplete_json_1 = __importDefault(require("./abi/abiComplete.json"));
var abiEERC20_json_1 = __importDefault(require("./abi/abiEERC20.json"));
var mining_proxy_json_1 = __importDefault(require("./abi/mining_proxy.json"));
exports.mainnetAddresses = contracts_mainnet_json_1.default;
exports.testnetAddresses = contracts_testnet_json_1.default;
exports.abiComplete = abiComplete_json_1.default;
exports.abiErc20 = abiEERC20_json_1.default;
exports.abiLiquidityMining = mining_proxy_json_1.default;
//# sourceMappingURL=index.js.map