window.onload = function(){

var sb = document.getElementById("search");
var httpRequest = new XMLHttpRequest();
var term = "";
var q = "?q="
var url = "";
var results = document.getElementById("result");
var response = "";

var ga = document.getElementById("getAll");

    ga.onclick = function(){
        url = "https://info2180-lab6-devnub.c9users.io/request.php?q=&all=true"
        httpRequest.onreadystatechange = gaClick;
        httpRequest.open('GET', url);
        httpRequest.send();
        return false;
    }
    
    function gaClick(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                var response = httpRequest.responseText;
                var resp = response;
                results.innerHTML = response;
            }
            else{
                alert('Problem with your request');
            }
        }
    }
  
    sb.onclick = function(){
        url = "https://info2180-lab6-devnub.c9users.io/request.php"
        
        httpRequest.onreadystatechange = sbClick;
        term = "?q=";
        term += document.getElementById("sTerm").value;
        url += term;
        httpRequest.open('GET', url);//+q+term);
        httpRequest.send();
        return false;
    }
    
    function sbClick(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                var response = httpRequest.responseText;
                var resp = response;
                resp = resp.replace("<h3>","");
                resp = resp.replace("</h3>","");
                resp = resp.replace("<p>","  \n");
                resp = resp.replace("</p>","");
                
                results.innerHTML = response;
            }
            else{
                alert('Problem with your request');
            }
        }
    }
    
    
}