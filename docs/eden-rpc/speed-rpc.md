---
title: Speed RPC
---

Eden Speed RPC offers blazing fast transaction propogation. When milliseconds matter, send your transactions to the public mempool using the Speed RPC.

:::caution Public Visibility

Do not use this RPC if you are looking for privacy or confidential transactions. The endpoint is designed to quickly propogate your transactions to the public mempool.

:::

## Endpoints

Eden Speed RPC offers endpoints in three major global locations, reducing the distance between transaction origin and RPC location. Users can reduce their first-hop latency and use Eden Network’s speed-optimized global infrastructure for transaction propagation.

* Ethereum:
  * US East: `https://speed-us-east.edennetwork.io`
  * EU West: `https://speed-eu-west.edennetwork.io`
  * Tokyo: `https://speed-tokyo.edennetwork.io`

## Speed Test

Normally, you should choose the endpoint geographically nearest to you. But if you would like to understand performance in more detail, use the [RPC Speed Test](/eden-rpc/rpc-speed-test).

## RPC Comparison

| RPC                   | Transaction Confidentiality | Inclusion Speed |
|-----------------------|-------------------------|-------------------|
| Speed RPC             | None (Public)           | Fastest 🏎🏎🏎           |
| Eden Rocket RPC       | Some (Eden and other repuatable builders) | Fast 🏎 |
| Eden RPC       | Max (Eden builders only) | Slow 🐢 |

## Using Speed RPC

To add Speed RPC endpoint follow these steps:

1. Enter your MetaMask and click on your RPC endpoint at the top of your MetaMask. By default it says “Ethereum mainnet.”
2. Click “Custom RPC”
3. Add `http://speed-us-east.edennetwork.io` (or any of the below RPCs, depending on your location) with a chainID of `1` and currency of `ETH`.
4. Scroll to the bottom and click “Save”
