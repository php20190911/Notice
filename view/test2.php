<?php
//天氣api轉csv
$weather = file_get_contents('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-073?Authorization=CWB-8FDFA985-63CC-4B34-B81D-1FA41231A16F&locationName=%E8%A5%BF%E5%B1%AF%E5%8D%80');
//json轉成array
$weather = json_decode($weather,true);
//西屯區天氣list
$cc=$weather["records"]["locations"][0]["location"][0]["weatherElement"][6]["time"];
//表格名處理
$head = array ('時間','天氣','降雨機率','溫度','舒適度','風速','相對溼度');
$header = implode(',', $head).",". PHP_EOL;

$fp = fopen('test.csv','w');

//表格項目處理
$content = '';
for($i=1;$i<=23;$i++){
    $b=explode("。",$cc[$i]["elementValue"][0]["value"]);
    array_unshift($b, $cc[$i]["startTime"]);
    $content .= implode(',', $b). PHP_EOL;  
};
// 拼接表格名+表格項目
$csv = $header.$content;
//寫入並關閉資源
fwrite($fp, $csv);
fclose($fp);

?> 
