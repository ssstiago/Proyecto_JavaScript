
// Ańadiendo funciones dentre de un Objeto

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id} `);
    },
    pausar: function() {
        console.log('pusando...')
    },
    reproduciendo: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    borrar: function(id) {
        console.log(`Borrando cancion... id ${id}`);
    },
    crearPlayList: function(nombre) {
        console.log(`Creando las playList de ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(30);
reproductor.reproduciendo(30);
reproductor.borrar(30);
reproductor.crearPlayList('Heavy_Metal');
reproductor.crearPlayList('Rock 90s');