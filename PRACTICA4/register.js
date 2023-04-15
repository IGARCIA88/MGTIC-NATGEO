let est =[]
console.log("Register");
//crear constructor
let contador=0;
class Estudiante {

    constructor ( nombreE, correoE, carreraE, califA,califB,califC){
    this.Nombre = nombreE;
    this.Carrera= carreraE;
    this.Correo = correoE;
    this.Calif = califA;
    this.Calif = califB;
    this.Calif = califC;
    this.id=contador++;
    }
}

function registrar(){
   // obtener los valores de los inputs documents.getElementByID
   let Nombre = document.getElementById("txtNombre");
   let Carrera = document.getElementById("txtCarrera");
   let Correo = document.getElementById("txtCorreo");
   let CalifA = document.getElementById("txtCalifA");
   let CalifB = document.getElementById("txtCalifB");
   let CalifC = document.getElementById("txtCalifC");
let nuevoAlumno= new Estudiante(Nombre,Carrera,CalifA,CalifB,CalifC);
estudiantes.push(nuevoAlumno);
imprimirAlumnos

}
//CREAR FUNCION REGISTRAR
function registro(){
    console.log("Registra un estudiante");
//crear nuevo alumno
let newest = new Estudiante (inputNombre.value,
        inputCarrera.value, 
        inputCorreo.value, 
        inputCalifA.value,
        inputCalifB.value, 
        inputCalifC.value);
        console.log(newest);
}
//desplegar en consola

//imprimir el objeto en consola
     
//agreagar evento onclick en el boton
 {   
row +=`
<tr id="${estudiante.id}"">
<td> ${estudiante.Nombre}</td>
<td> ${estudiante.Carrera}</td>
<td> ${estudiante.Correo}</td>
<td> ${estudiante.CalifA}</td>
<td> ${estudiante.CalifB}</td>
<td> ${estudiante.CalifC}</td>
<td> ${estudiante.CalifA+estudiante.CalifB}</td>
<td> <button class="btn btn-sm"
onclick="borrarAlumno(${estudiante.id});
">Borrar</button></td>
/tr>
`;
}
document.getElementById("alumnosTabla").innerHTML=row;
}
//funcion limpiar
function limpiar(){
    document.getElementById("txtNombre").value="";
    document.getElementById("txtCorreo").value="";
    document.getElementById("txtCarrera").value="";
    document.getElementById("CalifA").value="";
    document.getElementById("CalifB").value="";
    document.getElementById("CalifC").value="";


}
//funcion  borrar alumno

function borrarAlumo(){
  crossOriginIsolated.log("Borrando")

}


//crear funcion init
function init(){
    let est= new Estudiante ("");
}
//ejecutar init
console.log("123");

