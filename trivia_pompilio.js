// ----------------------------------------------------
// FUNCION PARA INICIAR LA TRIVIA
// Se llama cuando el usuario hace clic en el botón
// ----------------------------------------------------
function iniciarTrivia() {
    // Declaración de la variable de puntaje
    let puntaje = 0; 
    }

    // ----------------------------------------------------
    // PREGUNTA 1: Sobre su Orden Religiosa
    // ----------------------------------------------------
    let pregunta1 = prompt("Pregunta 1: ¿A qué Orden Religiosa se unió San Pompilio? (Escribe: Escolapios)");
    
    // VERIFICACIÓN DE SEGURIDAD: Revisa si el usuario escribió algo y presionó Aceptar.
    if (pregunta1) { 
        if (pregunta1.toLowerCase() === "escolapios") {
            alert("¡Correcto! Perteneció a los Escolapios.");
            puntaje = puntaje + 1; 
        } else {
            alert("Incorrecto. La respuesta correcta era Escolapios.");
        }
    } else {
        // Si el usuario cancela o deja vacío, el script termina aquí de forma segura.
        alert("Trivia detenida. Tu puntaje parcial es: " + puntaje + " de 3.");
        return; 
    }

    // ----------------------------------------------------
    // PREGUNTA 2: Sobre su Frase Famosa
    // ----------------------------------------------------
    let pregunta2 = prompt("Pregunta 2: ¿Cuál era la frase que él siempre decía? (Escribe: Jesus y Maria)");
    
    // VERIFICACIÓN DE SEGURIDAD
    if (pregunta2) {
        if (pregunta2.toLowerCase().includes("jesus y maria")) { 
            alert("¡Muy bien! Esa era su frase famosa.");
            puntaje = puntaje + 1; 
        } else {
            alert("Incorrecto. Su frase era: 'Jesús y María, amor mío'.");
        }
    } else {
        alert("Trivia detenida. Tu puntaje parcial es: " + puntaje + " de 3.");
        return; 
    }

    // ----------------------------------------------------
    // PREGUNTA 3: Sobre el siglo en que vivió
    // ----------------------------------------------------
    let pregunta3 = prompt("Pregunta 3: ¿En qué siglo nació San Pompilio? (Escribe el número, ejemplo: 18)");
    
    // VERIFICACIÓN DE SEGURIDAD
    if (pregunta3) {
        if (pregunta3 === "18" || pregunta3.toLowerCase() === "xviii") {
            alert("¡Correcto! Nació en el siglo 18 (XVIII).");
            puntaje = puntaje + 1; 
        } else {
            alert("Incorrecto. Nació en el siglo 18 (XVIII).");
        }
    } else {
        alert("Trivia detenida. Tu puntaje parcial es: " + puntaje + " de 3.");
        return; 
    }
    
    // ----------------------------------------------------
    // FINAL DE LA TRIVIA: Mostrar el puntaje
    // ----------------------------------------------------
    alert("¡Trivia Terminada!\nTu puntaje final es: " + puntaje + " de 3.");