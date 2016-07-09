window.onload = function() { 
	
  

	
   
	var url = getUrlVars()["id"];
	var prods = localStorage.getItem('list')
	
 
   
    prods+=url+"_";

    localStorage.setItem('list',prods);
   
   
   
   
    
    var price = parseInt(getUrlVars()["price"]);
    var curtotal = parseInt(localStorage.getItem('total2'));
      var alpha = price+curtotal

    localStorage.setItem('total2',alpha);

   
}


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }