const presets = [
    [
        '@babel/preset-env',
        {
            'targets': '> 0.25%, not dead',
            'corejs': 3,
            'useBuiltIns': 'usage',
            'shippedProposals': true
        }
    ],
    [
        '@babel/preset-react'
    ]
];

const plugins = [
    [
        'react-html-attrs'
    ]
]

module.exports = {presets, plugins}
