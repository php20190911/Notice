<?php
session_start();
include("../public/_header.php");
include("../public/config.php");

// $db = PDOdb();                                                 // 建立新PDO連線
// $sql = "SELECT * FROM announcement";                           // SQL語法宣告
// $data = $db->prepare($sql);                                    // 下SQL語法進資料庫
// $data->execute();                                              // 下SQL語法進資料庫
// $data->setFetchMode(PDO::FETCH_ASSOC);                         // 指定撈出來資料個陣列格式
// $row = $data->fetch();                                         // 將資料陣列放入$row
// $db = null;                                                    // 關閉PDO連線
?>
<!--main content start-->
<section id="main-content">
    <section class="wrapper site-min-height">
        <div class="row">
            <div class="col-12 text-center"></div>
            <div class="col-12 text-center"></div>
            <div class="py-5 col-12 text-center"></div>
        </div>
    </section>
</section>



<!--main content end-->
<?php include("../public/_footer.php"); ?>