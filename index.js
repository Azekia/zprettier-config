const prettier_config = {
    "tabWidth": 4,
    "useTabs": false,
    "singleQuote": true,
    "bracketSpacing": true,
    "arrowParens": "always",
    "printWidth": 136,
    "semi": true,
    "trailingComma": "none",
    "overrides": [
        {
            "files": "*.html",
            "options": {
                "tabWidth": 2
            }
        }
    ]
}

module.exports = prettier_config;