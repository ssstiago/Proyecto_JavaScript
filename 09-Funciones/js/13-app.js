
// Ejemplo de aplicacion con arrowFunction en metodos de propiedad

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id} `),
    pausar: () => console.log('pusando...'),
    reproduciendo: id => console.log(`Reproduciendo cancion con el id ${id}`),
    borrar: id => console.log(`Borrando cancion... id ${id}`),
    crearPlayList: nombre => console.log(`Creando las playList de ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Ańadiendo ${this.cancion}`);
    },
    
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(30);
reproductor.reproduciendo(30);
reproductor.borrar(30);
reproductor.crearPlayList('Heavy_Metal');
reproductor.crearPlayList('Rock 90s');