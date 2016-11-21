/**
 * Created by Administrator on 2016/9/27 0027.
 */
$(function () {
    var GOODSNUM = 20;
    var newMain = document.getElementById("newMain");

    var uiInputText = document.getElementsByClassName("ui-input-text");
    var shishangMain = document.getElementById("shishangMain");
    //添加图片 和文字介绍
    var shishangM=["1.png","2.png","3.png","4.jpg","5.png","6.png","7.png","8.jpg","9.jpg","10.png","11.png","12.png","13.jpg","14.jpg","15.png","16.jpg"];
    var shishangZ=["夏日靓裙","气质衬衫","潮流T恤","魔力卫衣","气质针织","蕾丝雪纺","个性外套","品质风衣","马甲背心","百搭牛仔裤","超值套装","优质家居服","魅力文胸","贴心内裤","半身裙","运动打底"];

    var xiebaoM=["1.png","2.png","3.png","4.jpg","5.png","6.png","7.png","8.jpg","9.jpg","10.png","11.png","12.png","13.jpg","14.jpg","15.png","16.jpg"];
    var xiebaoZ=["夏日靓裙","气质衬衫","潮流T恤","魔力卫衣","气质针织","蕾丝雪纺","个性外套","品质风衣","马甲背心","百搭牛仔裤","超值套装","优质家居服","魅力文胸","贴心内裤","半身裙","运动打底"];

    var meigeM=["1.png","2.png","3.png","4.jpg","5.png","6.png","7.png","8.jpg","9.jpg","10.png","11.png","12.png","13.jpg","14.jpg","15.png","16.jpg"];
    var meigeZ=["夏日靓裙","气质衬衫","潮流T恤","魔力卫衣","气质针织","蕾丝雪纺","个性外套","品质风衣","马甲背心","百搭牛仔裤","超值套装","优质家居服","魅力文胸","贴心内裤","半身裙","运动打底"];

    var mutongM=["1.png","2.png","3.png","4.jpg","5.png","6.png","7.png","8.jpg","9.jpg","10.png","11.png","12.png","13.jpg","14.jpg","15.png","16.jpg"];
    var mutongZ=["夏日靓裙","气质衬衫","潮流T恤","魔力卫衣","气质针织","蕾丝雪纺","个性外套","品质风衣","马甲背心","百搭牛仔裤","超值套装","优质家居服","魅力文胸","贴心内裤","半身裙","运动打底"];

    var jiajuM=["1.png","2.png","3.png","4.jpg","5.png","6.png","7.png","8.jpg","9.jpg","10.png","11.png","12.png","13.jpg","14.jpg","15.png","16.jpg"];
    var jiajuZ=["夏日靓裙","气质衬衫","潮流T恤","魔力卫衣","气质针织","蕾丝雪纺","个性外套","品质风衣","马甲背心","百搭牛仔裤","超值套装","优质家居服","魅力文胸","贴心内裤","半身裙","运动打底"];

    var xiuxianM=["1.png","2.png","3.png","4.jpg","5.png","6.png","7.png","8.jpg","9.jpg","10.png","11.png","12.png","13.jpg","14.jpg","15.png","16.jpg"];
    var xiuxianZ=["夏日靓裙","气质衬衫","潮流T恤","魔力卫衣","气质针织","蕾丝雪纺","个性外套","品质风衣","马甲背心","百搭牛仔裤","超值套装","优质家居服","魅力文胸","贴心内裤","半身裙","运动打底"];

    function init() {
        addGodsImg(shishangM,shishangZ,$("#shishangMain"));
        addGodsImg(xiebaoM,xiebaoZ,$("#xiebaoMain"));
        addGodsImg(meigeM,meigeZ,$("#meigeMain"));
        addGodsImg(mutongM,mutongZ,$("#mutongMain"));
        addGodsImg(jiajuM,jiajuZ,$("#jiajuMain"));
        addGodsImg(xiuxianM,xiuxianZ,$("#xiuxianMain"));
    }

    function addGodsImg(godsM,godsZ,godsMainID) {
        var godsNum = godsM.length;
        for(var j=0;j<godsNum;j++){
            $("<a class='shishi shigoods' href='#'><img src=Img/fenlei/"+godsM[j]+" style='width:82%;margin-top:.3rem'></a>").css({
                "width":"20%",
                "height":"4.58rem",
                "float":"left",
                "textAlign":"center"
            // }).appendTo($("#"+godsMainID));
            }).appendTo(godsMainID);
            $("<span class='span'></span>").text(godsZ[j]).css({
                "textAlign":"center",
                "fontSize":".5.5rem",
                "fontWeight":"100",
                "color":"#000"
            }).appendTo($(".shigoods:last"));
        }
    }

    init();
});