let url = 'https://chazzt-2049.github.io/terminologiajson/terminos.json';
//obtener los datos del json
function loadInfo() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => showData(data))
        .catch((error) => console.log(error));
//mostrar los datos
    const showData = (data) => {
        console.log(data);
        //crear los botones por unidad
        let buttons1 = "";
        let buttons2 = "";
        //crea los conceptos por unidad
        let terms1 = "";
        let terms2 = "";
        //obtener los botones de cada unidad mandando data y el valor de la unidad
        buttons1 = getButtons(data, 1);
        buttons2 = getButtons(data, 2);
        //obtener los conceptos de cada unidad mandando data y el valor de la unidad
        terms1 = getConcepts(data, 1);
        terms2 = getConcepts(data, 2);
        
        //agregar los botones de cada unidad al html
        document.getElementById('buttons-u1').innerHTML = buttons1;
        document.getElementById('buttons-u2').innerHTML = buttons2;
        //agregar los conceptos de cada unidad al html
        document.getElementById('concepts-u1').innerHTML = terms1;
        document.getElementById('concepts-u2').innerHTML = terms2;
    }
}
//funcion obtener botones recibe la data y la unidad
function getButtons(data, unidad){
    //variable que almacena los botones
    let buttons = ""
    //recorrer la data
    data.forEach(element => {
        //si el elemento pertenece a la unidad enviada entonces se crea un boton con los datos del elemento
        if(element.unidad == unidad){
            //el elemento llama a una funcion que dibujara la definicion en la pantalla con cada click
            buttons += `<button onclick="display(${element.id},${element.unidad})" class="btn">${element.termino}</button>`;
        }
    });
    //se regresan los datos creados
    return buttons
}
//funcion obtener conceptos recibe la data y la unidad
function getConcepts(data, unidad){
    let terms = ""
    data.forEach(element => {
        //si el elemento pertenece a la unidad enviada entonces se crea un parrafo con los datos del elemento
        if(element.unidad == unidad){
            terms += `<p id="${element.id}" class="parrafo">${element.definicion}</p>`;
        }
    });
    return terms
}
//llamada a la funcion principal
loadInfo();