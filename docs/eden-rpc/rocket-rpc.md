---
title: Rocket RPC
---

Eden Rocket RPC offers a faster experience than Eden RPC which may be better for some use cases. By sending transactions using Rocket RPC your transactions are more likely to be included as soon as possible. This is because Rocket RPC is an aggregator that sends your transactions to multiple RPC providers/builders giving you the best possible chance at your transaction getting included in a block quickly. 

The downside is that because your transactions are forwarded to third-parties outside of the Eden ecosystem, Eden cannot guarantee that your transactions won't be frontrun. That said, Eden will only forward your transactions to vetted third-parties that have no known history of frontrunning their users.

## Eden RPC vs Eden Rocket RPC

|                       | Frontrunning Protection | Transaction Speed |
|-----------------------|-------------------------|-------------------|
| Eden RPC              | Guaranteed ✅           | Fast 🏎           |
| Eden Rocket RPC       | Best Effort 💪          | Faster 🚀         |

## Using Eden Rocket RPC

To add Eden RPC endpoint follow these steps:

1. Enter your MetaMask and click on your RPC endpoint at the top of your MetaMask. By default it says “Ethereum mainnet.”
2. Click “Custom RPC”
3. Add `https://api.edennetwork.io/v1/rocket` with a chainID of `1` and currency of `ETH`.
4. Scroll to the bottom and click “Save”

## When should I use Rocket RPC?

You should use Rocket RPC if you want to be included in blocks as soon as possible and if your transaction is unlikely to be frontrun. For example, if you are minting an NFT.