# zprettier-config
our **shared prettier linter config** for js/html/css development

---

### `package.json`
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


#### Selección del formateador por defecto en Visual Studio Code
Importante recordar que debemos tener instalado el complemento **Prettier** que en alguna configuración de Visual Studio Code, ya sea en la general o en la específica del proyecto `.vscode/settings.json`.
Recordar que para el código javascript **no usaremos** Pettier, sino el linter que viene con vscode para Typesript.
Por ello, debermos configurar el workspace siguiendo esta guía:

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features",
    "editor.codeActionsOnSave": {
      "source.fixAll": "explicit"
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
  },
  "workbench.colorCustomizations": {
    "activityBar.activeBackground": "#f0c018",
    "activityBar.activeBorder": "#ffffff",
    "activityBar.background": "#f0c018",
    "activityBar.foreground": "#ffffff",
    "activityBar.inactiveForeground": "#ffffff",
    "activityBarBadge.background": "#f0c018",
    "activityBarBadge.foreground": "#ffffff",
    "sash.hoverBorder": "#f0c018",
    "statusBar.background": "#f0c018",
    "statusBar.foreground": "#000000",
    "statusBarItem.hoverBackground": "#f0c018",
    "statusBarItem.remoteBackground": "#f0c018",
    "statusBarItem.remoteForeground": "#ffffff",
    "titleBar.activeBackground": "#f0c018",
    "titleBar.activeForeground": "#ffffff",
    "titleBar.inactiveBackground": "#f0c018",
    "titleBar.inactiveForeground": "#ffffff"
  }
}

```

#### Reformateo de todo el proyecto
Para reformatear todos los archivos del proyecto podemos ejecutar

```
npx prettier --write .
```




