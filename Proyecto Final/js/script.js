async function cargarConsejo(){

    try{

        const respuesta =
        await fetch("https://api.adviceslip.com/advice");

        const datos =
        await respuesta.json();

        document.getElementById("consejo").textContent =
        datos.slip.advice;

    }

    catch(error){

const consejo = document.getElementById("consejo");

if(consejo){
    // Código de la API aquí
        }
    }

}

// =======================
// Transición entre páginas
// =======================

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        const destino = this.href;

        if(destino && !destino.includes("#")){

            e.preventDefault();

            document.body.classList.remove("loaded");

            setTimeout(() => {
                window.location.href = destino;
            }, 500);

        }

    });

});

const formulario = document.getElementById("formulario");

if(formulario){
    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Mensaje enviado correctamente.");
        formulario.reset();
    });
}


