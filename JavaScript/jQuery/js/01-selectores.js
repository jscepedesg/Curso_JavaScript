$(document).ready(function ()
{
    //Selector de ID
    var rojo = $("#rojo").css("background","red")
                         .css("color","white");

    //Selectores de clases
    var mi_clase = $('.zebra');
    mi_clase.css("border","5px dashed black")

    console.log(mi_clase[2]);

    //Selectores de etiqueta
    var parrafos = $('p');

    parrafos.click(function() 
    {
        $(this).removeClass("zebra");
    });
});