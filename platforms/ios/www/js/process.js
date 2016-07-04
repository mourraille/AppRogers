window.onload = function() { 
	
  

	
   
	var url = getUrlVars()["id"];
	var prods = localStorage.getItem('list')
    if (prods == '' || prods == null) {
	prods="";
}   
   
    prods+=url+"_";
   
    localStorage.setItem('list',prods);

}


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }