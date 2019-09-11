<?php
$myfile = fopen("test1.csv", "w") or die("Unable to open file!");
$txt = "aaa,bbb,ccc\n";
fwrite($myfile, $txt);
$txt = "111,222,333\n";
fwrite($myfile, $txt);
fclose($myfile);

$filename="test.csv";    //要下載的檔名
header("Content-Type: application/force-download");
header("Content-Disposition: attachment; filename=".basename($filename));  
readfile($filename);




?>