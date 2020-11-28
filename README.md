# ERC20

[![built-with openzeppelin](https://img.shields.io/badge/built%20with-OpenZeppelin-3677FF)](https://docs.openzeppelin.com/)

## Usage

Install hardhat and plugins

```
npm install
mv .example.env .env
```

Run the following commands to compile all contracts:

```
npx hardhat compile
```

To run the tests:

```
npx hardhat test
```

To deploy contracts, need to set basic config parameters in `.env`:

```
ETHERSCAN_KEY: Etherscan API key to verify the contracts automatically.
INFURA_KEY: Infura API key.
PRIVATE_KEY: Private key of deployer account.
TOKEN_NAME: The name of this token.
TOKEN_SYMBOL: The symbol of this token.
```

Deploy contracts at the local:

```
npx hardhat run scripts/deploy.js
```

Deploy contracts at the testnet: Kovan.

```
npx hardhat run scripts/deploy.js --network kovan
```

Verify contract by the etherscan API

```
npx hardhat verify --network kovan CONTRACT_ADDRESS
```

Run a local develop network with buidler EVM:

```
npx hardhat node
```

**ERC20 Token on Kovan(11-28)**

<table>
	<tr>
       <th>Contract Name</th>
    	<th>Contract Address</th>
	</tr>
	<tr>
		<td> ERC20 token </td>
		<td> 0x4319C284D35D969d5fbF01E38509931C500C242E </td>
	</tr>
</table>
