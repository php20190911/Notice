$(document).ready(function () {
    loadDB("1");
    sel_type();
});

var xd=1;
var a=document.getElementById("td");
var a=document.getElementById("th");

//一開始載入的表單
function loadDB(pages) {
    $.ajax({
        url: '../api/notice.php?switchgo=load&page='+pages,
        type: 'POST',
        cache: false,
        dataType: "json",
        success: function (data) {
            var str = "";
            var strpage = "";
            $.each(data.row, function(key, val){
                str += "<tr>";
                str += "<td onclick=\"detail('" + val.notice_id + "')\" data-toggle='modal' data-target='#newlist'>" + val.notice_date + "</td>";
                str += "<td onclick=\"detail('" + val.notice_id + "')\" data-toggle='modal' data-target='#newlist'>" + val.notice_user + "</td>";
                str += "<td onclick=\"detail('" + val.notice_id + "')\" data-toggle='modal' data-target='#newlist'>" + val.notice_title + "</td>";
                str += "<td onclick=\"detail('" + val.notice_id + "')\" data-toggle='modal' data-target='#newlist'>" + val.notice_type + "</td>";
                str += "<td onclick=\"detail('" + val.notice_id + "')\" data-toggle='modal' data-target='#newlist'>" + val.notice_remark + "</td>";
                if(localStorage.member=="admin"){
                    str += "<td>";
                    str += "<button onclick=\"edit('" + val.notice_id + "')\" class='btn btn-primary btn-sm mr-2 ' data-toggle='modal' data-target='#newlist'><i class='fa fa-pencil'></i></button>";
                    str += "<button onclick=\"check('" + val.notice_id + "')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#delcheck'><i class='fa fa-trash-o'></i></button>";
                    str += "</td>";
                }
                str += "</tr>";
                
            })

            strpage +="<ul id='pagination' class='pagination'>"
            strpage +="<li class='page-item' onclick=\"loadDB('1')\"><span class='page-link'>&laquo;</span></li>"
            
            if(pages<3){
                for (i=1; i <= data.page; i++) { 
                    strpage +="    <li class='page-item'  onclick=\"loadDB('"+i+"')\"><span  class='page-link'>"+i+"</span></li>"
                }
            }else if(pages){
                for (i=(pages-2); i <= (parseInt(pages)+2) ; i++) { 
                    if(i<=data.page){
                        strpage +="<li class='page-item' onclick=\"loadDB('"+i+"')\"><span class='page-link'>"+i+"</span></li>"
                    }
                }
            }
            strpage +="<li class='page-item'  onclick=\"loadDB('"+data.page+"')\"><span class='page-link'>&raquo;</span></li>"
            strpage +="</ul>"

            $("#pagess").empty().append(strpage);
            $("#listtable").empty().append(str);
            xd = pages;
        },
        error: function (data) {
            console.log("ajax失敗");
        }
    })
   
}


//notice.php頁面的notice_type load
function sel_type(){
    $.ajax({
        url: '../api/notice.php?switchgo=type',
        type: 'POST',
        cache: false,
        dataType: "json",
        success: function (data) {
            var str="";
                str+="<select id='n_type' name='n_type'  size='1' class='disable form-control'>";
            $.each(data,function(key, val) {                     
                str+="    <option value="+val.type_name+">"+val.type_name+"</option>";
            })
                str+="</select>";
            $("#foru").empty().append(str); 
        },
        error: function(type){
            console.log("ajax失敗");
        }
    })
   
}

