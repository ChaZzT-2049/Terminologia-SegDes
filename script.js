//obtener los contenedores de los conceptos
const u1 = document.getElementById("concepts-u1");
const u2 = document.getElementById("concepts-u2");
//
const tu1 = document.getElementById("titulos-u1");
const tu2 = document.getElementById("titulos-u2");
//
const btns1 = document.getElementById("buttons-u1");
const btns2 = document.getElementById("buttons-u2");
//funcion para dibujar el concepto seleccionado
function display(id,unidad){
    //evaluar la unidad a la que pertence el elemento
    if(unidad == 1){
        //ocultar el contenedor de la unidad contraria
        u2.style.display = "none";
        tu2.style.display = "none";
        //obtener los conceptos de la unidad correspondiente
        let elements = u1.getElementsByClassName("parrafo");
        let titles = tu1.getElementsByClassName("titulo-concepto");
        let btns = btns1.getElementsByClassName("btn");
        //recorrer los conceptos
        for(i = 0; i < elements.length; i++){
            //evaluar si el concepto recorrido es el mismo que mando a llamar el boton con su id
            if(elements[i].id == id){
                //dibujar el concepto en pantalla
                elements[i].style.display = "block";
                titles[i].style.display = "block";
                btns[i].style.backgroundColor = "#3e5ec9";
                btns[i].style.color = "#FFFFFF";
            }else{
                //si no es el mismo entonces oculta ese elemento recorrido
                elements[i].style.display = "none";
                titles[i].style.display = "none";
                btns[i].style.backgroundColor = "#FFFFFF";
                btns[i].style.color = "#3e5ec9";
            }
        }
        //finalmente dibuja el contenedor de la unidad
        u1.style.display = "block";
        tu1.style.display = "block";
    }else{
        //ocultar el contenedor de la unidad contraria
        u1.style.display = "none";
        tu1.style.display = "none";

        //obtener los conceptos de la unidad correspondiente
        let elements = u2.getElementsByClassName("parrafo");
        let titles = tu2.getElementsByClassName("titulo-concepto");
        let btns = btns2.getElementsByClassName("btn");
        //recorrer los conceptos
        for(i = 0; i < elements.length; i++){
            //evaluar si el concepto recorrido es el mismo que mando a llamar el boton con su id
            if(elements[i].id == id){
                elements[i].style.display = "block";
                titles[i].style.display = "block";
                btns[i].style.backgroundColor = "#3e5ec9";
                btns[i].style.color = "#FFFFFF";
            }else{
                elements[i].style.display = "none";
                titles[i].style.display = "none";
                
                btns[i].style.backgroundColor = "#FFFFFF";
                btns[i].style.color = "#3e5ec9";
            }
        }
        
        u2.style.display = "block";
        tu2.style.display = "block";
    }
    
}
