const ContainerAll = document.querySelector("#lista");
let url = "https://swapi.py4e.com/api/people/?page=";
let url2 = "https://swapi.py4e.com/api/films/";
let url3 = "https://swapi.py4e.com/api/vehicles/?page=";
let url4 = "https://swapi.py4e.com/api/species/?page=";
let url5 = "https://swapi.py4e.com/api/planets/?page=";
let url6 = "https://swapi.py4e.com/api/starships/?page=";




async function obtener(url, callback, llave1, llave2,titulo, img) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    callback(data.results, llave1, llave2, titulo, img);
    console.log(data.results);
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
  }
}
async function obtener_multiples(url, callback, llave1, llave2, titulo,img) {
  let todosArrays = [];
  for (let i = 1; i < 10; i++) {
    try {
      const response = await fetch(url + i);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        todosArrays = todosArrays.concat(data.results);
      } else {
        console.log(`No hay datos en la página ${i}`);
      }
    } catch (error) {
      console.error("Error al obtener los personajes:", error);
    }
  } console.log(todosArrays)
  callback(todosArrays, llave1, llave2,titulo,img);
}
function mayus(llave1) {
  let mayuscula = llave1[0].toUpperCase() + llave1.substring(1);
  return mayuscula;
}

let Remplazo_titulo = document.createElement("h2")
let contenedor_padre = document.getElementById("Planetas")
let img1 = "https://i.gifer.com/fy8R.gif"
function mostrarPersonajes_funciongeneral(data, llave1, llave2,titulo,img) {
  Remplazo_titulo.classList.add("titulo9")
  Remplazo_titulo.textContent = titulo
  contenedor_padre.replaceChild(Remplazo_titulo, document.querySelector("h3"))
  const imagen = document.getElementById("imagencontenedor")
  imagen.setAttribute("src",img)
  ContainerAll.innerHTML = "";
  data.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <div class="ContainerUnidad">
                 <img src="./Multimedia/Personajes.png" alt="" class = "img">
                <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class=" label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"}</p>
                </div>
            </div>
        `;
    ContainerAll.append(div);
  });
   
}
