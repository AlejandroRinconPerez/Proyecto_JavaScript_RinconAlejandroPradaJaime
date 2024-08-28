const menu = document.querySelector(".header__list");
const abrir = document.querySelector(".open");
const cerrar = document.querySelector(".close");


abrir.addEventListener("click",()=>{
  menu.classList.add("visible")
});

cerrar.addEventListener("click",()=>{
  menu.classList.remove("visible")
});


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
async function obtener_multiples(url, callback, llave1, llave2, titulo, img,  num ,Tipo) {
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
function mayus(llave1) {
  let mayuscula = llave1[0].toUpperCase() + llave1.substring(1);
  return mayuscula;
}



let imgcharacters = "https://i.pinimg.com/originals/9b/f6/9e/9bf69e82d471f2f94dc8223043730d06.gif";
let imgspecies ="https://media.tenor.com/uT-0_4jiNKYAAAAj/krrsantan-wookie.gif"
let imgstarships = "https://i.pinimg.com/originals/f1/e6/73/f1e673dd44795b6b50bf3941093932b2.gif";
let imgvehicles = "https://i.pinimg.com/originals/81/35/24/8135244303e3859332cd4124ef727a2c.gif";
let imgplanets = "https://cdn.pixabay.com/animation/2023/06/30/16/16/16-16-16-137_512.gif";
let imgfilms = "https://media1.tenor.com/m/S4QeM-pB0IoAAAAC/obi-wan-kenobi-anakin-skywalker.gif"

let Remplazo_titulo = document.createElement("h2");
let contenedor_padre = document.getElementById("Contenedor");

function mostrarPersonajes_funciongeneral(data, llave1, llave2, titulo, img) {
  Remplazo_titulo.classList.add("titulo1");
  Remplazo_titulo.textContent = titulo;

  const tituloAntiguo = contenedor_padre.querySelector("h1");
  if (tituloAntiguo) {
    contenedor_padre.replaceChild(Remplazo_titulo, tituloAntiguo);
  } else {
    contenedor_padre.appendChild(Remplazo_titulo);
  }

  
  let contenedor_imagen = document.getElementById("ContenedorImagen");
  if (contenedor_imagen) {
    contenedor_imagen.remove();
  }

   const imagenAntigua = contenedor_padre.querySelector("img");
  if (imagenAntigua) {
    imagenAntigua.remove();
  }
  const imagen = document.createElement("img");
  imagen.setAttribute("src", img);
  imagen.classList.add("imagencontenedor1");

  contenedor_padre.classList.replace("Contenedor", "ContenedorPrincipal")
  ContainerAll.classList.replace("ContainerPadre", "ContenedorPadre")
  imagen.classList.add("imagencontenedor1");
  ContainerAll.innerHTML = "";
  ContainerAll.appendChild(imagen);
  data.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <div class="ContainerUnidad">
            <img src="./Multimedia/Personajes.png" alt="Logo" class="logop">
                 <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"}</p>
                </div>
            </div>
        `;
    ContainerAll.append(div);
  });
}
function mostrarPersonajes_funciongeneral_foto(data, llave1, llave2, titulo, img,Tipo) {
  Remplazo_titulo.classList.add("titulo1");
  Remplazo_titulo.textContent = titulo;

  const tituloAntiguo = contenedor_padre.querySelector("h1");
  if (tituloAntiguo) {
    contenedor_padre.replaceChild(Remplazo_titulo, tituloAntiguo);
  } else {
    contenedor_padre.insertBefore(Remplazo_titulo, contenedor_padre.firstChild);
  }

const contenedorImagen = document.getElementById("ContenedorImagen");
if (contenedorImagen) {
  contenedorImagen.remove();
}

const nuevoContenedorImagen = document.createElement("div");
nuevoContenedorImagen.id = "ContenedorImagen";
nuevoContenedorImagen.classList.add("Contenedor-Imagen");

const nuevaImagen = document.createElement("img");
nuevaImagen.setAttribute("src", img);
nuevaImagen.classList.add("imagen-contenedor");

nuevoContenedorImagen.appendChild(nuevaImagen);

contenedor_padre.insertBefore(nuevoContenedorImagen, ContainerAll);

  contenedor_padre.classList.replace("Contenedor", "ContenedorPrincipal")
  ContainerAll.classList.replace("ContainerPadre", "ContenedorPadre")

  ContainerAll.innerHTML = "";
   i =1
  data.forEach((element) => {
    let imagenSrc = "";
    switch (titulo) {
      case "Characters":
        imagenSrc = `https://starwars-visualguide.com/assets/img/characters/${i}.jpg`;
        break;
      case "Species":
        imagenSrc = `https://starwars-visualguide.com/assets/img/species/${i}.jpg`;
        break;
      case "Films":
        imagenSrc = `https://starwars-visualguide.com/assets/img/films/${i}.jpg`;
        break;
      case "Starships": 
        imagenSrc = `./Multimedia/naves.webp`;
        break
      case "Planets":
        if (i === 1 || i > 19) {
          imagenSrc = './Multimedia/Planetas.webp';
        }else {
            imagenSrc = `https://starwars-visualguide.com/assets/img/planets/${i}.jpg`;
        }
             
          break
      case "Vehicles":
        imagenSrc = `./Multimedia/Vehicles.webp`;
        break
  
      default:
        imagenSrc = img; 
    }
    const div = document.createElement("div");
    div.innerHTML = `
            <div class="ContainerUnidad">
            <img src="${imagenSrc}" class= "img_character">
                 <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"}</p>
                </div>
            </div>
        `;
    ContainerAll.append(div);

if (i <16){

     i =i +1
    }else if(i ==16){
      i= i +2
      // i =18
    }else{
      i= i +1

    }

  });
}
document.addEventListener("DOMContentLoaded", () => {
  const submenuLinks = document.querySelectorAll(".submenu__link");

  submenuLinks.forEach(link => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      const category = link.closest(".header__item").querySelector("a").dataset.category;
      const key = link.dataset.key;
      let url;
      let img;
      let titulo;

      // Determinar qué URL, imagen y título usar según la categoría
      switch (category) {
        case "characters":
          url = "https://swapi.py4e.com/api/people/?page=";
          img = imgcharacters;
          titulo = "Characters";
          await obtener_multiples(url,  mostrarPersonajes_funciongeneral_foto, "name", key, titulo, img ,10);
          break;
        case "species":
          url = "https://swapi.py4e.com/api/species/?page=";
          img = imgspecies;
          titulo = "Species";
          await obtener_multiples(url, mostrarPersonajes_funciongeneral_foto, "name", key, titulo, img, 5);
          break;
        case "starships":
          url = "https://swapi.py4e.com/api/starships/?page=";
          img = "https://icons.veryicon.com/png/Movie%20%26%20TV/Star%20Wars%20Vehicles%201/Death%20Star%202nd.png";
          titulo = "Starships";
          Tipo = "species";
          await obtener_multiples(url, mostrarPersonajes_funciongeneral_foto, "name", key, titulo, img,5);
          break;
        case "vehicles":
          url = "https://swapi.py4e.com/api/vehicles/?page=";
          img = "./Multimedia/Vehicles.webp";
          titulo = "Vehicles";
          await obtener_multiples(url,mostrarPersonajes_funciongeneral_foto, "name", key, titulo, img, 5);
          break;
        case "planets":
          url = "https://swapi.py4e.com/api/planets/?page=";
          img = "./Multimedia/Planetas.webp";
          titulo = "Planets";
          await obtener_multiples(url, mostrarPersonajes_funciongeneral_foto, "name", key, titulo, img, 8);
          break;
        case "films":
          url = "https://swapi.py4e.com/api/films/";
          img = imgfilms;
          titulo = "Films";
          await obtener(url, mostrarPersonajes_funciongeneral_foto, "title", key, titulo, img);
          break;
      }
    });
  });
});


//Lammados hechos con URL X8

//obtener_multiples(url,mostrarPersonajes_funciongeneral,"name","height","Characters",img1);
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