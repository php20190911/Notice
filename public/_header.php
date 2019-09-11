<?php
if (empty($_SESSION['user_name'])) {
    header("Location: ../public/login.php");
    exit;
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
    <link href="../css/table-responsive.css" rel="stylesheet" />
    <link href="../assets/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="../assets/bootstrap-fileupload/bootstrap-fileupload.css" />
    <link rel="stylesheet" href="../css/owl.carousel.css" type="text/css">

    <!--right slidebar-->
    <!-- <link href="../css/slidebars.css" rel="stylesheet"> -->

    <!-- Custom styles for this template -->
    <link href="../css/style.css" rel="stylesheet">
    <link href="../css/style-responsive.css" rel="stylesheet" />
    <script src="../js/jquery.js"></script>

</head>

<body>

    <section id="container">
        <!--header start-->
        <header class="header white-bg">
            <div class="sidebar-toggle-box">
                <i class="fa fa-bars"></i>
            </div>    
            <!--logo start-->
            <a href="./index.php" class="logo">創視科技<span>有限公司</span></a>
            <!--logo end-->
            <div class="top-nav">
                <!--search & user info start-->
                <ul class="nav pull-right top-menu">
                    <li>
                        <input type="text" class="form-control search" placeholder="Search">
                    </li>
                    <!-- user login dropdown start-->
                    <li class="dropdown">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <img alt="" src="../img/avatar1_small.png">
                            <span class="user_name"><?= $_SESSION['user_name']; ?></span>
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu extended logout dropdown-menu-right">
                            <div class="log-arrow-up"></div>
                            <li><a href="#"><i class=" fa fa-suitcase"></i>尚無功能</a></li>
                            <li><a href="#"><i class="fa fa-cog"></i>尚無功能</a></li>
                            <li><a href="#"><i class="fa fa-bell-o"></i>尚無功能</a></li>
                            <li><a href="../public/logout.php"><i class="fa fa-key"></i>登出</a></li>
                        </ul>
                    </li>
                    <!-- user login dropdown end -->
                </ul>
                <!--search & user info end-->
            </div>
        </header>
        <!--header end-->
        <!--sidebar start-->
           <!--sidebar start-->
           <aside>
            <div id="sidebar" class="nav-collapse">
                <!-- sidebar menu start-->
                <ul class="sidebar-menu" id="nav-accordion">
                    <li>
                        <!-- <a id="index" href="./index.php">
                            <i class="fa fa-dashboard"></i>
                            <span>主頁</span>
                        </a> -->
                    </li>
                    <li>
                        <a id="notice" href="./notice.php">
                            <i class="fa fa-glass"></i>
                            <span>公告</span>
                        </a>
                    </li>
                <!-- sidebar menu end-->
            </div>
        </aside>
        <!--sidebar end-->
       