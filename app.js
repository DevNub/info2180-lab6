window.onload = function(){

var sb = document.getElementById("search");
var httpRequest = new XMLHttpRequest();
var url = "";
    
    sb.onclick = function(){
        url = "https://info2180-lab6-devnub.c9users.io/request.php"
        httpRequest.onreadystatechange = sbClick;
        httpRequest.open('GET', url)
        httpRequest.send();
    }
    
    function sbClick(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                var response = httpRequest.responseText;
                alert(response);
            }
            else{
                alert('Problem with your request');
            }
        }
        
    }
}