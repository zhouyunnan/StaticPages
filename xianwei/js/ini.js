
    //初始化宽度
    function be() {
        if ($(window).width() > 992) {
            $("#banner_list img").css({
                "width": $("#banner").width() + "px",
                "height": $(".c_r_t_last").height() + "px",
            });
            $(".news_lists").css({
                "height": $(".c_r_t_last").height() + "px",
            });
            $(".news_list_content").css({
                "height": $(".news_list_tab").height() + "px",
            });
            $(".c_r_t_sec > .row").css({
               "height": ($(".content_right").height() - $(".c_r_tit").height() - $(".c_r_t_last").height() - 10) + "px"
            });
        } else {
            $("#banner_list img").css({
                "width": $("#banner").width() + "px",
                "height": $("#banner_box").height() + "px",
            });
        }
    }
    be();
    $(window).resize(function () {
        be();
    });

    //轮播图
    var t = n = 0, count;
    $(document).ready(function () {
        count = $("#banner_list a").length;
        $("#banner_list a:not(:first-child)").hide();
        $("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
        $("#banner_info").click(function () { window.open($("#banner_list a:first-child").attr('href'), "_blank") });
        $("#banner li").click(function () {
            var i = $(this).attr("inx") - 1;//获取Li元素内的值，即1，2，3，4
            n = i;
            if (i >= count) return;
            $("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
            $("#banner_info").unbind().click(function () { window.open($("#banner_list a").eq(i).attr('href'), "_blank") })
            $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
            document.getElementById("banner").style.background = "";
            $(this).toggleClass("on");
            $(this).siblings().removeAttr("class");
        });
        t = setInterval("showAuto()", 4000);
        $("#banner").hover(function () { clearInterval(t) }, function () { t = setInterval("showAuto()", 4000); });
    })
    function showAuto() {
        n = n >= (count - 1) ? 0 : ++n;
        $("#banner li").eq(n).trigger('click');
    }

    //右侧菜单
    $("#menubtn").on("click",function(){
        let thiz = this;
        $(".right_abso").animate({
            right:"0px"
        },function(){
           
            $(thiz).css("opacity","0");
        });
    });
    $("#close").on("click",function(){
        $(".right_abso").animate({
            right:"-100%"
        },function(){
            $("#menubtn").css("opacity","1");
        });
    });
    //手机菜单
    $(".m_menubtn").on("click",function(){
        let ele = $("#mobile_nav_box");
        let zt = ele.attr("zt");
        if(zt == "0"){
            ele.animate({
                left:"0px"
            });
            ele.attr("zt","1");
        }else{
            ele.animate({
                left:"-100%"
            });
            ele.attr("zt","0");

        }
    });
