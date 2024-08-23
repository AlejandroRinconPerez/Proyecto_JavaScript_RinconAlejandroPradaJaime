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

//Lammados hechos con URL X8

obtener_multiples(url, mostrarPersonajes_funciongeneral,"name", "height","Personajes",img1)
// obtener_multiples(url, mostrarPersonajes_funciongeneral,"name", "birth_year" ,"Personajes")
// obtener_multiples(url, mostrarPersonajes_funciongeneral,"name", "eye_color" ,"Personajes")
// obtener_multiples(url, mostrarPersonajes_funciongeneral,"name", "hair_color" ,"Personajes")

// obtener_multiples(url, mostrarPersonajes_funciongeneral,"name", "skin_color","Personajes" )
// obtener_multiples(url, mostrarPersonajes_funciongeneral,"name", "gender" ,"Personajes")
// obtener_multiples(url, mostrarPersonajes_funciongeneral,"name", "birth_year" ,"Personajes")

//Lammados hechos con URL2 X6
// obtener(url2,mostrarPersonajes_funciongeneral,"title","director","Peliculas");
// obtener(url2,mostrarPersonajes_funciongeneral,"title","episode_id","Peliculas");
// obtener(url2,mostrarPersonajes_funciongeneral,"title","edited","Peliculas");
// obtener(url2,mostrarPersonajes_funciongeneral,"title","opening_crawl","Peliculas");
// obtener(url2,mostrarPersonajes_funciongeneral,"title","producer","Peliculas");
// obtener(url2,mostrarPersonajes_funciongeneral,"title","release_date","Peliculas");


//Lammados hechos con URL3 X11
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "cargo_capacity" )
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "consumables" )
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "cost_in_credits" )
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "created" )
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "crew" )
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "length" )
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "manufacturer" )
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "max_atmosphering_speed" )
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "model" )
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "passengers" )
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "vehicle_class" )


//llamados hechos con URL4 X5
// obtener_multiples(url4, mostrarPersonajes_funciongeneral,"name", "classification" )
// obtener_multiples(url4, mostrarPersonajes_funciongeneral,"name", "designation" )
// obtener_multiples(url4, mostrarPersonajes_funciongeneral,"name", "language" )
// obtener_multiples(url4, mostrarPersonajes_funciongeneral,"name", "average_height" )
// obtener_multiples(url4, mostrarPersonajes_funciongeneral,"name", "average_lifespan" )

//llamador URL 5 X 7

//obtener_multiples(url5, mostrarPersonajes_funciongeneral,"name","diameter" )
// obtener_multiples(url5, mostrarPersonajes_funciongeneral,"name","rotation_period" )
// obtener_multiples(url5, mostrarPersonajes_funciongeneral,"name","orbital_period" )
// obtener_multiples(url5, mostrarPersonajes_funciongeneral,"name","gravity" )
// obtener_multiples(url5, mostrarPersonajes_funciongeneral,"name","population" )
// obtener_multiples(url5, mostrarPersonajes_funciongeneral,"name","population" )
// obtener_multiples(url5, mostrarPersonajes_funciongeneral,"name","surface_water" )



//llamador URL 6 x5
// obtener_multiples(url6, mostrarPersonajes_funciongeneral,"name","model" )
// obtener_multiples(url6, mostrarPersonajes_funciongeneral,"name","starship_class" )
// obtener_multiples(url6, mostrarPersonajes_funciongeneral,"name","passengers" )
// obtener_multiples(url6, mostrarPersonajes_funciongeneral,"name","hyperdrive_rating" )
// obtener_multiples(url6, mostrarPersonajes_funciongeneral,"name","consumables" )