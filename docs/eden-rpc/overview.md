---
title: Eden RPC
---

Eden RPC makes it easy for everyday users and developers to use Eden for frontrunning protection. It's as simple as adding a URL to your MetaMask.

Eden RPC is an RPC endpoint that users can add to their wallets which sends their transactions to Eden builders powering the [Eden Relay](../eden-relay/overview) where they are guaranteed not to be frontrun in Eden blocks (they may still be included in [uncle blocks](./more-information/uncle-bandits)). Learn more [in our quick start guide](/eden-rpc/quick-start).

## Endpoints

* Ethereum: `https://api.edennetwork.io/v1/rpc`
* Goerli: `https://goerli.edennetwork.io/v1/rpc`

## RPC Comparison

| RPC                   | Transaction Confidentiality | Inclusion Speed |
|-----------------------|-------------------------|-------------------|
| Speed RPC             | None (Public)           | Fastest 🏎🏎🏎           |
| Eden Rocket RPC       | Some (Eden and other repuatable builders) | Fast 🏎 |
| Eden RPC       | Max (Eden builders only) | Slow 🐢 |

## Eden Rocket RPC
If you want to have your transactions included as soon as possible, but with fewer guarantees try [Eden Rocket RPC](/eden-rpc/rocket-rpc).
