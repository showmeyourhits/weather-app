module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "jest/globals": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2017,
    },
    "plugins": [
        "import",
        "jest",
    ],
    "rules": {
        "object-curly-spacing": ["error", "never"],
        "indent": [
            "error",
            4
        ],
        "no-console": 'off',
        "max-len": ["error", 100],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};