# Products Eslint Config

Custom config that extends [wpcalypso](https://github.com/Automattic/eslint-config-wpcalypso).

## Dependencies

* `eslint 3.19.0+`

## Installation

Using npm:
```sh
npm install --save-dev github:moderntribe/eslint-config-products

# Target branch or release:
# npm install --save-dev github:moderntribe/eslint-config-products#branch-name
# npm install --save-dev github:moderntribe/eslint-config-products#v0.0.1
```

Using yarn:
```sh
yarn add --dev github:moderntribe/eslint-config-products

# Target branch or release:
# yarn add --dev github:moderntribe/eslint-config-products#branch-name
# yarn add --dev github:moderntribe/eslint-config-products#v0.0.1
```

### Add .eslintrc file

In the root directory, add in an `.eslintrc` file.

```js
{
    extends: 'products'
}
```

### Using React eslint config

Update `.eslintrc` to:

```js
{
    extends: 'products/react'
}
```

## Creating release version

First, bump the package.json version number to the latest version number.

Then create a new tag for updated config in git:
```sh
git tag v0.0.5
git push --tags
```
