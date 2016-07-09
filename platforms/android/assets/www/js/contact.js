  var name = localStorage.getItem('name');
  var email = localStorage.getItem('email');
  var pic = localStorage.getItem('picture');
  var lon = localStorage.getItem('lon');
  var lat = localStorage.getItem('lat');
  var cancelar = parseInt(localStorage.getItem('total2'));
  var address = lat +"_"+lon;
  var prods = localStorage.getItem('list');
  var total = 0;
var i = 0;
  if (prods == '' || prods == null) {
  prods="";
}




window.onload = function() {

   $("document.body").hide();
   $('#labelemail').text("E-mail: " + email);
   $('#labelnombre').text("Nombre: " + name);
    $('#labeltotal').text("TOTAL A CANCELAR: " + cancelar +" colones.");
   $('#profilepic').attr("src",pic);
  
  var prods2 = prods.slice(0,-1);
  var list = prods2.split('_');
  
 
}


  


function runws() {

 var WSurl= 'http://approgers.azurewebsites.net/Rogers_API.asmx/addOrderJSON?email='+email+'&prods='+prods+'&total='+cancelar+'&coordenates='+address;

	var req = $.ajax({
		url: WSurl,
		timeout: 20000,
		success: function(datos) {
            alert( "Tu orden ha sido enviada, gracias !" );
           window.location.replace("index.html");   
			},
    error: function (x, t, m) {
	    alert('error');
      mensajeError(x, t, m);
    }
		

	}); 

}

function mensajeError(x, t, m) {
  if (t==="timeout") {
    alert("La coneccion a internet no es buena, reinicia la app :(");
  }else{
    alert("La coneccion a AZURE esta caída temporalmente :(");
  }
}