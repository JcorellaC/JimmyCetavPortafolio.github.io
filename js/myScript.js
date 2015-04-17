var portafolio = {}; 

        portafolio.administrador = function(){
          window.onload = function () {
            document.formularioContacto.addEventListener('submit', validarFormulario);
          }

          var email = document.formularioContacto.email;
          console.log (email);
          var todoCorrecto = true;
          var formulario = document.formularioContacto;
          
          //Un closure es una función que tiene acceso al ámbito padre, incluso después de que la función madre se ha cerrado.

         function validarFormulario(evObject) {
          evObject.preventDefault();

            for (var i=0; i<formulario.length; i++) {
                if(formulario[i].type =='text') {
                    if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
                        alert (formulario[i].name+ ' no puede estar vacío o contener sólo espacios en blanco');
                        todoCorrecto=false;
                    }
                }
            }
            if (email.value == '' || !/\S+@\S+\.\S+/.test(email.value)){
              alert ('Please enter a valid email address.');
              todoCorrecto=false;
            }

  if (todoCorrecto ==true) {
    formulario.submit();
  }
}

 function verAyuda(ayuda) {
  document.getElementById('help').innerHTML = ayuda;
}

function crearAyuda(ayuda) {
  return function() {
    verAyuda(ayuda);
  };
}

function infoAyuda() {
  var textoAyuda = [
      {'id': 'email', 'ayuda': 'Your e-mail address'},
      {'id': 'name', 'ayuda': 'Your full name'},
      {'id': 'mesage', 'ayuda': 'That you need me to say'}
    ];

  for (var i = 0; i < textoAyuda.length; i++) {
    var objeto = textoAyuda[i];
    document.getElementById(objeto.id).onfocus = crearAyuda(objeto.ayuda);
  }
}

infoAyuda();
}();

//Modulo es el entorno de programación orientado a objetos,donde las variables internas las llamamos propiedades 
//mientras que a las funciones, las llamamos métodos.
