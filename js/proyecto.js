let form = document.forms["myForm"];
let nombre = form.nombre.value;
let edadTitular = form.edad.value;
//let cantidadHijos = form.hijos.value;


function yesnoCheck() {
        if (document.getElementById('yesCheck').checked) {
            document.getElementById('ifYes').style.visibility = 'visible';
               
                    
                }
           
        else {
            document.getElementById('ifYes').style.visibility = 'hidden';
        }
        
}

function siPareja() {
    if (document.getElementById('yesPareja').checked) {
        document.getElementById('siesPositivo').style.visibility = 'visible';
        
        
    } else {
        document.getElementById('siesPositivo').style.visibility = 'hidden';
    }
    
}

const mostrarAportesPorConsola = () =>{

    let sueldo = document.getElementById("yes").value;

    const aportesTitular = calculoAportes(sueldo);

    console.log(aportesTitular);

}  

const planes = [
    { nombre: "Blanco", id: "A", categoria: "Individuo Solo", precio: 4816.39 },
    { nombre: "Blanco", id: "B", categoria: "Matrimonio Solo", precio: 9186.95 },
    { nombre: "Blanco", id: "C", categoria: "Matrimonio Solo + 1 hijo ", precio: 11824.96 ,},
    {
        nombre: "Blanco",
        Id: "D",
        Categoria: "Matrimonio Solo + 2 hijos ",
        precio: 13308.19,
    },
    { nombre: "Azul", Id: "A", Categoria: "Individuo Solo ", precio: 6422.0 },
    { nombre: "Azul", Id: "B", Categoria: "Matrimonio Solo ", precio: 12249.95 },
    {
        nombre: "Azul",
        Id: "C",
        Categoria: "Matrimonio Solo + 1 hijo ",
        precio: 15766.75,
    },
    {
        nombre: "Azul",
        Id: "D",
        Categoria: "Matrimonio Solo + 2 hijos ",
        precio: 11746.85,
    },
    { nombre: "Verde", Id: "A", Categoria: "Individuo Solo ", precio: 8943.8 },
    { nombre: "Verde", Id: "B", Categoria: "Matrimonio Solo ", precio: 16813.59 },
    {
        nombre: "Verde",
        Id: "C",
        Categoria: "Matrimonio Solo + 1 hijo ",
        precio: 22615.27,
    },
    {
        nombre: "Verde",
        Id: "D",
        Categoria: "Matrimonio Solo + 2 hijos ",
        precio: 25583.54,
    },
];

function calculoAportes(x) {
    let aportes = x * 0.08;
    return aportes;
}
const selectorPlanes = document.querySelector("#validationCustom02").value;
console.log(selectorPlanes);