// 新增資料
function newbtn(id) {
     
    var notice_date = $("#n_date").val();
    var notice_user = $("#n_user").val();
    var notice_title = $("#n_title").val();
    var notice_content = $("#n_content").val();
    var notice_type = $("#n_type").val();
    var notice_remark = $("#n_remark").val();

 
    if(!notice_title)
    {
        alert('公告標題不可為空！');
        return false;
    }else if(!notice_content)
    {
        alert('公告內容不可為空！');
        return false;
    }else{
        $("#updatebtn").attr("data-dismiss","modal");
    }

    var accdata = {
        "id": id,
        "notice_date": notice_date,
        "notice_user": notice_user,
        "notice_title": notice_title,
        "notice_content": notice_content,
        "notice_type": notice_type,
        "notice_remark": notice_remark,
    }

    $.ajax({
        url: '../api/notice.php?switchgo=new',
        type: 'POST',
        cache: false,
        dataType: "json",
        data: accdata,
        success: function (data) {
            
            if (data[0] == 1) {
                alert(data[1] + "成功");
                $("#updatebtn").removeAttr("data-dismiss");
            } else if (data[0] == 0) {
                alert(data[1] + "失敗");
            }
            
            loadDB(xd);
        },
        error: function (data) {
            console.log(data);
        }
    })
}


// 修改資料
function edit(a) {

    var accdata = {
        "id": a,
    }

    $.ajax({
        url: '../api/notice.php?switchgo=edit',
        type: 'POST',
        cache: false,
        dataType: "json",
        data: accdata,
        success: function (data) {
            $("#newlistTitle").html("修改公告");
            $.each(data, function (key, val) {
                $("#n_date").val(val.notice_date);
                $("#n_user").val(val.notice_user);
                $("#n_title").val(val.notice_title);
                $("#n_content").val(val.notice_content);
                $("#n_type").val(val.notice_type);
                $("#n_remark").val(val.notice_remark);
                $("#updatebtn").attr("onclick", "newbtn(" + val.notice_id + ")");
      
            })
            //恢復成原新增樣子
            $(".read").attr("readOnly",false);
            $(".disable").attr("disabled",false);
            $("#updatebtn").attr("style","display:clock");
            $("#cancelbtn").text("取消");
            $("#n_title_").text("*公告標題");
            $("#n_content_").text("*公告內容");
            $(".tc").attr("style","color:tomato;");
            loadDB(xd);  
         
        },
        error: function (data) {
            console.log('ajax失敗');
        }
    })
}

//刪除資料
function del(c) {

    var accdata = {
        "id": c,
    }
    $.ajax({
        url: '../api/notice.php?switchgo=del',
        type: 'POST',
        cache: false,
        dataType: "json",
        data: accdata,
        success: function (data) {
            alert("刪除完成!");   
            loadDB(xd);
        },
        error: function (data) {
            console.log('ajax失敗');
        }
    })
}

// 詳細資料
function detail(a) {

    var accdata = {
        "id": a,
    }

    $.ajax({
        url: '../api/notice.php?switchgo=detail',
        type: 'POST',
        cache: false,
        dataType: "json",
        data: accdata,
        success: function (data) {
            $("#newlistTitle").html("公告詳細內容");
            $.each(data, function (key, val) {
                $("#n_date").val(val.notice_date);
                $("#n_user").val(val.notice_user);
                $("#n_title").val(val.notice_title);
                $("#n_content").val(val.notice_content);
                $("#n_type").val(val.notice_type);
                $("#n_remark").val(val.notice_remark);
                // $("#updatebtn").attr("onclick", "newbtn(" + val.notice_id + ")");
            })
               $(".read").attr("readOnly",true); //將詳細資料的input box 改為onlyread
               $(".disable").attr("disabled","disabled");//將詳細資料的select option 改為onlyread
               $("#updatebtn").attr("style","display:none");//將詳細資料的update button 隱藏
               $("#cancelbtn").text("關閉");//將詳細資料的cancel button text 改為close
               $(".tc").removeAttr("style");//將詳細資料的紅色標題&內容改回黑色
               $("#n_title_").text("公告標題");//將詳細資料的公告標題的*拿掉
               $("#n_content_").text("公告內容");//將詳細資料的公告內容的*拿掉
             
        },
        error: function (data) {
            console.log('ajax失敗');
        }
    })
}