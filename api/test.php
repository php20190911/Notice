<?php
$weather = file_get_contents('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-073?Authorization=CWB-8FDFA985-63CC-4B34-B81D-1FA41231A16F&locationName=%E8%A5%BF%E5%B1%AF%E5%8D%80');
//json轉成array
$weather = json_decode($weather,true);
//西屯區天氣list
$cc=$weather["records"]["locations"][0]["location"][0]["weatherElement"][6]["time"];
//放表格名
$head = array ('時間','天氣','降雨機率','溫度','舒適度','風速','相對溼度');
$header = implode(',', $head) 
// // 将表格名通过fputcsv写到文件句柄
// fputcsv ( $fp, $head );

//放表格項目
// for($i=1;$i<=23;$i++){
//     $b=explode("。",$cc[$i]["elementValue"][0]["value"]);
//     array_unshift( $b , $cc[$i]["startTime"] );

//     fputcsv ( $fp, $b);
// };


$fp = fopen('weather.csv','w');
// // 處理頭部標題
// $header = implode(',', $head) 
// // 處理內容
// $content = '';
// foreach ($csv_body as $k => $v) {
// $content .= implode(',', $v) . PHP_EOL;
// }
// // 拼接
// $csv = $header.$content;
// 寫入並關閉資源
fwrite($fp, $header);
fclose($fp);

?> 