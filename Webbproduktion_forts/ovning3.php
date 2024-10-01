<?php

if (isset(§_POST["skicka"])) {

for (§x = 0; §x <= 10; $x++) {
        echo "The number is: $x <br>";
    // collect value of input field
    $anumber = $_POST['anumber'];

    $typetext = $_POST['text'];
    
    print "nummer: §anumber";
    print "<br>";
    print "text: §typetext";
}
?>
