//公共JS
    //菜单切换
    //移动端版权
    var bq = '<div class="bottom_mobile visible-xs-block visible-sm-block ">' +
        ' <span>主办单位：四川纤维检验局 </span>' +
        '<span>版权所有：四川省纤维检验局 </span>' +
        '<span>Copyright (C) 2005-2016 SCFI. All Rights Reserved. 蜀ICP备18020047号-1</span>' +
        ' </div';
    //默认给首页添加页脚
    $("[lav=0]").append($(bq));
    //二级页面菜单切换事件
    $("[m_nav] > li").on("click", function () {
        $("[m_nav] > li").removeClass("content_nav_active");
        $(this).addClass("content_nav_active");
        var nal = $(this).attr("nal")
        $(".rr_box").not($("[lav" + "=" + nal + "]")).css("display", "none");
        $("[lav" + "=" + nal + "]").css({
            "display": "block",
            "opacity": "0",
        }).animate({
            "opacity": "1"
        }, 400);
        //设置版权信息
        $("[lav]").find(".bottom_mobile").remove();
        $("[lav" + "=" + nal + "]").append($(bq));
        //首页处理
        if (nal == 0) {
            be();
        }
        //党的建设单独处理
        if (nal == 2) {
            if (ddjs.zt) {
                ddjs.fn();
                ddjs.zt = false;
            }
        }
    });



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
    var thiz = this;
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

//手机菜单事件
$("#m_menubtn").on("click", function () {
    var ele = $("#mobile_nav_box");
   var  zt = ele.attr("zt");
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


//二级页面弹出层事件
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


//IE兼容性调整
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return true;
        } else if (fIEVersion == 8) {
            return true;
        } else if (fIEVersion == 9) {
            return true;
        } else if (fIEVersion == 10) {
            return true;
        } else {
            return true;
        }
    } else if (isEdge) {
        return false;
    } else if (isIE11) {
        return true;
    } else {
        return false;
    }
}
//党的建设IE
function ddjsIE(){
    if (IEVersion()) {
        var widow_w = $(window).width();
        if (991 < widow_w && widow_w < 1500) {
            $(".last_lm").css(
                {
                    "display": "none"
                }
            )
            $(".last_lm2").css(
                {
                    "display": "block"
                }
            )
            $(".dwjj_msg").css({
                "height": ($(".dwjj_box").height() - 138) + "px",
                "minHeight":"100px"
            })
        }
        if (widow_w >= 1500) {
            $(".last_lm2").css(
                {
                    "display": "none"
                }
            )
            
            $(".last_lm").css(
                {
                    "display": "block"
                }
            )
        }
        var li_el = $(".xw_lists_ul").find("li");
        li_el.css({
            "height": "16px",
            "marginTop": "12px",
        });
        $(".xw_lists_ul").find("a").css({
            "height": "20px",
        })
     
    }
 
}
function indexIE(){
    if(IEVersion()){
    //网站首页
        var widow_w = document.documentElement.clientWidth;
            if (1600 < widow_w && widow_w < 1700) {
                $(".news_content_list_r_msg").css({
                    "height":"34px",
                });
            }else if (966 < widow_w && widow_w < 1601) {
                $(".news_content_list_r_msg").css({
                    "height":"17px",
                });
            }else{
                $(".news_content_list_r_msg").css({
                    "height":"auto",
                });
            }
      
    }
}


$(function () {
    ddjsIE();
    indexIE();
});
$(window).resize(function () {
    ddjsIE();
    indexIE();
});
