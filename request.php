<?php

// accept a term (keyword)
// respond with a value

$query = htmlspecialchars($_GET['q']);
$all = htmlspecialchars($_GET['all']);

$definition = [
    "definition" => "A statement of the exact meaning of a word, especially in a dictionary.",
    "bar" => "A place that sells alcholic beverages",
    "ajax" => "Technique which involves the use of javascript and xml (or JSON)",
    "html" => "The standard markup language for creating web pages and web applications.",
    "css" => "A style sheet language used for describing the presentation of a document written in a markup language.",
    "javascript" => "A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.",
    "php" => "A server-side scripting language, and a powerful tool for making dynamic and interactive websites",
];

$authors = ["John", "Mary", "Kimberly", "Daniel", "Yannick", "Batman"];
//$author = $authors[array_rand($authors)];


if($all!=true){
    print "<h3>" . "Result" . "</h3>";
    print "<h3>" . strtoupper($query) . "</h3>";
    print "<p>" . $definition[$query] . "</p>";
}
else{

    $xmldata = '<?xml version="1.0" encoding="UTF-8"?>';
    
    foreach ($definition as $key => $val) {
        $pick = rand(0, count($authors) - 1);
        $keyUP = strtoupper($key);
        //$author = $authors[array_rand($authors)];
       $xmldata .="
       <entries><li><definition>
            <name><h3>$keyUP</h3></name>
            <meaning><p>$val</p></meaning>
            <author><p>—$authors[$pick]</p></author>
        </definition></li></entries>";
    }

print "<ol>";
//echo "<pre>";
header('Content-Type: text/xml');
//$xmlOutput = new SimpleXMLElement($xmldata);
//echo $xmlOutput->asXML();
echo $xmldata;
//echo "</pre>";
print "</ol>";

}


