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
        'react/jsx-indent-props': [2, 'tab'],
        'react/jsx-indent': [2, 'tab'],
        'react/jsx-uses-vars': 1,
        'react/prop-types': 1,
        'react/react-in-jsx-scope': 1,

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
