---
title: Quick Start
---
**Please note that Eden RPC is currently in public beta.**

Eden RPC allows regular users to easily protect their transactions from frontrunners by using a custom RPC endpoint in their wallet. Everything should be the same for users, except transactions are sent to Eden, and then directly to Eden block builders, instead of the public mempool.

## Choosing the right gas price
In most cases sending a transaction through Eden RPC should not require a higher gas price than normal. However, in periods of high load, you may want to increase gas prices to ensure your transaction is mined quickly. If the network is congested and you need your transaction quickly you could up your max fee to adjust for fluctations in base fee and set your priority fee to be 3 - 5 gwei.

## How to use Eden RPC in MetaMask

To add Eden RPC endpoint follow these steps:

1. Enter your MetaMask and click on your RPC endpoint at the top of your MetaMask. By default it says “Ethereum mainnet.”
2. Click “Custom RPC”
3. Add `https://api.edennetwork.io/v1/rpc` with a chainID of `1` and currency of `ETH`.
4. Scroll to the bottom and click “Save”

**Demo:**
<iframe src="https://player.vimeo.com/video/650843505?h=11493b491e" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## How to use Eden RPC in Metamask (Goerli Test Network)

Follow these steps to add Eden RPC endpoint for Goerli:

1. Enter your MetaMask and click on your RPC endpoint at the top of your MetaMask. By default it says “Ethereum mainnet.”
2. Click “Custom RPC”
3. Add `https://goerli.edennetwork.io/v1/rpc` with a chainID of `5` and currency of `ETH`.
4. Scroll to the bottom and click “Save”
