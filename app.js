window.onload = function(){

//var $;
var sb = document.getElementById("search");
var httpRequest = new XMLHttpRequest();
var term = "";
var q = "?q="
var url = "";
var results = document.getElementById("result");
var response = "";

    
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