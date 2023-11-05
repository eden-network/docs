module.exports = {
  docs: [
    'welcome',
    {
      "RPC Hub": [
        { type: 'doc', id: 'eden-rpc/overview', label: 'Eden RPC'},
        'eden-rpc/rocket-rpc',
        'eden-rpc/speed-rpc',
        { type: 'doc', id: 'eden-rpc/rpc-speed-test', label: 'RPC Speed Test'},
        { type: 'doc', id: 'eden-rpc/quick-start', label: 'MetaMask Guide'},
        {
          "More Information": [
            'eden-rpc/more-information/uncle-bandits',
            'eden-rpc/more-information/ratelimiting',
          ]
        },
      ],
    },
    {
      "Ethereum Mempool Stream": [
        { type: 'doc', id: 'eden-mempool-streaming-service/overview', label: 'Overview'},
        'eden-mempool-streaming-service/websockets'
      ],
    },
    {
      'MEV-Boost Relay': [
        { type: 'doc', id: 'eden-relay/overview', label: 'Eden Relay'},
        { type: 'doc', id: 'eden-relay/validators/mev-boost', label: 'Connect using MEV-Boost'},
        { type: 'doc', id: 'eden-relay/validators/quick-start', label: 'Connect using Builder API'},
        'eden-relay/how-it-works',
      ]
    },
    {
      'MEV Bundles': [
        { type: 'doc', id: 'eden-bundles/overview', label: 'Overview'},
        { type: 'doc', id: 'eden-bundles/searchers/quick-start', label: 'Quick Start'},
        { type: 'doc', id: 'eden-bundles/searchers/advanced/bundle-cancellations', label: 'Bundle Cancellations'},
        { type: 'doc', id: 'eden-bundles/searchers/advanced/coinbase-payment', label: 'Coinbase Payments'},
        { type: 'doc', id: 'eden-bundles/searchers/advanced/troubleshooting', label: 'Troubleshooting Bundles'},
        { type: 'doc', id: 'eden-bundles/searchers/advanced/rpc-endpoint', label: 'Technical Specification'},
      ]
    },
    {
      'Account Abstraction': [
        { type: 'doc', id: 'eden-bundler/overview', label: 'Eden Bundler'},
        'eden-bundler/erc4337-overview'
      ]
    },
    {
      "Contribute": [
        'contribution-guide', 'cheatsheet',
      ],
    }, 
    'terms-of-service',
    {
      type: 'link',
      label: 'Discord',
      href: 'https://discord.gg/ZhB9mpWWG3',
    },
    {
      type: 'link',
      href: 'https://github.com/eden-network',
      label: 'GitHub',
    },
  ],
};
