window.onload = function() { 
	
  

	
   
	var url = getUrlVars()["id"];
	var prods = localStorage.getItem('list')
    if (prods == '' || prods == null) {
	prods="";
}   
   
    prods+=url+"_";
   
    localStorage.setItem('list',prods);

}
