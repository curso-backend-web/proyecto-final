# 🫀 Proyecto Backend Fundamentals

Este proyecto sirve para la evaluación del módulo M4 del curso BACKEND-WEB-DEVELOPER 2021.

## Introducción

En las aplicaciones web modernas la lógica de la interacción con el usuario se ha desplazado mayoritariamente a la parte de front-end. Se desarrollan aplicaciones cada vez más complejas e interactivas que modulan su comportamiento en función de los datos que intercambian con la parte de back-end. El backend, de este modo, debe proporcionar de forma rápida, flexible, robusta y eficiente la información que demanda la parte de front-end.

__¿Qué es una API REST?__

REST (REpresentational State Transfer), es un estilo de arquitectura sin estado. Es decir, no conoce el estado del usuario que hace la petición ni su historia
API es la abreviatura de _Application Program Interface_. En síntesis, programa que permite la comunicación entre aplicaciones. En este caso de aplicaciones web, una API básicamente es un conjunto de URLs que responde con datos cuando se llama de forma correcta con la información correcta.

En las aplicaciones web modernas una API REST se utiliza para realizar de puente entre una base de datos y la aplicación de front-end.


![](https://cdn-clekk.nitrocdn.com/tkvYXMZryjYrSVhxKeFTeXElceKUYHeV/assets/static/optimized/rev-d50a452/wp-content/uploads/2021/04/What_Is_Web_Application_Architecture_.png)

El objetivo de este módulo es desarrollar una aplicación web completa. Con especial énfasis en la parte de backend.

## Objetivo

Desarrollar y desplegar en un entorno de producción una aplicación completa que conste de un Backend API REST, que conecte con una base de datos y exponga una serie d _end-points_, y un Front-end que consuma obtenga los datos del back-end.

## Tecnologías

La API REST se desarrollará con el framework [Nest](https://docs.nestjs.com/first-steps) y una base de datos que puede ser relacional ([MySQL](https://dev.mysql.com/doc/mysql-getting-started/en/), [PosgreSQL](https://www.postgresqltutorial.com/postgresql-getting-started/), [SQLite](https://www.sqlite.org/quickstart.html), etc.)
o no relacional ([MongoDB](https://docs.mongodb.com/manual/tutorial/getting-started/)). Asimismo se documentará vía [OpenAPI](https://www.openapis.org/) ([Swagger](https://swagger.io/tools/open-source/getting-started/))

El front-end podrá implementarse con cualquier tecnología actual:
[HTML-CSS-JavaScript](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web), [React](https://es.reactjs.org/docs/getting-started.html), [Angular](https://angular.io/start), [Vue](https://v1.vuejs.org/guide/), [Svelte](https://svelte.dev/blog/the-easiest-way-to-get-started), etc.

## Diseño de la API

Previo al desarrollo toda aplicación debe contar con una fase de diseño. Durante este periodo tendremos en cuenta las entidades que tenemos que modelar y la estrategia con la que abordaremos el desarrollo.

Se debe desarrollar una API con las siguientes características:

- El tema es de libre elección.
- La API debe constar de tres dominios:
  - USER
  - DOMINIO PRINCIPAL
  - DOMINIO SECUNDARIO
  Los tres dominios deben interaccionar entre si.
- Cada uno de los dominios debe tener implementado el CRUD completo con los siguientes servicios:
	1. Servicio para crear un nuevo registro en la base de datos.
	2. Servicio para eliminar un registro.
	3. Servicio para modificar un registro, se debe de considerar los casos de modificaciones por atributo, es decir, si los registros tienen un atributo nombre el servicio debe ser capaz de solo modificar el nombre. Así como una modificación total, es decir, de todos los atributos. Se recomienda definir servicios por separado para cada caso.
	4. Consulta por id.
	5. Consulta de todos los registros.
	6. Consulta por coincidencia de atributos, es decir, si los registros tienen un campo nombre el servicio debe ser capaz de devolver todos los registros que compartan el valor de nombre. Y esto debe funcionar en general para todos los campos de la base de datos.
	7. Servicio de consulta de todos los registros, limitado a un número determinado por el cliente.
	8. Servicio de consulta por campos, es decir, un servicio que solo devuelva los campos pedidos por el usuario.
- La API constará de un sistema de autenticación mediante JSON Web Token (JWT) para proteger los end-points que se consideren privados.
- La gestión de errores de la aplicación deberá centralizarse en un módulo genérico.

## Base de Datos
Se debe diseñar, construir y alimentar una base de datos que dé respuesta a las peticiones de datos del front-end.
La base de datos debe estar poblada con al menos 50 registros en su dominio principal, cada uno con un id.
La base de datos se desplegará junto con el resto de la aplicación.

## Front-end
El front-end deberá realizar las peticiones a la API utilizando la tecnología seleccionada.

## Despliegue de la aplicación
EL backend y la base de datos se desplegará en contenedores [Docker](https://www.docker.com/get-started) dentro del servidor [**heroku**](https://devcenter.heroku.com/start).
El front-end podrá desplegarse en un servidor web gratuito: [netlify](https://www.netlify.com/),[gh-pages](https://www.npmjs.com/package/gh-pages), [firebase](https://firebase.google.com/products/hosting?gclsrc=ds&gclsrc=ds&gclid=COXv8cGorvQCFWpFHQkdzwwCsA), etc.

## Presentaciones

Se realizarán presentaciones durante el desarrollo de la aplicación y a su finalización.

### Presentación 1
Presentación del proyecto,
Objetivos,
Descripción de los _end-points_

### Presentaciones 2, 3 y 4
Planificación del proyecto,
Avance,
Bloqueos,
Aportaciones

### Presentación Final
Apartados anteriores, más logros y apartado **qué he aprendido**.
Demostración del funcionamiento.


## Entregables
- Aplicación en entorno de Producción
- Repositorio de Github con código fuente y documentación.

**Código**
EL código estára estructurado en dos carpetas: **`api`** y **`client`**, con el código del backend y del fronted respectivamente.

**Documentación**
- Crear una Wiki con:
	- la info de las presentaciones
	- Información de los endpoint de la API
	- Diseños y modelos de la base de datos
	- Enlace al Trello con las historias de usuario y las tareas.
	- etc.
- Enlazar los apartados en el documento `readme.md` del proyecto

## ✅ Rúbrica de evaluación

Para la evaluación del proyecto se usará la siguiente rúbrica:

![](img/rubrica.jpg)


||1|2|3|
|Indicador|Deficiente|Regular|Excelente|
|---|---|---|---|
|Trabajo en equipo|Ha habido problemas de comunicación, alguno de los miembros del equipo no ha participado en el desarrollo y/o no conoce el funcionamiento de la API.|Se ha trabajado de forma modular, pero no se ha trabajado de forma equitativa en cuanto a cantidad y complejidad del trabajo. Ha habido algún problema de comunicación|Se dividió la carga de trabajo por igual, los dos han contribuido al desarrollo del trabajo y conocen por igual todos los detalles del proyecto|
|Documentación de la API| La documentación es incorrecta, omite servicios o estos no se corresponden con la implementación, no hay descripción de historias de usuario| La documentación es completa o faltan pocas especificaciones. Falta claridad en la descripción. Faltan historias de usuario y a las que hay les falta información| La documentación es clara y corresponde perfectamente a los servicios. Cuenta con descripciones detalladas y es intuitiva. Se describen las historias de usuario con tareas y criterios de aceptación asociados.|
|Implementación de la API|Hay requerimientos que no se resolvieron o su solución es incorrecta. El código es confuso y carece de buenas prácticas. Falta el desarrollo de muchos servicios o éstos son incorrectos. Las consultas a la bbdd son muy ineficientes, lo cual aumenta el tiempo de respuesta. El comportamiento de los endpoints no es el esperado.|Se resuelven satisfactoriamente los requerimientos especificados, pero el código podría mejorarse con buenas prácticas o limpieza. Sobra código o es redundante.|El código es limpio y está bien estructurado. Resuelve satisfactoriamente los requerimientos del proyecto. Se aplicaron buenas prácticas de programación: responsabilidad única, no es redundante y no mezcla capas de abstracción. Las conexiones a la bbbdd son eficientes.|
|Implementación del front-end|No hay un frontend dedicado o el que hay tiene un funcionamiento anómalo. No funcionan la mayoría de los endpoints y el resultado no se muestra de forma clara o directamente no se muestra correctamente. |El frontend funciona correctamente, interacciona con la mayoría de los end-points. El front-end es muy sencillo, no contiene navegación y/o no interactúa con la información recibidad|El frontend funciona correctamente, es capaz de interaccionar con todos los end-points de la API. Presenta cierta lógica de navegación en función de la información enviada y/o recibida|
|Comunicación del Proyecto|No quedan claros la motivación ni los requerimientos del proyecto. No es posible conocer la evolución del proyecto. La presentación es incompleta y carece de hilo conductor. No refleja para nada el trabajo realizado|Existe cierta calidad en la presentación aunque faltan apartados o estos no están claramente definidos. Existe cierto grado de confusión pero refleja el desarrollo|Las presentaciones están bien preparadas, se ajustan a los apartados requeridos y reflejan correctamente la evolución del proyecto.|
