# Products Eslint Config

## Dependencies

* `eslint 3.19.0+`

## Installation

```sh
npm install --save-dev github:moderntribe/eslint-config-products

# Target branch or release:
# npm install --save-dev github:moderntribe/eslint-config-products#branch-name
```

### Add .eslintrc file

In the root directory, add in an `.eslintrc` file.

```js
{
    extends: 'products'
}
```

## Using React eslint config

Update `.eslintrc` to:

```js
{
    extends: 'products/react'
}
```
