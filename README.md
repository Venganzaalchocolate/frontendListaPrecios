# Aplicación Lista de precios Prime Invest

La aplicación proporciona una herramienta para obtener información actualizada sobre los precios de una amplia gama de instrumentos financieros.Se conecta a una API externa para obtener los datos actualizados.

## Características

- **Acceso a una API externa**: Se prepara un servicio para un acceso a una api externa.

## Requisitos
- Tener instalado node 18
- Tener instalado git
- Tener instalado npm


## Cómo Empezar

Para comenzar a usarlo, sigue estos pasos:

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia el servidor con `npm start`.

## Patrones de diseño

- **Next.js: Patrón Componentes**:
El patrón Componente (Component Pattern) es un pilar fundamental en Next.js y en librerías de interfaz de usuario (UI) como React. Este README te explica cómo se aplica en Next.js para construir interfaces web modernas y eficientes.

- **Componentes como bloques reutilizables**:    
    - Un componente en Next.js es un bloque de código reutilizable que representa una parte de la interfaz de usuario.
    - Se escribe en JavaScript con JSX (JavaScript XML) y encapsula funcionalidad y estilo.
    - Un componente puede incluir lógica para manejar eventos de usuario, realizar operaciones de estado, y renderizar elementos HTML.

- **Beneficios de usar componentes**:    
    - Reusabilidad: Los componentes se pueden utilizar en múltiples lugares dentro de la aplicación, evitando la duplicación de código.
    - Modularidad: Los componentes descomponen la interfaz de usuario en partes más pequeñas y manejables, mejorando la organización del código y la mantenibilidad.
    - Aislamiento: Cada componente encapsula su propio estado y estilos, evitando conflictos y facilitando la gestión de la complejidad de la aplicación.

- **Estructura de un componente**:    
    - Un componente Next.js se define como una función de React que devuelve un elemento JSX.
    - El JSX describe la estructura HTML de la parte de la interfaz de usuario representada por el componente.
    - El componente puede recibir props (propiedades) que le permiten personalizar su comportamiento y apariencia.



## Cómo configurarlo

Para configurar el entorno correctamente, debes situarte en la carpeta:
```
\src\config.js
```

Si ejecutas el código para desarrollo: `development` podrás encontrar que en `config.js` tienes un apartado:
```javascript
development: {
      apiUrl: 'http://localhost/api',
},
```
Sustituye `http://localhost/api` por la URL de la API que estés utilizando.

Cuando compiles el código con `npm build` la aplicación recogerá la URL de la api que está marcada como production:
```javascript
production: {
      apiUrl: 'https://backendlistaprecios.onrender.com/api/',
}
```

## Cómo ejecutar la app

En el directorio del proyecto:

### `npm start`

Esto ejecutará la aplicación en modo desarrollo. \
Abre [http://localhost:3000](http://localhost:3000) para visualizar la app en tu navegador.

La página se recargará cuando hagas cambios.\
Tú tambien puedes ver los errores en la consola.

### `npm run build`

Construye la aplicación y la prepara para producción, guardando los compilados en la carpeta `build`.\

Incluye React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

El compilado es minificado y los ficheros incluyen los hashes.\
La aplicación estará lista y preparada para ser desplegada!


## Directory Hierarchy
```
|—— .env
|—— .eslintrc.json
|—— .gitignore
|—— dockerfile
|—— jsconfig.json
|—— next.config.mjs
|—— node_modules
|—— package-lock.json
|—— package.json
|—— public
|    |—— datos.json
|    |—— favicon.ico
|    |—— images
|    |—— next.svg
|    |—— vercel.svg
|—— R.md
|—— src
|    |—— API
|        |—— services.js
|    |—— components
|        |—— Campanias.js
|        |—— Constructor.js
|        |—— Footer.js
|        |—— Header.js
|        |—— Layout.js
|        |—— Listaprecios.js
|        |—— MostrarPrecios.js
|        |—— Observaciones.js
|        |—— Pdfcreator.js
|        |—— ScrollToTopButton.js
|        |—— Tabla.js
|    |—— config.js
|    |—— pages
|        |—— index.js
|        |—— _app.js
|        |—— _document.js
|    |—— styles
|        |—— Campanias.module.css
|        |—— Constructor.module.css
|        |—— Footer.module.css
|        |—— globals.css
|        |—— Header.module.css
|        |—— Listaprecios.module.css
|        |—— Observaciones.module.css
|        |—— PdfStyles.module.css
|        |—— ScrollToTopButton.module.css
|        |—— Spinner.module.css
|        |—— Tabla.module.css
|    |—— utils
|        |—— utils.js

```


## Collaboradores
- [Victoria Sampalo](https://github.com/Victoria-Sampalo)
- [Elisabet D'Acosta ](https://github.com/Venganzaalchocolate/)
  

