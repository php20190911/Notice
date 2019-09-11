
<?php
//base64編碼
$file = "../img/drink.png";
$type = getimagesize( $file ); //取得圖片資訊，[0]->寬度，[1]->高度，[2]->檔案的型態，[3]->寬度和高度，[4]->圖檔位元(和檔案大小無關)
$file_content = base64_encode( file_get_contents( $file ) );
switch ( $type[2] ) { //判斷圖片副檔名
    case 1:
        $img_type = "gif";
        break;
    case 2:
        $img_type = "jpg";
        break;
    case 3:
        $img_type = "png";
        break;
}
$img = 'data:image/' . $img_type . ';base64,' . $file_content; //合成圖片的base64编码

echo '<img src="' . $img . '" >';

//base64解碼並存檔
$img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAAaCAMAAABGmBj2AAAAjVBMVEUAAABkZFRmZlJhYU+rq5ulpZZoaFBfX01kZFFlZVKrq5tgYFBmZlKkpJuvr5+srJxlZVCrq5xmZlNfX06np5iqqp2iopRiYlCQkH2rq5tkZFKEhHygoJKRkX2QkHurq52IiHSKinaMjHiSknyqqpqSkn2ZmXeRkX1lZVKRkX2rq5xfX02goJKHh3SQkHwkgriDAAAAKHRSTlMAQIDHgMcg7qBgQBCPHxBQMKBQ27Ng27ORj3AF7oiocPHbyEEwMA92SIWyjwAAAslJREFUSMell+t2qjAQhYcgCXdQsbba2+ntFGj7/o93wgzJYILHhd0/NBNZ68tkZ4YIx9vvdkbft0cg1QFJwkS1O5VthDjUNAyM+IGyWq1WVQk2TrUKPbhtz+gBSOHnqD5mnMKZ2MaixwklMoDg00oAqlh3qBSMcGKlB5y7mz/jjfoaSJJiBaNi+0gyg6++OgdfdAavQeCKpj0885IxlhRueIHg498MnfHrZXgVhrTdG842xFx5haHI1Wdu8NtwEP5+M6CiXZruCuN8twRPWeSYDlsv2Pzhlz3uijT4AIyqgbSDqVZX4DPEs/W1NaOe7IuPb0YQq9RufC3FA+Kt9SHG0uX5YadZpZf83VX4g7U+BzLf7Et+Bp9qTuMl3yzGJ3zUFW52bs3v0Yx5/BNyqiZap0Da6ZkqWoIPhYg5RUkL2Vjzc6y5ZIqPxSBJO11Rod0B6r7r7sHDv7+Yuvh4PFP3OVe9sqvQyqjn7TPGkwKABo0mVSb5nYcvntvvVxy9Prfz+H3AVb8fPUimRFV7eM1h3djkXfzHHz34+QtwfPhpHbybvhrPYMyVX1P+vZzHN2WBzaegNvDk4o8vLerxXS/Dx8dBsNma6pbmoB0mbTjbIy/0vI8Yi7sfYR06+Mf2RLNtR+Gek/UsCaMEhrVz8pETYf0jMMVPB//QXsbTaw2/rbjt2658Ad8MRyCKoqHr3UcREOwS3qY3Ws+KLT7D0MWvT/DkBWsBHrMj6713MHcIF78a0v013mQ9Wp/xe15CTRH0c5ufDpRyvGGkV+MztDwk67eAkmS+6IXEQtA6uPiyo0q7o2UYLWq604OmbP3TOAaB1wtFheDddtbYb/FzDb/Db23G3P8U4vkguviiM/oqHPzCq+Y2O3nxmUBMHvDxsDP4Chz8oot2mHDCcGJ+suVrto+HlG57b+Dj//c3Y4n4P8WcijQtYU7/ANVG7hKeMxekAAAAAElFTkSuQmCC"; // Your data 'data:image/png;base64,AAAFBfj42Pj4';
$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $img));
file_put_contents('img.png', $data);
?>
<script src="../script/test.js"></script>