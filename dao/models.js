class Pelicula {
    constructor () {
        this.id = null;
        this.nombre = '';
        this.lanzamiento = '';
        this.genero = '';
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setNombre(nombre) {
        this.nombre = nombre;
        return this;
    }

    setLanzamiento(lanzamiento) {
        this.lanzamiento = lanzamiento;
        return this;
    }

    setGenero(genero) {
        this.genero = genero;
        return this;
    }

    build() {
        return {
            id: this.id,
            nombre: this.nombre,
            lanzamiento: this.lanzamiento,
            genero: this.genero
        }
    }
}

module.exports = Pelicula;