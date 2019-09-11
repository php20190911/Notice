<?php
session_start();

// 判斷是否有登入，有才能做動，沒有彈回登入頁面
if (empty($_SESSION['user_name'])) {
    header("Location: ../public/login.php");
    exit;
} else {
    // 引入PDO連線
    include("../public/config.php");
}
// 用GET來判斷功能
$switchgo = $_GET['switchgo'];

if ($switchgo == 'load') {
    loadDB();
} else if ($switchgo == 'new') {
    newDB();
} else if ($switchgo == 'edit') {
    editDB();
} else if ($switchgo == 'del') {
    delDB();
} else if ($switchgo == 'detail') {
    detailDB();
} else if ($switchgo == 'type') {
    sel_type();
}

// 一開始載入的資料 (全部)
function loadDB()
{
    // 抓取公告資料
    $db=PDOdb();
    $notice = $db->query("SELECT COUNT(*)  FROM notice  WHERE notice_tag='1' ORDER BY notice_id");
    $no=$notice->fetchAll();
    $data_nums =$no["0"]["0"]; //統計總比數
    $per = 10; //每頁顯示項目數量
    $pages = ceil($data_nums/$per); //取得不小於值的下一個整數
    if (!isset($_GET["page"])){ //假如$_GET["page"]未設置
        $page=1; //則在此設定起始頁數
    } else {
        $page = intval($_GET["page"]); //確認頁數只能夠是數值資料
    }
    $start = ($page-1)*$per; //每一頁開始的資料序號
    $notice = $db->query("SELECT * FROM notice  WHERE notice_tag='1' ORDER BY notice_id LIMIT ".$start.", ".$per);
    $row = $notice->fetchAll();
    $db=null;
    $jsonarr=array('row'=>$row,'page'=>$pages);
    echo json_encode($jsonarr);

}
//notice.php頁面的notice_type load

function sel_type() {
    
    
    $db = PDOdb();
    $sql = "SELECT * FROM notice_type WHERE type_tag='1'";
    $data = $db->prepare($sql);
    $data->execute();
    $data->setFetchMode(PDO::FETCH_ASSOC);
    $row = $data->fetchAll();
    $db = null;
    echo json_encode($row);

}



// // 新增資料&更新資料
function newDB()
{
    if (isset($_POST["id"])) {

        $db = PDOdb();
        $sql = "SELECT * FROM notice WHERE notice_id = :notice_id";
        $data = $db->prepare($sql);
        $data->execute(array(':notice_id' => $_POST["id"]));
        $count = $data->rowCount();
        $db = null;

        if ($count == "1") {
            $input = array(
                ':notice_id' => $_POST["id"],
                ':notice_date' => $_POST["notice_date"],
                ':notice_user' => $_POST["notice_user"],
                ':notice_title' => $_POST["notice_title"],
                ':notice_content' => $_POST["notice_content"],
                ':notice_type' => $_POST["notice_type"],
                ':notice_remark' => $_POST["notice_remark"],
            );

            $sql = "UPDATE notice SET notice_date = :notice_date, notice_user = :notice_user,notice_title = :notice_title,
                    notice_content = :notice_content,notice_type = :notice_type, notice_remark = :notice_remark WHERE notice_id = :notice_id";
        }

        $msg = "更新";
    } else {
        $input = array(
            ':notice_date' => $_POST["notice_date"],
            ':notice_user' => $_POST["notice_user"],
            ':notice_title' => $_POST["notice_title"],
            ':notice_content' => $_POST["notice_content"],
            ':notice_type' => $_POST["notice_type"],
            ':notice_remark' => $_POST["notice_remark"],
        );
        $sql = "INSERT INTO notice (notice_date,notice_user,notice_title,notice_content,notice_type,notice_remark) VALUES 
                (:notice_date,:notice_user,:notice_title,:notice_content,:notice_type,:notice_remark)";

        $msg = "新增";
    }

    $db = PDOdb();
    $newmember = $db->prepare($sql);
    $newmember->execute($input);
    $count = $newmember->rowCount();
    $db = null;
    $row = array($count, $msg);
    echo json_encode($row);
}

// 編輯抓資料
function editDB()
{
    $input = array(
        ':notice_id' => $_POST['id']
    );

    $db = PDOdb();
    $sql = "SELECT * FROM notice WHERE notice_id = :notice_id";
    $data = $db->prepare($sql);
    $data->execute($input);
    $data->setFetchMode(PDO::FETCH_ASSOC);
    $row = $data->fetchAll();
    $db = null;
    echo json_encode($row);
}

//刪除資料
function delDB()
{
    $input = array(
        ':notice_id' => $_POST['id']
    );

    $db = PDOdb();
    $sql = "UPDATE notice SET notice_tag = '0' WHERE notice_id = :notice_id";
    $newmember = $db->prepare($sql);
    $newmember->execute($input);
    $count = $newmember->rowCount();
    $db = null;
    $row = array($count, $msg);
    echo json_encode($row);

}

// 詳細編輯抓資料
function detailDB()
{
    $input = array(
        ':notice_id' => $_POST['id']
    );

    $db = PDOdb();
    $sql = "SELECT * FROM notice WHERE notice_id = :notice_id";
    $data = $db->prepare($sql);
    $data->execute($input);
    $data->setFetchMode(PDO::FETCH_ASSOC);
    $row = $data->fetchAll();
    $db = null;
    echo json_encode($row);
}