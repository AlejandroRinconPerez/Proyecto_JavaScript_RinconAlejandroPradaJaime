const ContainerAll = document.querySelector("#lista");
let url = "https://swapi.py4e.com/api/people/?page=";
let url2 = "https://swapi.py4e.com/api/films/";
let url3 = "https://swapi.py4e.com/api/vehicles/?page=";
let url4 = "https://swapi.py4e.com/api/species/?page=";
let url5 = "https://swapi.py4e.com/api/planets/?page=";
let url6 = "https://swapi.py4e.com/api/starships/?page=";

async function obtener(url, callback, llave1, llave2, titulo, img) {
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
async function obtener_multiples(url, callback, llave1, llave2, titulo, img) {
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
  }
  console.log(todosArrays);
  callback(todosArrays, llave1, llave2, titulo, img);
}
function mayus(llave1) {
  let mayuscula = llave1[0].toUpperCase() + llave1.substring(1);
  return mayuscula;
}



let img1 = "https://i.pinimg.com/originals/9b/f6/9e/9bf69e82d471f2f94dc8223043730d06.gif";
let img2 ="https://media.tenor.com/uT-0_4jiNKYAAAAj/krrsantan-wookie.gif"
let img3 = "https://i.pinimg.com/originals/f1/e6/73/f1e673dd44795b6b50bf3941093932b2.gif";
let img4 = "https://i.pinimg.com/originals/81/35/24/8135244303e3859332cd4124ef727a2c.gif";
let img5 = "https://cdn.pixabay.com/animation/2023/06/30/16/16/16-16-16-137_512.gif";
let img6 = "https://www.komar.de/media/catalog/product/cache/13/image/9df78eab33525d08d6e5fb8d27136e95/0/2/026-dvd2_star_wars_poster_classic_1_web.jpg";

let Remplazo_titulo = document.createElement("h2");
let contenedor_padre = document.getElementById("Contenedor");

function mostrarPersonajes_funciongeneral(data, llave1, llave2, titulo, img) {
  Remplazo_titulo.classList.add("titulo1");
  Remplazo_titulo.textContent = titulo;
  contenedor_padre.replaceChild(Remplazo_titulo, contenedor_padre.querySelector("h1"));
  let contendor_img = document.getElementById("ContenedorImagen");
  const imagen = document.createElement("img");
  imagen.setAttribute("src", img);
  contendor_img.replaceWith(imagen);
  contenedor_padre.classList.replace("Contenedor", "ContenedorPrincipal")
  ContainerAll.classList.replace("ContainerPadre", "ContenedorPadre")
  imagen.classList.add("imagencontenedor1");
  ContainerAll.innerHTML = "";
  data.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <div class="ContainerUnidad">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <img src="./Multimedia/Personajes.png" alt="Logo" class="logop">
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"}</p>
                </div>
            </div>
        `;
    ContainerAll.append(div);
  });
}

//Lammados hechos con URL X8

obtener_multiples(url,mostrarPersonajes_funciongeneral,"name","height","Characters",img1);
// obtener_multiples(url, mostrarPersonajes_funciongeneral,"name", "birth_year" ,"Characters")
//obtener_multiples(url, mostrarPersonajes_funciongeneral,"name", "eye_color" ,"Characters", img1)
// obtener_multiples(url, mostrarPersonajes_funciongeneral,"name", "hair_color" ,"Characters")
// obtener_multiples(url, mostrarPersonajes_funciongeneral,"name", "skin_color","Characters" )
// obtener_multiples(url, mostrarPersonajes_funciongeneral,"name", "gender" ,"Characters")


//Lammados hechos con URL2 X6
// obtener(url2,mostrarPersonajes_funciongeneral,"title","director","Movies,img1");
// obtener(url2,mostrarPersonajes_funciongeneral,"title","episode_id","Movies",img1);
// obtener(url2,mostrarPersonajes_funciongeneral,"title","edited","Movies",img1);
// obtener(url2,mostrarPersonajes_funciongeneral,"title","opening_crawl","Movies",img1); No usar
// obtener(url2,mostrarPersonajes_funciongeneral,"title","producer","Movies",img1);
// obtener(url2,mostrarPersonajes_funciongeneral,"title","release_date","Movies",img1);

//Lammados hechos con URL3 X11
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "cargo_capacity","Vehicle", img2)
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "consumables","Vehicle", img2 )
//obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "cost_in_credits" ,"Vehicle", img4)
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "created" ,"Vehicle", img2)
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "crew" )
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "length","Vehicle", img2 )
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "manufacturer" ,"Vehicle", img2)
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "max_atmosphering_speed","Vehicle", img2 )
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "model" ,"Vehicle", img2)
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "passengers" ,"Vehicle", img2)
// obtener_multiples(url3, mostrarPersonajes_funciongeneral,"name", "vehicle_class" ,"Vehicle", img2)

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
