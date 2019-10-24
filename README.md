# cinema-backend
Backend cinema for API's project

## Cómo ejecutarlo

Simplemente clonando el repositorio, y ejecutando luego los siguientes comandos:

```
npm install
npm run
```

Luego de esta ejecución el servidor estará escuchando en la dirección [localhost:8080](localhost:8080)

## Endpoints

Las llamadas al backend se hacen concatenando la string del endpoint correspondiente a la siguiente ruta por defecto

```
http://localhost:8080/apiCine
```

* /leerPelis

Devuelve todas las películas que se encuentran en la base de datos, y dentro de ellas las funciones cargadas.

