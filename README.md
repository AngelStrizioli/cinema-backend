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

```
http://localhost:8080/guardarVenta
```

- Recibe una venta con el formato detallado abajo (así debe armarse el body) y la guarda en la base de datos

```js
{
    "id": 1,
    "pelicula": "NombrePeli",
    "funcion": "23-11-2019 15:30",
    "asientos": ["23", "24"],
    "total": 450,
    "usuario": "usuario1",
    "fecha": "2019-11-18T06:18:15.000+00:00",
    "tarjeta": {
    	"numero": "4156987845454545",
    	"fechaVto": "02/21",
    	"codSeg": "331",
    	"nombre": "alberto perez de ruculacion"
    }
}
```

***

```
http://localhost:8080/getVentasUsuario
```

- Recibe un nombre de usuario y devuelve todas las compras que haya efectuado
- Parámetro: username



