import { cargarInformacion } from "./utils.js";

const render = async () => {
  const response = await cargarInformacion();
  console.log(response);

  const agregarTarea = (nombre, terminada) => {
    const lista = document.querySelector("#lista");
    const nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("lista__tarea");

    const nombreTarea = document.createElement("p");
    nombreTarea.textContent = nombre;
    nuevaTarea.appendChild(nombreTarea);

    const estadoTarea = document.createElement("p");
    estadoTarea.textContent = terminada ? "Terminada" : "Pendiente";
    nuevaTarea.appendChild(estadoTarea);

    if (terminada) {
      nuevaTarea.classList.add("lista__tarea--terminada");
    } else {
      nuevaTarea.classList.add("lista__tarea--pendiente");
    }

    lista.appendChild(nuevaTarea);
  };

  document
    .getElementById("formulario")
    .addEventListener("submit", function (evento) {
      evento.preventDefault();
      const nombre = document.getElementById("nombreTarea").value;
      const terminada = document.getElementById("estadoTarea").checked;
      agregarTarea(nombre, terminada);
      document.getElementById("nombreTarea").value = "";
      document.getElementById("estadoTarea").checked = false;
    });

  const lista = document.getElementById("lista");

  for (let i = 0; i < response.length; i++) {
    const nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("lista__tarea");
    nuevaTarea.textContent = response[i].nombre;

    const estadoTarea = document.createElement("p");
    estadoTarea.textContent = response[i].terminada ? "Terminada" : "Pendiente";
    nuevaTarea.appendChild(estadoTarea);

    if (response[i].terminada) {
      nuevaTarea.classList.add("lista__tarea--terminada");
    } else {
      nuevaTarea.classList.add("lista__tarea--pendiente");
    }

    lista.appendChild(nuevaTarea);
  }
};

document.addEventListener("DOMContentLoaded", render);