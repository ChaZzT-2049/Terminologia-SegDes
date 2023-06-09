//obtener los contenedores de los conceptos
const u1 = document.getElementById("concepts-u1");
const u2 = document.getElementById("concepts-u2");
//
const tu1 = document.getElementById("titulos-u1");
const tu2 = document.getElementById("titulos-u2");
//
const btns1 = document.getElementById("buttons-u1");
const btns2 = document.getElementById("buttons-u2");

const checkbox1 = document.getElementById("check1");
const refs1 = document.getElementById("referenciasu1");
const ref1 = document.getElementById("refu1");
const checkbox2 = document.getElementById("check2");
const refs2 = document.getElementById("referenciasu2");
const ref2 = document.getElementById("refu2");
//funcion para dibujar el concepto seleccionado
function display(id,unidad){
    //evaluar la unidad a la que pertence el elemento
    if(unidad == 1){
        //ocultar el contenedor de la unidad contraria
        u2.style.display = "none";
        tu2.style.display = "none";
        refs2.style.display = "none";
        //obtener los conceptos de la unidad correspondiente
        let elements = u1.getElementsByClassName("parrafo");
        let titles = tu1.getElementsByClassName("titulo-concepto");
        let btns = btns1.getElementsByClassName("btn");
        let refs = ref1.getElementsByClassName("titulo-ref");
        //recorrer los conceptos
        for(i = 0; i < elements.length; i++){
            //evaluar si el concepto recorrido es el mismo que mando a llamar el boton con su id
            if(elements[i].id == id){
                //dibujar el concepto en pantalla
                elements[i].style.display = "block";
                titles[i].style.display = "block";
                btns[i].style.backgroundColor = "#3e5ec9";
                btns[i].style.color = "#FFFFFF";
                refs[i].style.display = "block";
            }else{
                //si no es el mismo entonces oculta ese elemento recorrido
                elements[i].style.display = "none";
                titles[i].style.display = "none";
                refs[i].style.display = "none";
                btns[i].style.backgroundColor = "#FFFFFF";
                btns[i].style.color = "#3e5ec9";
            }
        }
        //finalmente dibuja el contenedor de la unidad
        u1.style.display = "block";
        tu1.style.display = "block";
        refs1.style.display = "block";
    }else{
        //ocultar el contenedor de la unidad contraria
        u1.style.display = "none";
        tu1.style.display = "none";
        refs1.style.display = "none";

        //obtener los conceptos de la unidad correspondiente
        let elements = u2.getElementsByClassName("parrafo");
        let titles = tu2.getElementsByClassName("titulo-concepto");
        let btns = btns2.getElementsByClassName("btn");

        let refs = ref2.getElementsByClassName("titulo-ref");
        //recorrer los conceptos
        for(i = 0; i < elements.length; i++){
            //evaluar si el concepto recorrido es el mismo que mando a llamar el boton con su id
            if(elements[i].id == id){
                elements[i].style.display = "block";
                titles[i].style.display = "block";
                refs[i].style.display = "block";
                btns[i].style.backgroundColor = "#3e5ec9";
                btns[i].style.color = "#FFFFFF";
            }else{
                elements[i].style.display = "none";
                titles[i].style.display = "none";
                refs[i].style.display = "none";
                btns[i].style.backgroundColor = "#FFFFFF";
                btns[i].style.color = "#3e5ec9";
            }
        }
        
        u2.style.display = "block";
        tu2.style.display = "block";
        refs2.style.display = "block";
    }
    
}
function ref(unidad){
    if(unidad == 1){
        if(checkbox1.checked){
            ref1.style.display = "block";
        }else{
            ref1.style.display = "none";
        }
    }
    else{
        if(checkbox2.checked){
            ref2.style.display = "block";
        }else{
            ref2.style.display = "none";
        }
    }
    
}
