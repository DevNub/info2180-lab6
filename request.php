<?php

// accept a term (keyword)
// respond with a value

$query = $_GET['q'];
$getAll = [
    "&all=True" => getAll(),
];

$definition = [
    "definition" => "A statement of the exact meaning of a word, especially in a dictionary.",
    "bar" => "A place that sells alcholic beverages",
    "ajax" => "Technique which involves the use of javascript and xml (or JSON)",
    "html" => "The standard markup language for creating web pages and web applications.",
    "css" => "A style sheet language used for describing the presentation of a document written in a markup language.",
    "javascript" => "A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.",
    "php" => "A server-side scripting language, and a powerful tool for making dynamic and interactive websites",
];

print "<h3>" . "Result" . "</h3>";
print "<h3>" . strtoupper($query) . "</h3>";
print "<p>" . $definition[$query] . "</p>";



function getXML($array, $wrap1='<ENTRIES>', $wrap2='</ENTRIES>'){
    $result = "<?xml version='1.0' encoding='UTF-8'?>";
    $result .= $wrap."\n";
    if(is_array($arr)){
        foreach($array as $key=>$value){
            $key = strtoupper($key);
            $result .= '<DEFINITION NAME= "' . $key . '" AUTHOR="UNDEFINED">\n';
            $result .= $value .'</definition>';
        }
        $result .= $wrap2."\n";
    }
    echo "allaa"."\n";
    
    return $result;
}

function getAll(){
    print getXML($definition);
}