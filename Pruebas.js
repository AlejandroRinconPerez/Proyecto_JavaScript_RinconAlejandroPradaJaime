const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
 
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 
 let container =document.querySelector("#Contenedor")
 let url = "https://swapi.py4e.com/api/people/?page=";
 let url2 = "https://swapi.py4e.com/api/films/";
 let url3 = "https://swapi.py4e.com/api/vehicles/?page=";
 let url4 = "https://swapi.py4e.com/api/species/?page=";
 let url5 = "https://swapi.py4e.com/api/planets/?page=";
 let url6 = "https://swapi.py4e.com/api/starships/?page=";
 
 
 async function obtener_multiples(url, callback, llave1, llave2, titulo, num ) {
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
     let j = 1
     todosArrays.forEach(element => {
         element.id = j;
         if (j <16){
             j =j +1
            }else if(j ==16){
              j= j +2
            }else{
              j= j +1
            }
            
          });
          
     // console.log(contador)
     callback(todosArrays, llave1, llave2, titulo);
        }
     
     
   
   function mayus(llave1) {
     let mayuscula = llave1[0].toUpperCase() + llave1.substring(1);
     return mayuscula;
   }
   
 
   function FiltroAlturamayor100(data, llave1, llave2, titulo, img) {
     let Variable = []
     Variable = data.filter((element) => {
         return element[llave2] >= 100
     })
     Variable = Variable.sort((a,b )=> a.height-b.height)
     container.innerHTML = ""
     Variable.forEach((element) => {
       const div = document.createElement("div");
       div.innerHTML = `
               <div class="ContainerUnidad">
                <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                    <h2 class="titulo2">${element[llave1]}</h2>
                   <div class="Container">
                       <p class="label_titulo">${mayus(llave2)}</p>
                       <p class="label">${element[llave2] || "N/A"} cm</p>
                   </div>
               </div>
           `;
           container.append(div);
     });
   }
   const botonComprar = document.querySelector('#mayor100');
   botonComprar.addEventListener('click', function() {
     obtener_multiples(url, FiltroAlturamayor100, "name", "height", "Characters", 10);
 });
 
 
   function FiltroAlturamenor100(data, llave1, llave2, titulo, img) {
      container.innerHTML = ""
     let Variable = []
     Variable = data.filter((element) => {
         return element[llave2] <= 100
     })
     Variable = Variable.sort((a,b )=> a.height-b.height)
     container.innerHTML = ""
     Variable.forEach((element) => {
       const div = document.createElement("div");
       div.innerHTML = `
               <div class="ContainerUnidad">
                <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                    <h2 class="titulo2">${element[llave1]}</h2>
                   <div class="Container">
                       <p class="label_titulo">${mayus(llave2)}</p>
                       <p class="label">${element[llave2] || "N/A"} cm</p>
                   </div>
               </div>
           `;
           container.append(div);
     });
   }
   const botonComprar2 = document.querySelector('#menor100');
   botonComprar2.addEventListener('click', function() {
     obtener_multiples(url, FiltroAlturamenor100, "name", "height", "Characters", 10);
   })
 
 
   function FiltroOjosAzules(data, llave1, llave2) {
      container.innerHTML = ""
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "blue"; 
     });
     console.log(Variable)
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                  <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 
 const botonComprar3 = document.querySelector('#Azules');
 botonComprar3.addEventListener('click', function() {
     obtener_multiples(url, FiltroOjosAzules, "name", "eye_color", "Characters", 10);
 });
 
 
 function FiltroOjosAmarillos(data, llave1, llave2) {
      container.innerHTML = ""
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "yellow"; 
     });
     console.log(Variable)
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 const botonComprar4 = document.querySelector('#Amarillos');
 botonComprar4.addEventListener('click', function() {
     obtener_multiples(url, FiltroOjosAmarillos, "name", "eye_color", "Characters", 10);
 });
 
 function FiltroOjosNegros(data, llave1, llave2) {
      container.innerHTML = ""
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "black"; 
     });
     console.log(Variable)
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"}</p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 const botonComprar5 = document.querySelector('#Negros');
 botonComprar5.addEventListener('click', function() {
     obtener_multiples(url, FiltroOjosNegros, "name", "eye_color", "Characters", 10);
 });
 //-------------------------------------------------------------------------------------------
 function FiltroOjostodos(data, llave1, llave2) {
     container.innerHTML = ""
    data.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"}</p>
                </div>
            </div>
        `;
        container.append(div);
    });
 }
 const botonComprar6 = document.querySelector('#TodosOjos');
 botonComprar6.addEventListener('click', function() {
    obtener_multiples(url, FiltroOjostodos, "name", "eye_color", "Characters", 10);
 
 });
 //-------------------------------------------------------------------------------------------
 function FiltroAlturatodos(data, llave1, llave2) {
     container.innerHTML = ""
    data.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="ContainerUnidad">
                <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"} cm </p>
                </div>
            </div>
        `;
        container.append(div);
        
    });
 }
 const botonComprar7 = document.querySelector('#TodosAltura');
 botonComprar7.addEventListener('click', function() {
    obtener_multiples(url, FiltroAlturatodos, "name", "height", "Characters", 10);
 
 });
 //-----------------------------------------------------------------------------------------------------
 function Filtromasatodos(data, llave1, llave2) {
     container.innerHTML = ""
    data.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="ContainerUnidad">
                <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"} Kg </p>
                </div>
            </div>
        `;
        container.append(div);
      
    });
 }
 const botonComprar8 = document.querySelector('#TodosMasa');
 botonComprar8.addEventListener('click', function() {
    obtener_multiples(url, Filtromasatodos, "name", "mass", "Characters", 10);
 
 });
 //--------------------------------------------------------------------------------------------------------------
 
 function FiltroMasamenor70(data, llave1, llave2) {
     container.innerHTML = ""
    let Variable = data.filter((element) => {
        return element[llave2].toLowerCase() <= 70; 
    });
    console.log(Variable)
    Variable = Variable.sort((a,b )=> a.mass-b.mass)
 
    Variable.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="ContainerUnidad">
                <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"}Kg </p>
                </div>
            </div>
        `;
        container.append(div);
    });
 }
 const botonComprar9 = document.querySelector('#masamenor70');
 botonComprar9.addEventListener('click', function() {
    obtener_multiples(url, FiltroMasamenor70, "name", "mass", "Characters", 10);
 });
 
 function FiltroMasamayorde70(data, llave1, llave2) {
     container.innerHTML = ""
    let Variable = data.filter((element) => {
        return element[llave2].toLowerCase() >= 70; 
    });
    console.log(Variable)
    Variable = Variable.sort((a,b )=> a.mass-b.mass)
 
    Variable.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="ContainerUnidad">
                <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"} Kg </p>
                </div>
            </div>
        `;
        container.append(div);
    });
 }
 const botonComprar10 = document.querySelector('#masamayor70');
 botonComprar10.addEventListener('click', function() {
    obtener_multiples(url, FiltroMasamayorde70, "name", "mass", "Characters", 10);
 });
 
 function Filtroporpielfair(data, llave1, llave2) {
     container.innerHTML = ""
    let Variable = data.filter((element) => {
        return element[llave2].toLowerCase() === "fair"; 
    });
    console.log(Variable)
 
    Variable.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"} </p>
                </div>
            </div>
        `;
        container.append(div);
    });
 }
 const botonComprar11 = document.querySelector('#pielcolorfair');
 botonComprar11.addEventListener('click', function() {
    obtener_multiples(url, Filtroporpielfair, "name", "skin_color", "Characters", 10);
 });
 function Filtroporpielwhite(data, llave1, llave2) {
     container.innerHTML = ""
    let Variable = data.filter((element) => {
        return element[llave2].toLowerCase() === "white"; 
    });
    console.log(Variable)
 
    Variable.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"} </p>
                </div>
            </div>
        `;
        container.append(div);
    });
 }
 const botonComprar12 = document.querySelector('#pielcolorwhite');
 botonComprar12.addEventListener('click', function() {
    obtener_multiples(url, Filtroporpielwhite, "name", "skin_color", "Characters", 10);
 });
 
 
 
 function Filtroporpiellight(data, llave1, llave2) {
     container.innerHTML = ""
    let Variable = data.filter((element) => {
        return element[llave2].toLowerCase() === "light"; 
    });
    console.log(Variable)
 
    Variable.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"} </p>
                </div>
            </div>
        `;
        container.append(div);
    });
 }
 const botonComprar13 = document.querySelector('#pielcolorlight');
 botonComprar13.addEventListener('click', function() {
    obtener_multiples(url, Filtroporpiellight, "name", "skin_color", "Characters", 10);
 });
 
 
 
 function Filtroporpielgreen(data, llave1, llave2) {
     container.innerHTML = ""
    let Variable = data.filter((element) => {
        return element[llave2].toLowerCase() === "green"; 
    });
    console.log(Variable)
 
    Variable.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"} </p>
                </div>
            </div>
        `;
        container.append(div);
    });
 }
 const botonComprar14 = document.querySelector('#pielcolorgreen');
 botonComprar14.addEventListener('click', function() {
    obtener_multiples(url, Filtroporpielgreen, "name", "skin_color", "Characters", 10);
 });
 
 function Filtroporpielpale(data, llave1, llave2) {
     container.innerHTML = ""
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "pale"; 
     });
     console.log(Variable)
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 const botonComprar15 = document.querySelector('#pielcolorpale');
 botonComprar15.addEventListener('click', function() {
     obtener_multiples(url, Filtroporpielpale, "name", "skin_color", "Characters", 10);
 });
 
 function Filtroporpielgrey(data, llave1, llave2) {
     container.innerHTML = ""
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "grey"; 
     });
     console.log(Variable)
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 const botonComprar16 = document.querySelector('#pielcolorgrey');
 botonComprar16.addEventListener('click', function() {
     obtener_multiples(url, Filtroporpielgrey, "name", "skin_color", "Characters", 10);
 });
 
 function Filtroporpieldark(data, llave1, llave2) {
     container.innerHTML = ""
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "dark"; 
     });
     console.log(Variable)
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 const botonComprar17 = document.querySelector('#pielcolordark');
 botonComprar17.addEventListener('click', function() {
     obtener_multiples(url, Filtroporpieldark, "name", "skin_color", "Characters", 10);
 });
 
 function Filtropieltodos(data, llave1, llave2) {
     container.innerHTML = ""
    data.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="ContainerUnidad">
                <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"} Kg </p>
                </div>
            </div>
        `;
        container.append(div);
      
    });
 }
 const botonComprar18 = document.querySelector('#pieltodos');
 botonComprar18.addEventListener('click', function() {
    obtener_multiples(url, Filtropieltodos, "name", "skin_color", "Characters", 10);
 
 });
 
 function Filtropelotodos(data, llave1, llave2) {
     container.innerHTML = ""
    data.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="ContainerUnidad">
                <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"} Kg </p>
                </div>
            </div>
        `;
        container.append(div);
      
    });
 }
 const botonComprar19 = document.querySelector('#PelocolorTodos');
 botonComprar19.addEventListener('click', function() {
    obtener_multiples(url, Filtropelotodos, "name", "hair_color", "Characters", 10);
 
 });
 
 
 function FiltropeloPruebasbrown(data, llave1, llave2) {
     container.innerHTML = ""
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "brown"; 
     });
     console.log(Variable)
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 const botonComprar20 = document.querySelector('#pelocolorbrown');
 botonComprar20.addEventListener('click', function() {
     obtener_multiples(url, FiltropeloPruebasbrown, "name", "hair_color", "Characters", 10);
 });
 function FiltropeloPruebaswhite(data, llave1, llave2) {
     container.innerHTML = "";
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "white";
     });
     
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 const botonComprar21 = document.querySelector('#pelocolorwhite');
 botonComprar21.addEventListener('click', function() {
     obtener_multiples(url, FiltropeloPruebaswhite, "name", "hair_color", "Characters", 10);
 });
 
 function FiltropeloPruebasnone(data, llave1, llave2) {
     container.innerHTML = "";
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "none";
     });
     
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 
 const botonComprar22 = document.querySelector('#pelocolornone');
 botonComprar22.addEventListener('click', function() {
     obtener_multiples(url, FiltropeloPruebasnone, "name", "hair_color", "Characters", 10);
 });
 function FiltropeloPruebasblack(data, llave1, llave2) {
     container.innerHTML = "";
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "black";
     });
     
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 const botonComprar23 = document.querySelector('#pelocolorblack');
 botonComprar23.addEventListener('click', function() {
     obtener_multiples(url, FiltropeloPruebasblack, "name", "hair_color", "Characters", 10);
 });
 function FiltropeloPruebasna(data, llave1, llave2) {
     container.innerHTML = "";
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "n/a";
     });
     
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 const botonComprar24 = document.querySelector('#pelocolorna');
 botonComprar24.addEventListener('click', function() {
     obtener_multiples(url, FiltropeloPruebasna, "name", "hair_color", "Characters", 10);
 });
 
 //----------------------------------------------------------------------------------------------------------
 
 function FiltroGenerostodos(data, llave1, llave2) {
     container.innerHTML = ""
    data.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="ContainerUnidad">
                <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                <h2 class="titulo2">${element[llave1]}</h2>
                <div class="Container">
                    <p class="label_titulo">${mayus(llave2)}</p>
                    <p class="label">${element[llave2] || "N/A"} </p>
                </div>
            </div>
        `;
        container.append(div);
      
    });
 }
 const botonComprar25 = document.querySelector('#gendertodos');
 botonComprar25.addEventListener('click', function() {
    obtener_multiples(url, FiltroGenerostodos, "name", "gender", "Characters", 10);
 
 });
 
 function Filtrogendermale(data, llave1, llave2) {
     container.innerHTML = "";
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "male";
     });
     
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 const botonComprar26 = document.querySelector('#gendermale');
 botonComprar26.addEventListener('click', function() {
     obtener_multiples(url, Filtrogendermale, "name", "gender", "Characters", 10);
 });
 
 
 function Filtrogenderfemale(data, llave1, llave2) {
     container.innerHTML = "";
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "female";
     });
     
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 const botonComprar27 = document.querySelector('#genderfemale');
 botonComprar27.addEventListener('click', function() {
     obtener_multiples(url, Filtrogenderfemale, "name", "gender", "Characters", 10);
 });
 function Filtrogenderna(data, llave1, llave2) {
     container.innerHTML = "";
     let Variable = data.filter((element) => {
         return element[llave2].toLowerCase() === "n/a";
     });
     
 
     Variable.forEach((element) => {
         const div = document.createElement("div");
         div.innerHTML = `
             <div class="ContainerUnidad">
                 <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                 <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
     });
 }
 const botonComprar28 = document.querySelector('#genderna');
 botonComprar28.addEventListener('click', function() {
     obtener_multiples(url, Filtrogenderna, "name", "gender", "Characters", 10);
 });
 
 
 
 //-----------------------------------------------------------------------------------------------------
 async function obtener_multiplesRango(url, callback, llave1, llave2,  num, Rango1) {
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
     let j = 1
     todosArrays.forEach(element => {
         element.id = j;
         if (j <16){
             j =j +1
            }else if(j ==16){
              j= j +2
            }else{
              j= j +1
            }
          });
          
 
     // console.log(contador)
     callback(todosArrays, llave1, llave2, Rango1);
        }
     
 //-----------------------------------------------------------------------------------------------------
 function FiltroRangoGeneralPartiendode__0(data, llave1, llave2, Rango1 ) {
     container.innerHTML = ""
    let Variable = []
    Variable = data.filter((element) => {
        return element[llave2] >= Rango1  
    })
    console.log(Variable)
    Variable = Variable.sort((a,b )=> a.height-b.height)
    container.innerHTML = ""
    Variable.forEach((element) => {
      const div = document.createElement("div");
      div.innerHTML = `
              <div class="ContainerUnidad">
               <img src="https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg">
                   <h2 class="titulo2">${element[llave1]}</h2>
                  <div class="Container">
                      <p class="label_titulo">${mayus(llave2)}</p>
                      <p class="label">${element[llave2] || "N/A"} cm</p>
                  </div>
              </div>
          `;
          container.append(div);
    });
  }
 
 const botonMayor34 = document.querySelector('#mayor200');
 botonMayor34.addEventListener('click', function() {
     obtener_multiplesRango(url, FiltroRangoGeneralPartiendode__0, "name", "height", 10, 200);
 });
 
 
 function FiltroRangoGeneralPartiendodevehicles(data, llave1, llave2, Rango1 ) {
     container.innerHTML = ""
    let Variable = []
    Variable = data.filter((element) => {
        return element[llave2] >= Rango1  
    })
    console.log(Variable)
    Variable = Variable.sort((a,b )=> a.height-b.height)
    container.innerHTML = ""
    Variable.forEach((element) => {
      const div = document.createElement("div");
      div.innerHTML = `
              <div class="ContainerUnidad">
                 <img src="./Multimedia/Vehicles.webp" alt="">
                   <h2 class="titulo2">${element[llave1]}</h2>
                  <div class="Container">
                      <p class="label_titulo">${mayus(llave2)}</p>
                      <p class="label">${element[llave2] || "N/A"} </p>
                  </div>
              </div>
          `;
          container.append(div);
    });
  }
 
 const botonComprar36 = document.querySelector('#Cargocapacity1000');
 botonComprar36.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "cargo_capacity",  5, 1000)
 });
 
 const botonComprar38 = document.querySelector('#Cargocapacity50000');
 botonComprar38.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "cargo_capacity", 5, 50000);
 });
 
 const botonComprar39 = document.querySelector('#Cargocapacity100000');
 botonComprar39.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "cargo_capacity", 5, 100000);
 });
 
 
 const botonComprar40 = document.querySelector('#cost_in_credits1000');
 botonComprar40.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "cost_in_credits", 5, 1000);
 });
 
 const botonComprar43 = document.querySelector('#cost_in_credits20000');
 botonComprar43.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "cost_in_credits", 5, 20000);
 });
 
 const botonComprar45 = document.querySelector('#cost_in_credits40000');
 botonComprar45.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "cost_in_credits", 5, 40000);
 });
 
 
 
 
 const botonComprar52 = document.querySelector('#length_10');
 botonComprar52.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "length", 5, 10);
 });
 
 
 const botonComprar54 = document.querySelector('#length_20');
 botonComprar54.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "length", 5, 20);
 });
 
 const botonComprar55 = document.querySelector('#length_30');
 botonComprar55.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "length", 5, 30);
 });
 
 
 
 const botonComprar56 = document.querySelector('#crew_1');
 botonComprar56.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "crew", 5, 1);
 });
 
 const botonComprar58 = document.querySelector('#crew_10');
 botonComprar58.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "crew", 5, 10);
 });
 
 
 
 const botonComprar60 = document.querySelector('#crew_20');
 botonComprar60.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "crew", 5, 20);
 });
 
 
 const botonComprar61 = document.querySelector('#passengers_1');
 botonComprar61.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "passengers", 5, 1);
 });
 
 const botonComprar63 = document.querySelector('#passengers_10');
 botonComprar63.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "passengers", 5, 10);
 });
 
 
 const botonComprar65 = document.querySelector('#passengers_100');
 botonComprar65.addEventListener('click', function() {
     obtener_multiplesRango(url3, FiltroRangoGeneralPartiendodevehicles, "name", "passengers", 5, 100);
 });
 
 
 function FiltroRangoGeneralPartiendodeplanetas(data, llave1, llave2, Rango1 ) {
     container.innerHTML = ""
    let Variable = []
    Variable = data.filter((element) => {
        return element[llave2] >= Rango1  
    })
    console.log(Variable)
    Variable = Variable.sort((a,b )=> a.height-b.height)
    container.innerHTML = ""
    Variable.forEach((element) => {
      const div = document.createElement("div");
      div.innerHTML = `
              <div class="ContainerUnidad">
                 <img src="./Multimedia/Planetas.webp" alt="">
                   <h2 class="titulo2">${element[llave1]}</h2>
                  <div class="Container">
                      <p class="label_titulo">${mayus(llave2)}</p>
                      <p class="label">${element[llave2] || "N/A"} </p>
                  </div>
              </div>
          `;
          container.append(div);
    });
  }
 
 const botonComprar66 = document.querySelector('#diameter1000');
 botonComprar66.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "diameter", 8, 1000);
 });
 const botonComprar67 = document.querySelector('#diameter5000');
 botonComprar67.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "diameter", 8, 5000);
 });
 
 const botonComprar68 = document.querySelector('#diameter10000');
 botonComprar68.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "diameter", 8, 10000);
 });
 
 const botonComprar70 = document.querySelector('#diameter20000');
 botonComprar70.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "diameter", 8, 20000);
 });
 
 
 
 const botonComprar71 = document.querySelector('#orbital_period100');
 botonComprar71.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "orbital_period", 8, 100);
 });
 const botonComprar72 = document.querySelector('#orbital_period200');
 botonComprar72.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "orbital_period", 8, 200);
 });
 
 
 const botonComprar74 = document.querySelector('#orbital_period400');
 botonComprar74.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "orbital_period", 8, 400);
 });
 
 
 
 const botonComprar76 = document.querySelector('#population100');
 botonComprar76.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "population", 8, 100);
 });
 
 
 const botonComprar78 = document.querySelector('#population10000');
 botonComprar78.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "population", 8, 100000);
 });
 
 
 
 const botonComprar80 = document.querySelector('#population30000');
 botonComprar80.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "population", 8, 300000);
 });
 
 
 const botonComprar82 = document.querySelector('#surface_water10');
 botonComprar82.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "surface_water", 8, 10);
 });
 
 const botonComprar83 = document.querySelector('#surface_water30');
 botonComprar83.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "surface_water", 8, 30);
 });
 
 const botonComprar84 = document.querySelector('#surface_water50');
 botonComprar84.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "surface_water", 8, 50);
 });
 const botonComprar86 = document.querySelector('#surface_water40');
 botonComprar86.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "surface_water", 8, 40);
 });
 

 function FiltroRangoGeneralespecies(data, llave1, llave2, Rango1 ) {
    container.innerHTML = ""
   let Variable = []
   Variable = data.filter((element) => {
       return element[llave2] >= Rango1  
   })
   console.log(Variable)
   Variable = Variable.sort((a,b )=> a.height-b.height)
   container.innerHTML = ""
   Variable.forEach((element) => {
     const div = document.createElement("div");
     div.innerHTML = `
             <div class="ContainerUnidad">
                <img src="https://electrogeek.b-cdn.net/wp-content/uploads/2023/03/1-removebg-preview.png" alt="">
                  <h2 class="titulo2">${element[llave1]}</h2>
                 <div class="Container">
                     <p class="label_titulo">${mayus(llave2)}</p>
                     <p class="label">${element[llave2] || "N/A"} </p>
                 </div>
             </div>
         `;
         container.append(div);
   });
 }

 const botonComprar89 = document.querySelector('#classification_average_50');
 botonComprar89.addEventListener('click', function() {
     obtener_multiplesRango(url4, FiltroRangoGeneralespecies, "name", "average_lifespan", 5, 50);
 });
 
 const botonComprar90 = document.querySelector('#classification_average_100');
 botonComprar90.addEventListener('click', function() {
     obtener_multiplesRango(url4, FiltroRangoGeneralespecies, "name", "average_lifespan", 5, 100);
 });
 
 
 
 const botonComprar92 = document.querySelector('#average_height10');
 botonComprar92.addEventListener('click', function() {
     obtener_multiplesRango(url4, FiltroRangoGeneralespecies, "name", "average_height", 5, 10);
 });
 
 
 const botonComprar94 = document.querySelector('#average_height100');
 botonComprar94.addEventListener('click', function() {
     obtener_multiplesRango(url4, FiltroRangoGeneralespecies, "name", "average_height", 5, 100);
 });
 
 const botonComprar96 = document.querySelector('#average_height200');
 botonComprar96.addEventListener('click', function() {
     obtener_multiplesRango(url4, FiltroRangoGeneralespecies, "name", "average_height", 5, 200);
 });


 const botonComprar97 = document.querySelector('#Gravity1');
 botonComprar97.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "gravity", 8,0 );
 });
 const botonComprar98 = document.querySelector('#Gravity2');
 botonComprar98.addEventListener('click', function() {
     obtener_multiplesRango(url5, FiltroRangoGeneralPartiendodeplanetas, "name", "gravity", 8,1.1 );
 });