//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "  Argentina  ",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: " Español   ",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

agregarMonitores();

//funcion para agregar listeners a los botones
function agregarMonitores() {
    //TODO

    var btnMmostrar;
    btnMmostrar = document.getElementById("mostrarPaises");
    btnMmostrar.addEventListener("click",mostrarPaises );

    var btnAgregar;
    btnAgregar = document.getElementById("agregarPais");
    btnAgregar.addEventListener("click",agregarPais);

}


//funcion que mostrara las paises en la pagina
function mostrarPaises() {

    var paises1 = paises.map(function (pais) {
        return '<div class="container-xl "> <div class="   d-flex justify-content-center row text-light bg-dark "> <div class="col"> <h2>Nombre </h2></div> <div class="col"><h2> Bandera </h2></div> <div class="col"><h2>Capital </h2></div>  <div class="col"><h2>Idioma </h2></div> <div class="col"><h2>Moneda </h2></div> </div>                 <div class="row d-flex justify-content-center align-items-center">           <div class="col  ">' + pais.nombre + ' </div>  <div class="col  ">  <img src=' + pais.bandera + ' class="img-thumbnail " alt="Bandera"> </div>   <div class="col ">' + pais.capital + '</div><div class="col text-center">' + pais.idioma_oficial + '</div><div class="col text-center">' + pais.moneda + '</div> </div> </div> '

    })
    document.getElementById("paises").innerHTML = paises1;

}





//funcion que permite agregar un pais al arreglo
function agregarPais() {

    var nombrePais = prompt("Ingresa el nombre del pais", "");
    var banderaPais = prompt("Ingresa la ruta de la bandera", "");
    var capitalPais = prompt("Ingresa el nombre de la capital del pais", "");
    var idiomaPais = prompt("Ingresa el idioma del pais", "");
    var monedaPais = prompt("Ingresa la moneda del pais", "");



    console.log(nombrePais);
    console.log(banderaPais);
    console.log(capitalPais);
    console.log(idiomaPais);
    console.log(monedaPais);



    if (monedaPais == "") {
        alert("El campo moneda esta vacio");
        brake;
    }if (nombrePais == "") {
        alert("El campo nombre esta vacio");
        brake;
    }if (banderaPais == "") {
        alert("El campo bandera esta vacio");
        brake;
    }if (capitalPais == "") {
        alert("El campo capital esta vacio");
        brake;
    }if (idiomaPais == "") {
        alert("El campo idioma esta vacio");
        brake;
    }else {
        paises.unshift({ nombre: nombrePais, bandera: banderaPais, capital: capitalPais, idioma_oficial: idiomaPais, moneda: monedaPais });
    }


}
