# 網頁手繪板

本程式簡化自以下文章中的範例，該範例可選顏色與粗細，但為了讓初學整更容易懂，筆者將顏色固定為黑色，粗細固定為 3，並去除了相關的程式碼。

* [黑暗執行緒 -- 用100行實現HTML5可存檔塗鴉版](../http///blog.darkthread.net/post-2011-10-30-html5-canvas-sktechpad.aspx.html)


檔案： [painter.html](http://ccc.nqu.edu.tw/db/jsb/code/painter.html)

```
<!DOCTYPE html>
<html>
<head>
    <title>範例 -- 手寫板</title>
    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.6.4.js">
    </script>
    <script>
        var p_color = "black";
        var p_width = 3;
        $(function () {
            //取得canvas context
            var $canvas = $("#cSketchPad");
            var ctx = $canvas[0].getContext("2d");
            ctx.lineCap = "round";
            ctx.fillStyle = "white"; //整個canvas塗上白色背景避免PNG的透明底色效果
            ctx.fillRect(0, 0, $canvas.width(), $canvas.height());
            var drawMode = false;
            //canvas點選、移動、放開按鍵事件時進行繪圖動作
            $canvas.mousedown(function (e) {
                ctx.beginPath();
                ctx.strokeStyle = p_color;
                ctx.lineWidth = p_width;
                ctx.moveTo(e.pageX - $canvas.position().left, e.pageY - $canvas.position().top);
                drawMode = true;
            })
            .mousemove(function (e) {
                if (drawMode) {
                    ctx.lineTo(e.pageX - $canvas.position().left, e.pageY - $canvas.position().top);
                    ctx.stroke();
                }
            })
            .mouseup(function (e) {
                drawMode = false;
            });
        });
    </script>
</head>
<body>
 <div id="dCanvas">
  <canvas id="cSketchPad" width="300" height="300" style="border: 2px solid gray" />
 </div>
</body>
</html>
```

