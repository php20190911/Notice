<?php
// 引入PDO連線
  include("../public/config.php");
//讀取csv檔案
  $filename = "test.csv";
  $fp = fopen($filename,'rb');
  $content=fread($fp,filesize($filename));
//將字串以,分割成陣列儲存(一維陣列)
  $aaa = explode(",", $content);
//因為最後一個字串後的,會多儲存到一個空陣列,故刪除最後一個空陣列
  array_pop($aaa);
//天氣欄位有7列,將陣列分割成每七個為一組陣列(多維陣列)
  $contents=array_chunk($aaa, 7);
//計算有幾筆天氣資料(24)
  $x=count($contents);
//將每一筆資料存入資料庫
  for($i=0;$i<$x;$i++){
    $input = array(
      ':time' => $contents[$i][0],
      ':status' => $contents[$i][1],
      ':rain' => $contents[$i][2],
      ':c' => $contents[$i][3],
      ':comfort' => $contents[$i][4],
      ':wind' => $contents[$i][5],
      ':wet' => $contents[$i][6],
  );
  $sql = "INSERT INTO weather (time,status,rain,c,comfort,wind,wet) VALUES 
        (:time,:status,:rain,:c,:comfort,:wind,:wet)";

  $db = PDOdb();
  $xd = $db->prepare($sql);
  $xd->execute($input);
  $db = null;
  };
  

    
?>