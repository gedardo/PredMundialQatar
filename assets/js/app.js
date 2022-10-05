let array = []
const validarArrayPred = () => {
    if (JSON.parse(localStorage.getItem("prediccion"))) {
        array = JSON.parse(localStorage.getItem("prediccion"));
        return array;
    } else {
        return false
    }
}

function compare_id( a, b )
  {
  if ( a.idPartido < b.idPartido){
    return -1;
  }
  if ( a.idPartido > b.idPartido){
    return 1;
  }
  return 0;
}

function cargarPredicciones() {
    if (validarArrayPred()) {
        array.sort(compare_id)
        estado.innerText += `\nPredicciones realizadas`
        tabla.innerHTML = ""
        let columna = `<thead>
                        <tr>
                            <th>GRUPO</th>
                            <th>PARTIDO A DISPUTAR</th>
                            <th>PREDICCION ELEGIDA</th>
                            <th>RESULTADO</th>
                        </tr>
                    </thead>`
        tabla.innerHTML += columna
        let fila = ""
        array.forEach(Prediccion => {
            let i = partidos.find(i => Prediccion.idPartido == i.idPartido)
            fila = `<tr>
                     <th>${i.idGrupo}</th>
                    <td>${i.equipo1} vs ${i.equipo2}</td>
                    <td>${Prediccion.resEquipo1} a ${Prediccion.resEquipo2}</td>
                    <td>${Prediccion.resultado}</td>
                </tr>`
            tabla.innerHTML += fila//  <td>${Prediccion.idPartido}</td>
        })
        document.getElementById("borrarPred").style.display = 'inline';
        document.getElementById("guardarPred").style.display = 'none';
        ocultarDiv(divPred)
        mostrarDiv(tabla)
    } else {
        mostrarDiv(divPred)
        document.getElementById("guardarPred").style.display = 'inline';
    }
}

function generarCards() {
    partidos.forEach(t => {
        let divGrupo = document.querySelector(`#${t.idGrupo}`)
        if (divGrupo === null) {
            divCards.innerHTML += `<div class="tab-pane" id=${t.idGrupo}>
            <div class="row d-flex icon-boxes" id="partidosG${t.idGrupo}">
                <div class="col-6 col-md-4 col-lg-3 d-flex align-items-stretchmb-lg-0">
                    <div class="">
                       <img src="assets/img/${t.idGrupo}.jpg" height="260px" width="190px"></a>
                    </div>
                </div>
            </div>
          </div>`
        }
        let divPartidos = document.querySelector(`#partidosG${t.idGrupo}`)
        divPartidos.innerHTML += `<div class="col-6 col-md-4 col-lg-3 d-flex align-items-stretch mb-lg-0">
        <div class="icon-box">
            <div class="cardsPredicciones" id=${t.idPartido}>
              <strong>${t.equipo1} Vs ${t.equipo2}</strong>
              <div>
                <label for="" id="labelEquipo1">${t.equipo1}</label>
                <input type="number" class ="inputRes" id="resEquipo1${t.idPartido}">
              </div>
              <img src="assets/img/vs.png" height="40em"></a>
              <div>
                <label for="" id="labelEquipo2">${t.equipo2}</label>
                <input type="number" class ="inputRes" id="resEquipo2${t.idPartido}">
              </div>
              <h4 class="textResult" id="resultado${t.idPartido}"></h4>
            </div>
        </div>
      </div>`
    })
    eventoInputs()//col-xs-4
}

function eventoInputs() {
    let inputsRes = document.querySelectorAll(".inputRes")
    inputsRes.forEach(element => {
        element.addEventListener("blur", () => generarPredUsuario(element.id.substring(10)))
    });
}

function generarPredUsuario(div) {
    let t = partidos.find(i => div == i.idPartido)
    let inputResE1 = document.getElementById(`resEquipo1${t.idPartido}`)
    let inputResE2 = document.getElementById(`resEquipo2${t.idPartido}`)
    let textResult = document.getElementById(`resultado${t.idPartido}`)
    let resE1 = parseInt(inputResE1.value)
    let resE2 = parseInt(inputResE2.value)
    let res = ""
debugger
    if (resE1 != NaN && resE2 != NaN) {
        if (resE1 > resE2) { res = "Ganador " + t.equipo1 }
        if (resE1 < resE2) { res = "Ganador " + t.equipo2 }
        if (resE1 == resE2) { res = "Empate" }

        const pred = {
            idPartido: t.idPartido,
            resEquipo1: resE1,
            resEquipo2: resE2,
            resultado: res,
        }
        if (validarArrayPred() && array) {
            let partidoEnArray = array.findIndex((p) => p.idPartido === pred.idPartido)
            if (partidoEnArray >= 0) {
                array.splice(partidoEnArray, 1, pred)
            } else {
                array.push(pred)
            }
        } else {
            array.push(pred)
        }
        localStorage.setItem("prediccion", JSON.stringify(array))
        textResult.innerText = (res)
    }
}

const filtrarOficina = (inmuebleId) => {
    const oficinasFiltradas = oficinas.filter((o) => (o.inmueble == inmuebleId));
    cargarCombo(oficina, oficinasFiltradas);
}

function borrarInputs() {
    let inputsRes = document.querySelectorAll(".inputRes")
    inputsRes.forEach(element => {
        element.value = ""
    });
    let textResult = document.querySelectorAll(".textResult")
    textResult.forEach(element => {
        element.innerText = ""
    });
}

function cargarInputs() {
    let arrayCargarPredicciones = JSON.parse(localStorage.getItem("prediccion"))
    let inputsRes = document.querySelectorAll(".inputRes")
    inputsRes.forEach(element => {
        let idBuscar = element.id.substring(10)
        const pred = arrayCargarPredicciones.find(i => idBuscar == i.idPartido)
        if (pred) {
            ((element.id.substring(9)) >= 200) ? element.value = pred.resEquipo2 : element.value = pred.resEquipo1
            let textResult = document.getElementById(`resultado${pred.idPartido}`)
            textResult.innerText = pred.resultado
        }
    });
}

function modificarPred() {
    estado.innerText = ""
    document.getElementById("borrarPred").style.display = 'none';
    document.getElementById("guardarPred").style.display = 'inline';
    ocultarDiv(tabla)
    mostrarDiv(divPred)
    cargarInputs()
}

botonGuardar.addEventListener("click", () => cargarPredicciones())
botonBorrar.addEventListener("click", () => modificarPred())
document.addEventListener('DOMContentLoaded', generarCards())