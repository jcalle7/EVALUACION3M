let personajes = ["Robert Dudley", "Reina Isabel I"];

const preguntas = [
    {
        pregunta: "¿Cuál fue el título noble de Robert Dudley?",
        opciones: ["Conde de Essex", "Duque de Norfolk", "Conde de Leicester"],
        respuestaCorrecta: "Conde de Leicester"
    },
    {
        pregunta: "¿Cómo era conocida la relación entre Robert Dudley y la Reina Isabel I?",
        opciones: ["Amigos íntimos", "Primos lejanos", "Amantes"],
        respuestaCorrecta: "Amigos íntimos"
    },
    {
        pregunta: "¿Cuál fue el título que ostentaba la Reina Isabel I de Inglaterra?",
        opciones: ["Duquesa de York", "Reina consorte", "Reina soberana"],
        respuestaCorrecta: "Reina soberana"
    },
    {
        pregunta: "¿En qué año murió Robert Dudley?",
        opciones: ["1588", "1603", "1642"],
        respuestaCorrecta: "1588"
    },
    {
        pregunta: "¿Cómo murió la Reina Isabel I?",
        opciones: ["Envenenada", "De vejez", "Decapitada"],
        respuestaCorrecta: "De vejez"
    }
];

function jugar() {
    for (let i = 0; i < preguntas.length; i++) {
        const respuestaUsuario = prompt(`${preguntas[i].pregunta}\n${preguntas[i].opciones.join('\n')}`);

        if (respuestaUsuario.toLowerCase() !== preguntas[i].respuestaCorrecta.toLowerCase()) {
            eliminarPersonaje();
        }
    }

    mostrarResultado();
}

function eliminarPersonaje() {
    if (personajes.length > 0) {
        const personajeEliminado = personajes.pop();
        alert(`Respuesta incorrecta. ${personajeEliminado} ha sido eliminado.`);
        
        delete personajeEliminado;
    }
}


function mostrarResultado() {
    if (personajes.length > 0) {
        alert("¡Felicidades! Has salvado a Robert Dudley y a Isabel I de Inglaterra");
    } else {
        alert("¡Has perdido todos los personajes! Fin del juego.");
    }
}

jugar();
