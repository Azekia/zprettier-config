# zprettier-config
our **shared prettier config** for html/scss development
complement with zlinter-config

---
### `Extensiones necesarias`
- Prettier `esbenp.prettier-vscode` 

### `Módulos necesarios`
```
npm install --save-dev github:azekia/zprettier-config
or
npm update zprettier-config
```


### `package.json`
En `package.json` debemos configurar las siguientes dependencias de desarrollo y la configuración de Prettier:

```json
  "devDependencies": {
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

### `.prettierignore`
El fichero `.prettierignore` indica que tipo de archivos deben ser ignorados en todo caso por Prettier
```
*.ejs
*.mjs
*.js
*.ts
*.json
```

### `npm install & reboot VSCode`
Para que funcione correctamente el prettier/linter, depues de realizar estas configuraciones es necesario que hagas un `npm install` y reiniciar VSCode.


### `npx prettier --write .`
Para reformatear todos los archivos del proyecto podemos ejecutar el siguiente comando, pero ten en cuenta que puede afectar a archivos de un modo no esperado (css, etc)

```
npx prettier --write .
```




