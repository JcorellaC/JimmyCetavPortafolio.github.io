$(document).ready(function(){

        $(function(){
        $.ajax({

            type: "GET",
            url: "../js/proyectos.json",
            dataType: "json",
            success:function(data){
                    
                listaProjects(data.proyectos);

            },

            error:function(jqXHR, textStatus, errorThrown) {

                console.log("Text Status:" +textStatus+"\nError:"+errorThrown);
                
            },
            complete:function(){
                        
            },
 
        });

        function listaProjects(proyectos){
            var projectlist = new Array;

            for(var i = 0; i < proyectos.length; i++){


                projectlist[i] = 
                //<html--
                    '<div class="show show-project ">' +
                        '<img class="img1" src="../img/' + proyectos[i].imagen1 + '.jpg">' +
                        '<div class="mask see-project">' +
                            '<img class="img1" src="../img/' + proyectos[i].imagen1 + '.jpg">' +
                            '<img class="img2" src="../img/' + proyectos[i].imagen2 + '.jpg">' +
                            '<img class="img3" src="../img/' + proyectos[i].imagen3 + '.jpg">' +
                            '<img class="clienteImg" src="../img/' + proyectos[i].imagenCliente + '.jpg">' +
                            '<h2>' + proyectos[i].ID + '</h2>'+
                            '<p class="description-text">' + proyectos[i].descripcion +'</p>' +
                            '<p class="cliente-text">' + proyectos[i].cliente + '</p>' +
                            '<p class="more-text">' + proyectos[i].more + '</p>' +
                            '<a href="#one-project" class="info buttom">Click to view more</a>' +
                            '<a class="hidden-link info buttom" href="../proyectos/' + proyectos[i].viewPage + '">View complete</a>' +
                            
                        '</div>' +

                    '</div>';
                    
                //--html>
                
            }

            var datos = '';
            $('#projects').on('click', '.see-project', function(){
                var imagen1 = $(this).children('img.img1').attr('src');
                var imagen2 = $(this).children('img.img2').attr('src');
                var imagen3 = $(this).children('img.img3').attr('src');
                var imagenCliente = $(this).children('img.clienteImg').attr('src');
                var titulo = $(this).children('h2.titulo').text();
                var texto1 = $(this).children('p.description-text').text();
                var texto2 = $(this).children('p.cliente-text').text();
                var texto3 = $(this).children('p.more-text').text();
                var link = $(this).children('a.hidden-link').attr('href');

                datos =
                //<html--
                    '<div class="specific-container">' + 
                        '<h2>' + titulo + '</h2>'+
                        '<section class="tabs">'+
                            '<input id="tab-1" type="radio" name="radio-set" class="tab-selector-1" checked="checked"/>' +
                            '<label for="tab-1" class="tab-label-1">Project</label>' +
                    
                            '<input id="tab-2" type="radio" name="radio-set" class="tab-selector-2"/>' +
                            '<label for="tab-2" class="tab-label-2">Customer</label>' +
                    
                            '<input id="tab-3" type="radio" name="radio-set" class="tab-selector-3"/>' +
                            '<label for="tab-3" class="tab-label-3">View</label>' +
                            '<div class="clear-shadow"></div>' +
                
                            '<div class="content">' +
                                '<div class="content-1">' +
                                    '<h2>' + titulo + '</h2>' +
                                    '<p>' + texto1 + '</p>' +
                                    '<h3>How we work</h3>' +
                                    '<img class="proyect-image" src="' + imagen1 + '">' +
                                    '<img class="proyect-image" src="' + imagen2 + '">' +
                                    '<img class="proyect-image" src="' + imagen3 + '">' +
                                '</div>' +
                                '<div class="content-2">' +
                                    '<h2>Customer</h2>' +
                                    '<p>' + texto2 + '</p>' +
                                    '<h3>View</h3>' +
                                    '<img class="proyect-image" src="' + imagenCliente + '">' +
                                    '</div>' +
                                '<div class="content-3">' +
                                    '<h2>More about</h2>' +
                                    '<p>' + texto3 + '</p>' +
                                    '<a class="hidden-link info buttom" href="' + link + '">View complete</a>' +
                                '</div>' +
                            '</div>' +
                        '</section>' +
                    '</div>';
                //--html>

                $('#one-project').html(datos);
            });
            

            $('#projects').append(projectlist);
            


        }


    });

});





