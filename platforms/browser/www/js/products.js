window.onload = function() { 
    $("document.body").hide();
 
  var total = 0;
  
  localStorage.setItem('total',total);
 
  var req = $.ajax({
    url: 'http://rogersapp.azurewebsites.net/Rogers_API.asmx/searchProductJSON?productname=',
    dataType:'json',
    timeout: 10000,
    success: function(datos){
     loadProducts(datos);
    },
    error: function (x, t, m) {
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
	    
     


function loadProducts(datos) {
	$.each(datos, function(){
	var containerdiv = document.createElement("div");

    containerdiv.setAttribute("class", "Popular-Restaurants-grid wow fadeInRight");
    containerdiv.setAttribute("data-wow-delay", "0.4s");
    containerdiv.setAttribute("style", "visibility: visible; animation: fadeInLeft 0.4s; -webkit-animation: fadeInLeft 0.7s;");
    	
    var imagediv = document.createElement("div");
    imagediv.setAttribute("class", "col-md-3 restaurent-logo");
    
    
    var img = document.createElement("img");
    img.setAttribute("class", "img-responsive");
    img.setAttribute("src", this.IMAGEURI);
      img.setAttribute("width", "110");
        img.setAttribute("height", "110");
    img.setAttribute("alt", "");
    imagediv.appendChild(img);
    
    var productdiv  = document.createElement("div");
    productdiv.setAttribute("class", "col-md-2 restaurent-title");



    var productnamediv  = document.createElement("div");
    productnamediv.setAttribute("class", "logo-title logo-title-1");
    
    var productnameh4 = document.createElement("h4");        
    productnameh4.innerHTML = this.PRODUCTNAME;
    productnamediv.appendChild(productnameh4);

    
    var descriptiondiv = document.createElement("div");
    descriptiondiv.setAttribute("class", "rating");
    var span = document.createElement("span");
    span.innerHTML = this.DESCRIPTION;
    descriptiondiv.appendChild(span);
    
    var buydiv = document.createElement("div");
    buydiv.setAttribute("class", "col-md-7 buy");
    var spanprice = document.createElement("span");
    spanprice.innerHTML = "&#8353; "+this.PRICE;
    var buy = document.createElement("input");
    buy.setAttribute("type", "button");
    buy.setAttribute("onclick", "addToList(this.PRODUCT_ID)");
    buy.setAttribute("value", "Agregar!");
    
    var clear = document.createElement("div");
    clear.setAttribute("class", "clear")
    
    buydiv.appendChild(spanprice);
    buydiv.appendChild(buy);
    
    productdiv.appendChild(productnamediv);
    productdiv.appendChild(descriptiondiv);
    
    
    
    containerdiv.appendChild(imagediv);
    containerdiv.appendChild(productdiv);
    containerdiv.appendChild(buydiv);
    containerdiv.appendChild(clear);

     document.getElementById("productos").appendChild(containerdiv)

});
	
}