document.addEventListener('deviceready',function(e) {
    var lock = new Auth0Lock(
      // All these properties are set in auth0-variables.js
      AUTH0_CLIENT_ID,
      AUTH0_DOMAIN
  
    );
   
   
    var userProfile;

 if ($('.lock').val() == '') { 
      e.preventDefault();
      lock.show(function(err, profile, token)  {
	      connections: ['Username-Password-Authentication'];
	      
        if (err) {

        } else {
	        
var str = encodeURIComponent(profile.picture);      
var WSurl= "http://approgers.azurewebsites.net/Rogers_API.asmx/addClientJSON?fullname="+profile.name+"&password=null&profilepic="+str+"&email="+profile.email+"&address=to be defined @ checkout"
 	

	var req = $.ajax({
		url: WSurl,
		timeout: 20000,
		success: function(datos) {
		
		  userProfile = profile;
		  var productlist = "";
		  localStorage.setItem('list', productlist);
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
