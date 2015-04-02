var portafolio = {}; // crea una variable global contenedora

        portafolio.administrador = function(){

        	var links = [
                new link('facebook-square'),
                new link('twitter-square'), 
                new link('github-square'),
                new link('linkedin-square')
            ];

            function socialNetworks(arreglo){
            
                var contenido = '<ul class="links">';
                
                for(var k=0; k < arreglo.length; k++){
                         contenido += '<li class="network network'+k+'"><span class="fa fa-'+arreglo[k].net+' "></span><a class="networkLink" href="#"></a></li>';
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