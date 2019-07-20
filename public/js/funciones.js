$( document ).ready(function() {
    $(document).on('keyup', "input[type=text]", function () {
    $(this).val(function (_, val) {
        return val.toUpperCase();
    });
});
});

// EVITAR ENTER SUBMIT

$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});
// FIN EVITAR ENTER SUBMIT

// EVITAR DOBLE SUBMIT 

$(document).ready(function() {


        $('form').submit(function(){
    $(this).find(':input[type=submit]').prop('disabled', true);
});

      });


 // FIN EVITAR DOBLE SUBMIT




function alpha(e) 
         {
         key = e.keyCode || e.which;
           tecla = String.fromCharCode(key).toLowerCase();
           //alert(key);
           letras = " ÃƒÂ¡ÃƒÂ©ÃƒÂ­ÃƒÂ³ÃƒÂºabcdefghijklmnÃƒÂ±opqrstuvwxyz";
           //especiales = [8,37,39,46];
            especiales = [8,39,46,241,225,233,237,243,250];
           tecla_especial = false
           for(var i in especiales){
                if(key == especiales[i]){
                    tecla_especial = true;
                    break;
                }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
}

function soloNumeros(evt)
{
  key = (document.all) ? evt.keyCode :evt.which;
  //alert(key);
    if(key==17)return false;
  /* digitos,del, sup,tab,arrows*/
  return ((key >= 48 && key <= 57) || key == 8 || key == 127 || key == 9 || key==0);
}
 