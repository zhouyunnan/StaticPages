
//初始化宽度
function be() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 19.20 + "px";
    if ($(window).width() > 992) {
        $("#banner_list img").css({
            "width": $("#banner").width() + "px",
            "height": $(".c_r_t_last").height() + "px",
        });
        $(".news_lists").css({
            "height": $("#banner").outerHeight() + "px",
        });
        $(".news_list_content").css({
            "height": $(".news_list_tab").height() + "px",
        });
        $(".c_r_t_sec > .row").css({
            "height": ($(".content_right").height() - $(".c_r_tit").height() - $(".c_r_t_last").height() - 10) + "px"
        });

        //设置main高度
        var main_height = $(window).height() - 60 - $("#pcheader").height() - 20;
        $("#main").css("height", main_height);
    } else {
        $(".news_lists").css({
            "height": "auto"
        });

        $(".c_r_t_sec > .row").css({
            "height": "auto"
        });
        $(".news_list_content").css({
            "height": "auto"
        });
        $("#banner_list img").css({
            "width": $("#banner").width() + "px",
            "height": $("#banner_box").height() + "px",
        });
        //设置main高度
        var main_height = $(window).height();
        $("#main").css("height", main_height);
    }


}
be();
$(window).resize(function () {
    be();
});
//右侧菜单事件
$("#menubtn").hover(function () {
    let thiz = this;
    $("#right_abso").animate({
        right: "0px"
    }, 200, function () {
        $(thiz).css("cssText", "display: none!important");
    });
})


$("#right_abso").hover(function () {

}, function () {
    $("#right_abso").animate({
        right: "-100%"
    }, 200, function () {
        $("#menubtn").css("cssText", "display: block!important");
    });
});
//手机菜单
$("#m_menubtn").on("click", function () {
    let ele = $("#mobile_nav_box");
    let zt = ele.attr("zt");
    if (zt == "0") {
        ele.animate({
            left: "0px"
        });
        ele.attr("zt", "1");
    } else {
        ele.animate({
            left: "-100%"
        });
        ele.attr("zt", "0");

    }
});

//二级页面弹出层
//关闭
$("[guanbi_sec_btn]").on("click", function () {
    if ($(window).width() > 992) {
        //弹出层外壳
        var sec_page = $("#sec_page");
        sec_page.animate({
            top: "100%",
        });
    } else {
        $("#sec_page_pc").animate({
            top: "100%",
        });
    }


});

$("[sec_page]").on("click", function () {
    if ($(window).width() > 992) {
           //弹出层外壳
        var sec_page = $("#sec_page");
        sec_page.animate({
            top: "0px",
        });
    } else {
        $("#sec_page_pc").animate({
            top: "0px",
        });
    }
});
