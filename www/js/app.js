document.addEventListener('deviceready',function(e) {
    var lock = new Auth0Lock(
      // All these properties are set in auth0-variables.js
      AUTH0_CLIENT_ID,
      AUTH0_DOMAIN
  
    );
   
   
    var userProfile;

 if ($('.lock').val() == '') { 
      e.preventDefault();
      lock.show(function(err, profile, token) {
	      
        if (err) {

        } else {
	        
var WSurl= "http://rogersapp.azurewebsites.net/Rogers_API.asmx/addClientJSON?fullname="+profile.name+"&password="+"Social Login"+"&profilepictureurl="+profile.picture+"&email="+profile.email+"&address="+"To be defined @ checkout"
 	

	var req = $.ajax({
		url: WSurl,
		timeout: 20000,
		success: function(datos) {
		
		  userProfile = profile;
          localStorage.setItem('email', profile.email);
          localStorage.setItem('name', profile.name);   
          localStorage.setItem('picture', profile.picture);     
          window.location.replace("index.html");   
			}

	}); 
         
    
        }
      });

}

}, false);
