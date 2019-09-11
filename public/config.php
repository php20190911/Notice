<?php

// 建立PDO連線
function PDOdb() {
    $host    ='mysql:host=localhost;dbname=notice;charset=utf8';
    $account ='admin002';
    $password='JNvtB30uwZ3DphR4';
    try {
        $db = new PDO($host,$account,$password);
    } catch (PDOException $e) {
        echo 'SQL錯誤'.$e->getMessage();
    }
    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $db->setAttribute(PDO::ATTR_CASE, PDO::CASE_NATURAL);
    $db->exec("SET CHARACTER SET UTF8");
    return  $db;
}
?>