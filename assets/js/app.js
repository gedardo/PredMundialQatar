const predicciones = []
const partidos = []
const usuarios = []

class Prediccion {
    constructor(id, partido, resultado) {
        this.id = id
        this.partido = partido
        this.resultado = resultado
    }
}

class Partido {
    constructor(id, partido) {
        this.id = id
        this.partido = partido
    }
}

class Usuario {
    constructor(nombre, pass) {
        this.nombre = nombre
        this.pass = pass
    }
}

function generadorPartidos() {
    partidos.push(new Partido(11, "ARGENTINA VS BRASIL"))
    partidos.push(new Partido(12, "ARGENTINA VS MEXICO"))
    partidos.push(new Partido(13, "BRASIL VS MEXICO"))
    partidos.push(new Partido(21, "ECUADOR VS COLOMBIA"))
    partidos.push(new Partido(22, "ECUADOR VS PANAMA"))
    partidos.push(new Partido(23, "COLOMBIA VS PANAMA"))
    partidos.push(new Partido(31, "CHILE VS BOLIVIA"))
    partidos.push(new Partido(32, "CHILE VS VENEZUELA"))
}

function generadorPredicciones() {
    predicciones.push(new Prediccion("gap1l", "ARGENTINA VS MEXICO", "ARGENTINA"))
    predicciones.push(new Prediccion("gap1e", "ARGENTINA VS MEXICO", "EMPATE"))
    predicciones.push(new Prediccion("gap1v", "ARGENTINA VS MEXICO", "MEXICO"))
    predicciones.push(new Prediccion("gap2l", "ARGENTINA VS POLONIA", "ARGENTINA"))
    predicciones.push(new Prediccion("gap2e", "ARGENTINA VS POLONIA", "EMPATE"))
    predicciones.push(new Prediccion("gap2v", "ARGENTINA VS POLONIA", "POLONIA"))
    predicciones.push(new Prediccion("gap3l", "POLONIA VS MEXICO", "POLONIA"))
    predicciones.push(new Prediccion("gap3e", "POLONIA VS MEXICO", "EMPATE"))
    predicciones.push(new Prediccion("gap3v", "POLONIA VS MEXICO", "MEXICO"))
    predicciones.push(new Prediccion("gap4l", "PERU VS MEXICO", "PERU"))
    predicciones.push(new Prediccion("gap4e", "PERU VS MEXICO", "EMPATE"))
    predicciones.push(new Prediccion("gap4v", "PERU VS MEXICO", "MEXICO"))
    predicciones.push(new Prediccion("gap5l", "ARGENTINA VS PERU", "ARGENTINA"))
    predicciones.push(new Prediccion("gap5e", "ARGENTINA VS PERU", "EMPATE"))
    predicciones.push(new Prediccion("gap5v", "ARGENTINA VS PERU", "PERU"))
    predicciones.push(new Prediccion("gap6l", "PERU VS POLONIA", "PERU"))
    predicciones.push(new Prediccion("gap6e", "PERU VS POLONIA", "EMPATE"))
    predicciones.push(new Prediccion("gap6e", "PERU VS POLONIA", "POLONIA"))
}

generadorPartidos()
generadorPredicciones()

function generarPrediccion() {
    let idPartido = parseInt(prompt("ingresa el numero de partido a predecir:"))
    let resultado = partidos.find((partido) => partido.id === idPartido)
    if (resultado !== undefined) {
        let prediccionPartido = prompt(`el partido es: ${resultado.partido}. Ingresa tu prediccion:`)
        nuevaPrediccion = new Prediccion(resultado.id, resultado.partido, prediccionPartido)
        console.log(nuevaPrediccion)
    } else {
        console.warn("No se encontró el numero de partido.")
    }
}

function listarPartidos() {
    partidos.forEach((partido) => {
        console.table(partido)
    })
    console.table(partidos)
}


texto = `<div class="col-xs-12 col-sm-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div id=${t.grupoId}>
                <div class="container" id=${t.partidoId}>
                  <strong>${t.equipo1} Vs ${t.equipo2}</strong><br><br>
                  <div>
                    <label for="" id="label${t.equipo1}">${t.equipo1}</label>
                    <input type="number" id="resEquipo1">
                  </div>
                  <div>
                    <label for="" id="labelEquipo2">${t.equipo2}</label>
                    <input type="number" id="resEquipo2">
                  </div>
                  <h4 id="ganador">Ganador Argentina</h4>
                </div>
              </div>
            </div>
        </div>`