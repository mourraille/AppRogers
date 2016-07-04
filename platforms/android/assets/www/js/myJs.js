window.onload = function() {
	
     var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
	
	
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {

	var lat = position.coords.latitude;
    var lon = position.coords.longitude;
      localStorage.setItem('lat', lat);
            localStorage.setItem('lon', lon);
   };

   function onError(error) {
     
   }
   
 $("#greeting").append("Hola, " + localStorage.getItem('name')+" !");
    

      
/*
     
 if (window.location.hash != null && window.location.hash != '') {
	      $('body').animate({scrollTop: $(window.location.hash).offset().top}, 0);

 }
*/
     
};

function logout() {
	
	localStorage.removeItem('id_token');
userProfile = null;
window.cookies.clear(function() {
    alert('Cookies cleared!');
});
window.location.href = "login.html";

}

