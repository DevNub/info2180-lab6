window.onload = function(){

//var $;
var sb = document.getElementById("search");
var httpRequest = new XMLHttpRequest();
var term = "";
var q = "?q="
var url = "";
var results = document.getElementById("sResults");

    
    sb.onclick = function(){
        url = "https://info2180-lab6-devnub.c9users.io/request.php"
        term = document.getElementById("sTerm").value;
        httpRequest.onreadystatechange = sbClick;
        httpRequest.open('GET', url+q+term);
        httpRequest.send();
    }
    
    function sbClick(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                var response = httpRequest.responseText;
                
                response = response.replace("<h3>","");
                response = response.replace("</h3>","");
                response = response.replace("<p>","  \n");
                response = response.replace("</p>","");
                
                alert(response);
            }
            else{
                alert('Problem with your request');
            }
        }
        
    }
}