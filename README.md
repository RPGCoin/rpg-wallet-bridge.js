# rpg-wallet-bridge.js - Bridge between Rpgcoin application and wallet

## About
Rpgcoin applications don't have to be castodial wallet anymore.
With `rpg-wallet-bridge.js`, they can request flexible actions to their users' wallet.

## Installation
`yarn add rpg-wallet-bridge`

## Usage
```ts
import RPGWalletBridge from "rpg-wallet-bridge"
const injected = window.rpgcoin
if (!injected || !injected.wallet) {
  console.log("RPGWalletBridge wallet isn't injected!")
  return
}
const rpgWalletBridge = new RPGWalletBridge(injected.wallet)
```

## What is Asset?
assets are anything you can possibly think of that have been digitally embedded in the rpgcoin blockchain forever.

## Documentation

Documentation can be found at [GitHub Pages][docs].

[docs]: https://web3bch.github.io/bch-wallet-bridge.js/

## Building
### Requirements
- Node.js
- npm
- yarn

### Build (tsc)
1. `$ yarn`
2. `$ yarn build`
