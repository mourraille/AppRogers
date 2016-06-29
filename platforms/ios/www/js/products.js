window.onload = function() { 
	
	var containerdiv = document.createElement("div");
    containerdiv.setAttribute("class", "Popular-Restaurants-grid wow fadeInRight");
    containerdiv.setAttribute("data-wow-delay", "0.4s");
   
    	
    var imagediv = document.createElement("div");
    imagediv.setAttribute("class", "col-md-3 restaurent-logo");
    
    
    var img = document.createElement("img");
    img.setAttribute("class", "img-responsive");
    img.setAttribute("src", "images/restaurent-logo1.jpg");
    img.setAttribute("alt", "");
    imagediv.appendChild(img);
    
    var productdiv  = document.createElement("div");
    productdiv.setAttribute("class", "col-md-2 restaurent-title");



    var productnamediv  = document.createElement("div");
    productnamediv.setAttribute("class", "logo-title logo-title-1");
    
    var productnameh4 = document.createElement("h4");        
    productnameh4.innerHTML = "Hamburgesa Rogelio's";
    productnamediv.appendChild(productnameh4);

    
    var descriptiondiv = document.createElement("div");
    descriptiondiv.setAttribute("class", "rating");
    var span = document.createElement("span");
    span.innerHTML = "Deliciosa hamburguesa con tocineta y queso derretido";
    descriptiondiv.appendChild(span);
    
    var buydiv = document.createElement("div");
    buydiv.setAttribute("class", "col-md-7 buy");
    var spanprice = document.createElement("span");
    spanprice.innerHTML = '$45';
    var buy = document.createElement("input");
    buy.setAttribute("type", "button");
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

    
     

	
}