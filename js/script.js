var portafolio = {}; // crea una variable global contenedora

        portafolio.administrador = function(){

        	var links = [
                new link('facebook'),
                new link('twitter'), 
                new link('github')
            ];

            function socialNetworks(arreglo){
            
                var contenido = '<ul class="links">';
                
                for(var k=0; k < arreglo.length; k++){
                         contenido += '<li class="network'+k+'"><a href="#">'+arreglo[k].net+'</a></li>';
                } 
             
                contenido += '</ul>';
                
                document.getElementById('contenedor-links').innerHTML=contenido;
            }


           return{

               
               
              
               mostrarNetworks: function(){
                    socialNetworks(links);
               }
           }

        }();

        function link(n){
            this.net = n;
        
        }

       portafolio.administrador.mostrarNetworks();