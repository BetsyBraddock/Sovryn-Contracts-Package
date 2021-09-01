# Sovryn Contracts Package

This package contains the abis and contracts addresses for smart contracts used by the Sovryn Protocol. It is a work in progress, more abis will be added soon.

## Usage

To import mainnet addresses:
`import { mainnetAddresses } from "@blobfishkate/sovryncontracts";`

To import mainnet addresses:
`import { testnetAddresses } from "@blobfishkate/sovryncontracts";`

To get an individual address:
`const BTC_address = testnetAddresses.BTC_token;`

To import an abi:
`import { abiLiquidityMining } from "@blobfishkate/sovryncontracts";`


Github repo is here: hhttps://github.com/BetsyBraddock/Sovryn-Contracts-Package/tree/typescript

A list of exported addresses can be found in /contract-mainnet.json or /contracts-testnet.json.

If you need to view the abis, they can be found in the /abi directory.