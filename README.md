# zprettier-config
our **shared prettier config** for js/html/css development

---


#### Configuración a través de package.json
**npm install**
Debemos instalar como dependencia de desarrollo ejecutando algo similar a...

```
npm install --save-dev https://github.com/azekia/zprettier-config.git#1.0.1
npm install --save-dev https://github.com/azekia/zprettier-config.git
```

Si ya lo tienes instalado como dependencia, pero deseas actualizarlo a la última versión, puedes hacer:
```
npm update zprettier-config  
```

Este comando provocará que en `package.json` aparezca:

```
  "devDependencies": {
    "zprettier-config": "github:azekia/zprettier-config"
  }
```

Ahora para hacer que se use como opciones de formato... bastará con incluir en `package.json` lo siguiente:
```
    "prettier": "zprettier-config"
```

---

#### Selección del formateador por defecto en Visual Studio Code
Importante recordar que debemos tener instalado el complemento **Prettier**y el **Eslint** y que en alguna configuración de Visual Studio Code, ya sea en la general o en la específica del proyecto `.vscode/settings.json`, se deberá indicará algo así como:

```
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




