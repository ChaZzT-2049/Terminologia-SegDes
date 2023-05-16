//obtener los contenedores de los conceptos
const u1 = document.getElementById("concepts-u1");
const u2 = document.getElementById("concepts-u2");
//funcion para dibujar el concepto seleccionado
function display(id,unidad){
    //evaluar la unidad a la que pertence el elemento
    if(unidad == 1){
        //ocultar el contenedor de la unidad contraria
        u2.style.display = "none";
        //obtener los conceptos de la unidad correspondiente
        let elements = u1.getElementsByClassName("parrafo");
        //recorrer los conceptos
        for(i = 0; i < elements.length; i++){
            //evaluar si el concepto recorrido es el mismo que mando a llamar el boton con su id
            if(elements[i].id == id){
                //dibujar el concepto en pantalla
                elements[i].style.display = "block";
            }else{
                //si no es el mismo entonces oculta ese elemento recorrido
                elements[i].style.display = "none";
            }
        }
        //finalmente dibuja el contenedor de la unidad
        u1.style.display = "block";
    }else{
        //ocultar el contenedor de la unidad contraria
        u1.style.display = "none";
        //obtener los conceptos de la unidad correspondiente
        let elements = u2.getElementsByClassName("parrafo");
        //recorrer los conceptos
        for(i = 0; i < elements.length; i++){
            //evaluar si el concepto recorrido es el mismo que mando a llamar el boton con su id
            if(elements[i].id == id){
                elements[i].style.display = "block";
            }else{
                elements[i].style.display = "none";
            }
        }
        
        u2.style.display = "block";
    }
    
}
