module.exports = {
    env: {
        node: true,
        browser: true
    },
    extends: [
        'plugin:jsx-a11y/recommended',
        'wpcalypso/react',
        '../index.js'
    ],
    plugins: [
        'jsx-a11y'
    ],
    rules: {
        'react/jsx-filename-extension': 0,
        'react/jsx-indent-props': [2, 'tab'],
        'react/jsx-indent': [2, 'tab'],
        'react/jsx-uses-vars': 1,
        'react/prop-types': 1,
        'react/react-in-jsx-scope': 1,
        'react/sort-comp': [
            1,
            {
                order: [
                    'type-annotations',
                    'static',
                    'instance',
                    'lifecycle',
                    'getters',
                    'setters',
                    'everything-else',
                    'render'
                ],
                groups: {
                    static: [
                        'displayName',
                        'propTypes',
                        'contextTypes',
                        'childContextTypes',
                        'mixins',
                        'statics',
                        'defaultProps',
                        'static-methods'
                    ],
                    instance: [
                        'constructor',
                        'state',
                        'instance-variables',
                        'instance-methods',
                    ],
                    lifecycle: [
                        'getDefaultProps',
                        'getInitialState',
                        'getChildContext',
                        'getDerivedStateFromProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount'
                    ]
                }
            }
        ],

        'jsx-a11y/alt-text': 2,
        'jsx-a11y/no-static-element-interactions': 2,
        'jsx-a11y/no-noninteractive-element-interactions': 2,
        'jsx-a11y/interactive-supports-focus': 2,

        // Removed in v5
        'jsx-a11y/img-has-alt': 0,
        'jsx-a11y/onclick-has-focus': 0,
        'jsx-a11y/onclick-has-role': 0
    }
};
