module.exports = {
    env: {
        node: true,
        browser: true
    },
    extends: [
        'products/lib/defaults',
        'wpcalypso/react-a11y'
    ],
    rules: {
        'react/jsx-filename-extension': 0,
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-uses-vars': 1,
        'react/prop-types': 1,
        'react/react-in-jsx-scope': 1
    }
};