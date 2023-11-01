module.exports = {
  docs: [
    'welcome',
    {
      "Eden RPC": [
        { type: 'doc', id: 'eden-rpc/overview', label: 'Overview'},
        'eden-rpc/quick-start',
        'eden-rpc/rocket-rpc',
        'eden-rpc/speed-rpc',
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
      'Eden Relay': [
        { type: 'doc', id: 'eden-relay/overview', label: 'Overview'},
        'eden-relay/how-it-works',
        {
          'For Validators & Validator Pools': [
            'eden-relay/validators/quick-start',
            'eden-relay/validators/mev-boost',
          ]
        }
      ]
    },
    {
      'Eden Bundles': [
        { type: 'doc', id: 'eden-bundles/overview', label: 'Overview'},
        { type: 'doc', id: 'eden-bundles/searchers/quick-start', label: 'Quick Start'},
        { type: 'doc', id: 'eden-bundles/searchers/advanced/bundle-cancellations', label: 'Bundle Cancellations'},
        { type: 'doc', id: 'eden-bundles/searchers/advanced/coinbase-payment', label: 'Coinbase Payments'},
        { type: 'doc', id: 'eden-bundles/searchers/advanced/troubleshooting', label: 'Troubleshooting Bundles'},
        { type: 'doc', id: 'eden-bundles/searchers/advanced/rpc-endpoint', label: 'Technical Specification'},
      ]
    },
    {
      'Eden Bundler (ERC-4337)': [
        { type: 'doc', id: 'eden-bundler/overview', label: 'Overview'},
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
