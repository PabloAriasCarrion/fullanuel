function cambiarImagen(){
    const imagen = document.getElementById("imagen").src;
 
    if(imagen === "file:///C:/Users/Pablo/OneDrive/Escritorio/HTML/JavaScript/Ejercicio%205/imagen%201.png")
        document.getElementById("imagen").src = "imagen 2.jpeg";
    else {
        document.getElementById("imagen").src = "imagen 1.png";

    }
}