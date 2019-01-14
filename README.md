# eslint-plugin-no-dot-dot-import

dont depend upper layer classes

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-dot-dot-import`:

```
$ npm install eslint-plugin-no-dot-dot-import --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-dot-dot-import` globally.

## Usage

Add `no-dot-dot-import` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-dot-dot-import"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-dot-dot-import/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





