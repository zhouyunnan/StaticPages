//信息公开JS

///轮播图
    var xxgk_right_center_im = $("#xxgk_right_center_im");
    var img = xxgk_right_center_im.find("img");
    var  now_id = xxgk_right_center_im.attr("now_id");
    img.css({
        display: "none"
    });
    $(img[0]).css({
        display: "block"
    });
    //左按钮
    $("#xxgk_right_center_ic").on("click", function () {
        img.css({
            display: "none",
            opacity: "0",
        });
       var  index;
        if (now_id == 0) {
            index = img.length - 1;
        } else if (0 < now_id <= img.length - 1) {
            index = Number(now_id) - 1;
        }
        now_id = index;

        $(img[index]).css({
            display: "block"
        });
        $(img[index]).animate({
            opacity: "1",
        }, 300);
    });
    //右按钮
    $("#xxgk_right_center_ic2").on("click", function () {
        img.css({
            display: "none",
            opacity: "0",
        });
        var index;

        if (now_id == img.length - 1) {
            index = 0;
        } else {
            index = Number(now_id) + 1;
        }
        now_id = index;

        $(img[index]).css({
            display: "block"
        });
        $(img[index]).animate({
            opacity: "1",
        }, 500);
    });
    setInterval(function(){
        $("#xxgk_right_center_ic2").trigger("click");
    }, 3000);
