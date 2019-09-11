<?php
session_start();

if(isset($_SESSION['user_name'])) {
    header("Location: ../view/index.php");
    exit;
}
include("./config.php");

if(isset($_POST['account']) && isset($_POST['password']) && $_POST['account'] != "" && $_POST['password'] !="") {

    $data = array(
        'account' => $_POST['account'],
        'passwords' => $_POST['password']
    );

    $db = PDOdb();
    $sql = "SELECT user_name,user_id,user_right FROM user WHERE user_account = :account AND user_password = :passwords";
    $accpws = $db->prepare($sql);
    $accpws->execute($data);
    $once = $accpws->fetch(PDO::FETCH_ASSOC);
    $count = $accpws->rowCount();
    $db = null;
        
    if ($count == 1) {        
        $_SESSION['user_name'] = $once['user_name'];
        $_SESSION['user_id'] = $once['user_id'];
        $_SESSION['user_right'] = $once['user_right'];
        header("Location: ../view/notice.php");
        exit;
    }else {
        $msg = "帳號密碼錯誤";
    }
}
?>

<!DOCTYPE html>
<html lang="zh-TW">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <link rel="shortcut icon" href="../img/favicon.ico">

    <title>創視科技有限公司</title>

    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/bootstrap-reset.css" rel="stylesheet">
    <!--external css-->
    <link href="../assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <!-- Custom styles for this template -->
    <link href="../css/style.css" rel="stylesheet">
    <link href="../css/style-responsive.css" rel="stylesheet" />


</head>

<body class="login-body">

    <div class="container">
        <form class="form-signin" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <h2 class="form-signin-heading">創視科技有限公司後台系統</h2>
            <div class="login-wrap">
                <input type="text" class="form-control" name="account" placeholder="User ID" autofocus>
                <input type="password" class="form-control" name="password" placeholder="Password">

                <?php if(isset($msg)){ ?>
                <p style="color: red"><?=$msg?></p>
                <?php } ?>

                <button class="btn btn-lg btn-login btn-block" type="submit">登入</button>
            </div>
        </form>
    </div>



    <!-- js placed at the end of the document so the pages load faster -->
    <script src="../js/jquery.js"></script>
    <script src="../js/bootstrap.bundle.min.js"></script>


</body>

</html>