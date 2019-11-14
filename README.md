# cinema-backend
Backend cinema for API's project

## Cómo ejecutarlo

Simplemente clonando el repositorio, y ejecutando luego los siguientes comandos:

```
npm install
npm start
```

Luego de esta ejecución el servidor estará escuchando en la dirección [localhost:8080](localhost:8080)

***

## Endpoints

```
http://localhost:8080/leerPelis
```

- Devuelve todas las películas que se encuentran en la base de datos, y dentro de ellas las funciones cargadas.

***

```
http://localhost:8080/leerSalas
```

- Devuelve todas las salas que se encuentran en la base de datos (endpoint de prueba).

***

```
http://localhost:8080/filtrarPelis
```

- Recibe el nombre de una película y devuelve la/las (array) películas que coincidan con el parámetro.
- Parámetro: name

***

```
http://localhost:8080/getFunciones
```

- Recibe el nombre de una película y devuelve las funciones asociadas a esa película.
- Parámetro: name
- Devuelve: array JSON

***

```
http://localhost:8080/getMapa
```

- Recibe el id de una sala y devuelve el mapa de asientos listo para insertar en el componente react-seat-picker
- Parámetro: id

***
