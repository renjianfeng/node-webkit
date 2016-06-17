# NODE-WEBKIT工牌生成器
使用node-webkit联系的时候，自己做了一个工牌生成器。简单的使用了nodejs\canvas\angualrjs，可以下载下来看一下；
![image](https://github.com/renjianfeng/node-webkit/raw/master/sdsd.jpg)

核心代码

#canvas绘图
```javascript
function huizhi(emName,emNameEnglish,buName,buNameEnglish,goNumber,goNumberEnglish,emNameL,buNameL,goNumberL){
      //  window.requestAnimFrame(huizhiTitle)
        var chooser2 = document.querySelector('#fileDialog2');
        var adds=chooser2.value;
        context.beginPath();
      //  context.clearRect(0,0,500,600);
        context.drawImage(img,0,0);
        if(adds!=null||adds!="")
        {
            document.getElementById("showfileDialog2").innerHTML=adds
            var img2=new Image()
            img2.src=adds;
            context.drawImage(img2,170,205,300,420);
        }else
        {
            document.getElementById("showfileDialog2").innerHTML="你还没有上传照片!";
        }
        context.font = "34px 微软雅黑";
        context.fillStyle='#464646';
        context.fillText(emName,50+dx,50+dy);
        context.fillText(buName,50+dx,142+dy);
        context.fillText(goNumber,50+dx,233+dy);
        context.font = "24px 微软雅黑";
        context.fillStyle='#2076b5';
        context.fillText(buNameEnglish,buNameL*34+55+dx,142+dy);
        context.fillText(emNameEnglish,emNameL*34+55+dx,50+dy);
        context.fillText(goNumberEnglish,goNumberL*20+55+dx,233+dy);
        context.closePath();


    }
    ```
#angualrJS绑定绘图
```javascript
 var app = angular.module('myApp', []);
    app.controller('personCtrl', function($scope) {
        $scope.listVeds= [
            {id:"10",emName:"任建锋",emNameEnglish:"Jianfeng Ren",buName:"互联网事业部",buNameEnglish:"Internet Dept",goNumber:"2456555",goNumberEnglish:"Employee NO."}
        ];

        console.log($scope.listVeds.length);
            setInterval(function(){
                clearR()
                for(i=0;i<$scope.listVeds.length;i++)
                {
                   // $scope.listVeds[i].mTop=parseInt($scope.listVeds[i].mTop);
                   // console.log($scope.listVeds[i].mTop);
                    var emNameL=$scope.listVeds[i].emName.length;
                    var buNameL=$scope.listVeds[i].buName.length;
                    var goNumberL=$scope.listVeds[i].goNumber.length;
                    huizhi(
                            $scope.listVeds[i].emName,
                            "/ "+$scope.listVeds[i].emNameEnglish,
                            $scope.listVeds[i].buName,
                            "/ "+$scope.listVeds[i].buNameEnglish,
                            $scope.listVeds[i].goNumber,
                            "/ "+$scope.listVeds[i].goNumberEnglish,
                            emNameL,
                            buNameL,
                            goNumberL
                    );
                }

            },100)
    })
    ```
    
    #将canvas内容转化为图片，并保存到本地
    ```javascript
     var myCanvas = document.getElementById("canvas");
        // here is the most important part because if you dont replace you will get a DOM 18 exception.
        // var image = myCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream;Content-Disposition: attachment;filename=foobar.png");
        var image = myCanvas.toDataURL("image/png");
       // window.location.href=image; // it will save locally
      //  alert(image);
        //过滤头文件
        var base64Data = image.replace(/^data:image\/\w+;base64,/, "");
        //nodejs转码
        var dataBuffer = new Buffer(base64Data, 'base64');
     //   alert(dataBuffer);
        var imgName=document.getElementById("filenameImg").value;
        fs.writeFile(adds+'/'+imgName+'.png', dataBuffer, function (err) {
            if (err) throw err;
            console.log('It\'s saved!');
            alert("保存成功")
        });
        ```
