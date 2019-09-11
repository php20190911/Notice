<?php
session_start();
if ($_SESSION['member_access'] < "3") {
    include("../public/_header.php");
} else {
    header("Location: ./error.php");
    exit;
}



?>
<script>
localStorage.member = "<?=$_SESSION['user_right']?>";
</script>
<script src="../script/notice.js"></script>
<!--main content start-->
<section id="main-content">
    <section class="wrapper site-min-height">
        <!-- pay_type list start -->
        <div class="row">
            <div class="col-lg-12">
                <section class="card">
                    <header class="card-header">
                        公告列表
                        <?if($_SESSION['user_right']=="admin"){?>
                            <button type="button" class="btn btn-primary ml-5" data-toggle="modal" data-target="#newlist" onclick="clean()">
                                新增公告
                            </button>
                        <?php } ?>                       
                    </header>
                    <div class="card-body">
                        <section id="flip-scroll">
                            <table class="table table-bordered table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th>發布日期</th>
                                        <th>發布者</th>
                                        <th>公告標題</th>
                                        <th>消息類型</th>
                                        <th>備註</th>
                                        <?if($_SESSION['user_right']=="admin"){?>
                                        <th>編輯</th>
                                        <?php } ?>
                                    </tr>
                                </thead>
                                <tbody id="listtable"></tbody>
                            </table>
                            <div id='pagess'></div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
        <!-- pay_type list end -->
    </section>
</section>
<div id="xxx"></div>
<!-- 新增/修改 Modal -->
<div class="modal fade" id="newlist" tabindex="-1" role="dialog" aria-labelledby="newlistTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="newlistTitle">新增資料</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form name="abc" id="abc">
                    <div class="form-group row">
                        <label for="n_date" class="col-sm-2 text-center col-form-label">發布日期</label>
                        <div class="col-sm-4">
                        <input  id="n_date" name="n_date" class="form-control read"   value="<?php echo date("Y-m-d");?>">
                        </div>
                        <label for="n_user" class="col-sm-2 text-center col-form-label">發布者</label>
                        <div class="col-sm-4">
                            <input id="n_user" name="n_user" type="text" class="form-control read" value="<?= $_SESSION['user_name']; ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="n_title"  id="n_title_" class="col-sm-2 text-center col-form-label tc" style='color:tomato;'>*公告標題</label>
                        <div class="col-sm-10">
                            <input id="n_title" name="n_title" type="text" class="form-control read" placeholder="請輸入標題..." required="required">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="n_content" id="n_content_" class="col-sm-2 text-center col-form-label tc" style='color:tomato;'>*公告內容</label>
                        <div class="col-sm-10">
                            <input id="n_content" name="n_content" type="text" class="form-control read" style=" height:200px;" placeholder="請輸入內容..." required>
                        </div>
                    </div>
                    <div class="form-group row" >
                        <label for="n_type" class="col-sm-2 text-center col-form-label">消息類型</label>
                        <div class="col-sm-10" id='foru'>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="n_remark" class="col-sm-2 text-center col-form-label">備註</label>
                        <div class="col-sm-10">
                            <input id="n_remark" name="n_remark" type="text" class="form-control read">
                        </div>
                    </div>
                    <input type="reset" name="reset" style="display: none;" />
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" id="cancelbtn" class="btn btn-secondary" data-dismiss="modal">取消</button>
                <button type="button" id="updatebtn" onclick="newbtn()" class="btn btn-primary">確定</button>
            </div>
        </div>
    </div>
</div>
<!-- 刪除 Modal -->
<div class="modal fade" id="delcheck" tabindex="-1" role="dialog" aria-labelledby="delcheckTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="delcheckTitle">刪除公告</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h5 style="color: red;">是否確定刪除此公告?</h5>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                <button type="button" id="delbtn" onclick="del()" class="btn btn-primary" data-dismiss="modal">確定</button>
            </div>
        </div>
    </div>
</div>


<script>
    $(document).ready(function() {
        $("#notice").addClass("active");
    })

    function clean() {
       //恢復原狀可新增
        $(".read").attr("readOnly",false);
        $(".disable").attr("disabled",false);
        $("#updatebtn").attr("style","display:clock");
        $("#cancelbtn").text("取消");
        $("#n_title_").text("*公告標題");
        $("#n_content_").text("*公告內容");
        $(".tc").attr("style","color:tomato;");
//
        $("input[name='reset']").click();
        $("#updatebtn").attr("onclick", "newbtn()");
        $("#newlistTitle").html("新增資料");
        
    }

    function check(id) {
        $("#delbtn").attr("onclick", "del(" + id + ")");
    }
    
</script>



<!--main content end-->
<?php include("../public/_footer.php"); ?>