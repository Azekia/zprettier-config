# zprettier-config
our **shared prettier linter config** for js/html/css development

---
### `Extensiones necesarias`
- ESLint `dbaeumer.vscode-eslint`
- Prettier `esbenp.prettier-vscode` 



### `package.json`
En `package.json` debemos configurar las siguientes dependencias de desarrollo y la configuración de Prettier:

```json
  "devDependencies": {
    "eslint": "^8.49.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-standard": "^17.1.0",
    "eslint-plugin-import": "^2.28.1",
    "eslint-plugin-n": "^16.1.0",
    "eslint-plugin-promise": "^6.1.1",
    "zprettier-config": "github:azekia/zprettier-config"
  },
  "prettier": "zprettier-config"
```

Si ya lo tienes instalado como dependencia, pero deseas actualizarlo a la última versión, puedes hacer:
```
npm update zprettier-config  
```


### `.vscode/settings.json`
En las preferencias del Workspace vamos a configurar los formateadores por defecto para cada tipo de archivo.
Por ejemplo, para el código javascript **no usaremos** Pettier, sino ESLint.

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    }
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}

```

### `.eslintrc.json`
El fichero `.eslintrc.json` vamos a configurar las opciones de ESLint.


```json
{
  "extends": ["airbnb-base"],
  "env": {
    "es2021": true,
    "browser": true,
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "globals": {
    "msal": true,
    "google": true
  },
  "rules": {
    "no-param-reassign": ["off"],
    "linebreak-style": ["off", "unix"],
    "import/extensions": ["error", "always", { "ignorePackages": true }],
    "import/no-absolute-path": ["error"],
    "no-console": ["warn", { "allow": ["log", "warn", "error"] }],
    "no-plusplus": "off",
    "class-methods-use-this": ["off"],
    "max-len": ["error", { "code": 136, "tabWidth": 2, "ignoreTrailingComments": true }],
    "prefer-destructuring": ["off"],
    "lines-between-class-members": [
      "warn",
      {
        "enforce": [
          { "blankLine": "always", "prev": "method", "next": "*" }
          //{ "blankLine": "never", "prev": "field", "next": "*" }
        ]
      }
    ]
  }
}
```


#### Reformateo de todo el proyecto
Para reformatear todos los archivos del proyecto podemos ejecutar

```
npx prettier --write .
```




