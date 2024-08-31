const ContainerAll = document.querySelector("#Contenedor");
let urlfilms = "https://swapi.py4e.com/api/films/";
let urlstarships = "https://swapi.py4e.com/api/starships/?page=";
let urlspecies = "https://swapi.py4e.com/api/species/?page=";

const imgfilms = "https://media1.tenor.com/m/S4QeM-pB0IoAAAAC/obi-wan-kenobi-anakin-skywalker.gif";


async function obtener(url, callback, llave1, llave2, titulo, img, ordenar) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (ordenar) {
      data.results = ordenar(data.results);
    }

    callback(data.results, llave1, llave2, titulo, img);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

function ordenarPorTitulo(data) {
  return data.sort((a, b) => a.title.localeCompare(b.title));
}

function ordenarPorEpisodio(data) {
  return data.sort((a, b) => a.episode_id - b.episode_id);
}


async function obtener_multiples4(url, callback, llave1, llave2, titulo, img,  num) {
  let contador = 0
  let todosArrays = [];
  for (let i = 1; i < num; i++) {
    try {
      const response = await fetch(url + i);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        contador =contador + 1
        todosArrays = todosArrays.concat(data.results);
      } else {
        console.log(`No hay datos en la página ${i}`);
      }
    } catch (error) {
      console.error("Error al obtener los personajes:", error);
    }
  }
  console.log(todosArrays);
  console.log(contador)
  callback(todosArrays, llave1, llave2, titulo, img);
}

function mostrarPersonajes_funciongeneral_foto(data, llave1, llave2, titulo, img) {
  ContainerAll.innerHTML = "";
   let i =1
  data.forEach((element) => {
    let imagenSrc = "./Multimedia/naves.webp";
    switch (titulo) {

      case "species":
        imagenSrc = `https://starwars-visualguide.com/assets/img/species/${i}.jpg`;
        break;
      case "films":
        imagenSrc = `https://starwars-visualguide.com/assets/img/films/${i}.jpg`;
        break;
      case "starships": 
        imagenSrc = `./Multimedia/naves.webp`;
        break
      default:
        imagenSrc = img; 
    }

    const div = document.createElement("div");
    div.innerHTML = `
            <div class="ContainerUnidad">
            <img src="${imagenSrc}">
                 <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"}</p>
                </div>
            </div>
        `;
    ContainerAll.append(div);
    i++;
  });
}

function mayus(llave1) {
  let mayuscula = llave1[0].toUpperCase() + llave1.substring(1);
  return mayuscula;
}
const modelo = document.querySelector("#model");
modelo.addEventListener("click", function() {
  obtener_multiples4(urlstarships, mostrarPersonajes_funciongeneral_foto, "name", "model", "starships", imgfilms,5);
});
const naveclase = document.querySelector("#starship_class");
naveclase.addEventListener("click", function() {
  obtener_multiples4(urlstarships, mostrarPersonajes_funciongeneral_foto, "name", "starship_class", "starships", imgfilms,5);
});

const MGLT = document.querySelector("#MGLT");
MGLT.addEventListener("click", function() {
  obtener_multiples4(urlstarships, mostrarPersonajes_funciongeneral_foto, "name", "MGLT", "starships", imgfilms,5);
});

const designacion = document.querySelector("#designation");
designacion.addEventListener("click", function() {
  obtener_multiples4(urlspecies, mostrarPersonajes_funciongeneral_foto, "name", "designation", "species", imgfilms,5);
});
const clasificacion = document.querySelector("#classification");
clasificacion.addEventListener("click", function() {
  obtener_multiples4(urlspecies, mostrarPersonajes_funciongeneral_foto, "name", "classification", "species", imgfilms,5);
});


const botonnombre = document.querySelector("#director");
botonnombre.addEventListener("click", function() {
  obtener(urlfilms, mostrarPersonajes_funciongeneral_foto, "title", "director", "films", imgfilms);
});

const botonproducer = document.querySelector("#producer");
botonproducer.addEventListener("click", function() {
  obtener(urlfilms, mostrarPersonajes_funciongeneral_foto, "title", "producer", "films", imgfilms);
});

const botonrelease = document.querySelector("#release_date");
botonrelease.addEventListener("click", function() {
  obtener(urlfilms, mostrarPersonajes_funciongeneral_foto, "title", "release_date", "films", imgfilms);
});

const botonepisode = document.querySelector("#episode");
botonepisode.addEventListener("click", function() {
  obtener(urlfilms, mostrarPersonajes_funciongeneral_foto, "title", "episode_id", "films", imgfilms);
});

const botonordenado = document.querySelector("#ordenado");
botonordenado.addEventListener("click", function() {
  obtener(urlfilms, mostrarPersonajes_funciongeneral_foto, "title", "episode_id", "films", imgfilms, ordenarPorEpisodio);
});

