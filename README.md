# Sovryn Contracts Packackage

This package contains the abis and contracts addresses for smart contracts used by the Sovryn Protocol

## Usage

This package will default to using testnet settings. To use mainnet setting you will need to set two environment variables:
- NETWORK_MODE=mainnet
- WEB3_PROVIDER= mainnet node url

To import just an address:
`import { addresses } from "@blobfishkate/sovryncontracts";`

To get an individual address:
`const BTC_address = addresses.BTC_token;`

To import a contract:
`import { BTC_lending } from "@blobfishkate/sovryncontracts";`
where BTC_lending is the name of the contract.

A list of exported addresses can be found in /contract-mainnet.json or /contracts-testnet.json.

A list of named contracts can be found in /build-contracts.js.

If you need to view the abis, they can be found in the /abi directory.