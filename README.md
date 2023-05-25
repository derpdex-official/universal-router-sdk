# universal-router-sdk
This SDK facilitates interactions with the contracts in Universal Router.

## Usage
Install latest version of universal-router-sdk. Then import the corresponding Trade class and Data object for each protocol you'd like to interact with.

## Running this package
Make sure you are running `node v16`
Install dependencies and run typescript unit tests
```bash
yarn install
yarn test:hardhat
```

Run forge integration tests
```bash
yarn symlink # must install git submodules
forge install
yarn test:forge
```
