# zprettier-config
our **shared prettier config** for js/html/css development

---


####Configuración a través de package.json
**npm install**
Debemos instalar como dependencia de desarrollo ejecutando algo similar a...

```
npm install --save-dev https://github.com/azekia/zprettier-config.git#1.0.0
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

####Selección del formateador por defecto en Visual Studio Code
Importante recordar que debemos tener instalado el complemento **Prettier** y que en alguna configuración de Visual Studio Code, ya sea en la general o en la específica del proyecto `.vscode/settings.json`, se deberá indicará:

```
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

####Reformateo de todo el proyecto
Para reformatear todos los archivos del proyecto podemos ejecutar

```
npx prettier --write .
```




