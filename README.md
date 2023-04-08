# CoinCap API Plugin for ChatGPT

The CoinCap API Plugin is a plugin for ChatGPT that allows the language model to retrieve cryptocurrency information from the CoinCap API. The plugin provides two endpoints: one for retrieving a list of cryptocurrencies and another for retrieving information about a specific cryptocurrency.

## Features

- Retrieve a list of cryptocurrencies from the CoinCap API.
- Retrieve information about a specific cryptocurrency based on its ID.

## Usage within ChatGPT

ChatGPT can use this plugin to access cryptocurrency information from the CoinCap API. The plugin provides two main operations:

- `listAssets`: Retrieve a list of cryptocurrencies.
- `getAssetById`: Retrieve information about a specific cryptocurrency based on its ID.

## Example Usage

- Retrieve a list of cryptocurrencies:
  `plugin: coincap.listAssets()`

- Retrieve information about Bitcoin:
  `plugin: coincap.getAssetById({ id: 'bitcoin' })`

## License

This project is open-source software released under the MIT License.

## Contact

For any questions or concerns regarding the CoinCap API Plugin, please contact us at support@example.com.
