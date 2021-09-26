# ![mercado libre](https://http2.mlstatic.com/frontend-assets/ui-navigation/5.6.1/mercadolibre/logo__large_plus.png) Challenge Frontend MELI by Julián Andrés Isaza

Repositorio desarrollado para challenge [Test Práctico - Frontend](https://www.dropbox.com/sh/nbq7zvtqd2gb9ab/AABIy7kFj4BvLeNfbLib_Jcya?dl=0&preview=Front-End+Test+Pr%C3%A1ctico.pdf)

## Introducción
La prueba implementada consiste en una aplicación web desarrollada en RectJS que permite buscar, listar y ver detalles de productos de MercadoLibre mediante el consumo de un API.
El código fuente se compone de dos proyectos: el backend para el consumo del API de Mercado Libre y la implementación de los endpoints para ser utilizados desde las vistas 
desarrolladas en el proyecto frontend.

## Principales Tecnologías y Paquetes 🛠️
**Backend:**
- [NodeJS](https://nodejs.org/es/) (v14.17.3)
- [Express](https://expressjs.com/) (v4.17.1)
- [Axios](https://www.npmjs.com/package/axios) (0.21.4)
- [Request](https://www.npmjs.com/package/request) (1.0.1)
- [Mercadolibre Api](https://api.mercadolibre.com/items/#options)

**Frontend:**
- [ReactJS](https://es.reactjs.org/) (v17.0.2)
- [Redux](https://react-redux.js.org/) (4.1.1)
- [Sass](https://www.npmjs.com/package/sass) (1.41.1)
- [CSS MELI](https://github.com/mercadolibre/css-style-guide)

### Instalación y deploy 🔧
Backend: el proyecto backend correrá por defecto en el puerto 3000 (http://localhost:3000/) 🚀.
```
cd backend
npm install
npm start
```
Frontend: el proyecto frontend correrá por en el puerto 3001, especificado en el package.json comando start (http://localhost:3001/) 🚀.
```
cd frontend
npm install
npm start
```

### Consideraciones 📋
* Usabilidad en la test ya que crearon aplicaciones rápidas, ágiles de usar de cara al usuario y reutilización de componentes CSS.
* Manejo del renderizado por medio de Redux para el mejoramiento del performance.
* Adopción de herramientas que fascilitan el escalamiento de la aplicación como las bibliotecas react-router-dom y organización de las estructuras de las aplicaciones backend
frontend.
* Centralización de Properties para un manejo de internacionalización de etiquetas.

### Pendientes ⌨️
* Uso de redux-saga para un mejoramiento de manejo de estado de la aplicación.
* Publicación del sitio utilizando [firebase](https://firebase.google.com/).
* Creación de TDD para el mejoramiento de las pruebas unitarias y funcionales.
* Uso de librería [storybook](https://storybook.js.org/) para la contrucción de UI componentes


## Autor ✒️

* **Julián Andrés Isaza Castaño** - (https://github.com/Juliallien/)


