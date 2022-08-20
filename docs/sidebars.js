module.exports = {
  docs: [
    'welcome',
    {
      "Eden RPC": [
        'eden-rpc/overview',
        'eden-rpc/quick-start',
        'eden-rpc/rocket-rpc',
        {
          "More Information": [
            'eden-rpc/more-information/uncle-bandits',
            'eden-rpc/more-information/ratelimiting',
          ]
        },
      ],
    },
    {
      'Eden Relay': [
        'eden-relay/overview',
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
        'eden-bundles/overview',
        {
          "For Searchers": [
            'eden-bundles/searchers/quick-start',
            {
              "Advanced Concepts": [
                'eden-bundles/searchers/advanced/understanding-bundles',
                'eden-bundles/searchers/advanced/coinbase-payment',
                'eden-bundles/searchers/advanced/rpc-endpoint',
                'eden-bundles/searchers/advanced/troubleshooting',
              ],
            },
          ],
        },
      ]
    },
    {
      "Contribute": [
        'contribution-guide', 'cheatsheet',
      ],
    },
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
