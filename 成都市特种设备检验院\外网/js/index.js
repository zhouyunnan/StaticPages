$(function(){
           //首页banner轮播图
           function indexbanner() {
            //建立 setInterval 变量
            var dt;
    
            function goxh() {
                //需要切换到的图
                var nowimg = $(banner_img[img_inx + 1]);
                banner_img.not(nowimg).css("display", "none");
                nowimg.css({
                    "opacity": 0,
                    "display": "block"
                });
                nowimg.animate({
                    "opacity": 1,
                }, 400)
                //更改标题
                $("#index_banner_tab").find("a").html(nowimg.attr("alt")).attr("href", nowimg.attr("linkurl"))
                //小圆点
                changeXyd(img_inx + 1)
                img_inx++;
                if (img_inx == banner_img.length - 1) {
                    img_inx = -1;
                }
                //清除上一次循环
                clearInterval(dt);
                //重新开启循环
                dt = setInterval(function () {
                    goxh();
                }, 3000);
            }
            //更改小圆点    
            function changeXyd(k) {
                var xyds = $("#index_banner_dian").find("li");
    
                //颠倒传入的k
                var k_arr = [];
                for (var i = 0, j = xyds.length; i < j; i++) {
                    k_arr.push(xyds.length - i - 1);
                }
    
                xyds.not(xyds[k_arr[k]]).css("background", "#929495");
                $(xyds[k_arr[k]]).css("background", "#ffc500");
            }
    
    
            var banner_img = $("#banner_img").find("img");
    
            //当前第几个图 图的下标
            var img_inx = 0;
    
            //初始化banner,隐藏掉所有的图
            banner_img.css({
                "display": "none"
            });
            //刚打开时，展示第一张图
            $(banner_img[img_inx]).css({
                "display": "block"
            });
    
            //生成小圆点
            $.each(banner_img, function (k, v) {
                var k_arr = [];
                for (var i = 0, j = banner_img.length; i < j; i++) {
                    k_arr.push(banner_img.length - i - 1);
                }
                var xyd_li = "<li k='" + k_arr[k] + "'></li>";
                var xyds = $("#index_banner_dian").find("ul").append($(xyd_li));
            });
            //更改标题
            $("#index_banner_tab").find("a").html($(banner_img[img_inx]).attr("alt")).attr("href", $(banner_img[img_inx]).attr("linkurl"))
    
            //标记小圆点
            changeXyd(img_inx);
    
            //开启循环
            dt = setInterval(function () {
                goxh();
            }, 3000);
    
    
            //点击小原点切换图片
            var xyds = $("#index_banner_dian").find("li");
            xyds.on("click", function () {
                //暂停循环
                clearInterval(dt);
                img_inx = $(this).attr("k");
                img_inx = parseInt(img_inx) - 1;
                goxh();
            });
    
    
    
        }
        indexbanner();
        //选项卡1
        function indexxxk1() {
            function indextab(thiz) {
                $("#index_1_r_tab_btn_active").remove();
                $(thiz).append($('<div id="index_1_r_tab_btn_active"></div>'));
    
                var content = $("#index_1_r_content").find("ul");
                var k = $(thiz).attr("k");
                k = parseInt(k);
                content.css("display", "none");
                $(content[k]).css("display", "block");
    
    
                $(".index_1_r_tab_btn").css({
                    "color": "#191919",
                    "fontWeight": "100"
                });
                $(thiz).css({
                    "color": "#0e76cd",
                    "fontWeight": "bold"
                })
            }
            indextab($("#index_tab1"));
            $("#index_1_r_tab").find("div").on("click", function () {
                indextab(this);
            })
    
        }
        indexxxk1();
        //选项卡2
        function index_tab2(thiz) {
            $("#index_2_l_tit_tab").remove();
            $(thiz).append($(
                '<div id="index_2_l_tit_tab">' + $(thiz).find("span").text() + '</div>'
            ));
            var content = $("#index_2_l_content").find("ul");
            content.css("display", "none");
    
            var k = $(thiz).attr("k");
            k = parseInt(k);
            $(content[k]).css("display", "block");
        }
        index_tab2(($("#index_2_l_tit").find("[k=0]"))[0]);
        $("#index_2_l_tit").find("li").on("click", function () {
            index_tab2(this);
        });
        //淡入淡出横幅条
        function indexhft() {
    
            function goxh() {
                //需要切换到的图
                var nowimg = $(imgs[imgk + 1]);
                imgs.not(nowimg).css("display", "none");
                nowimg.css({
                    "opacity": 0,
                    "display": "block"
                });
                nowimg.animate({
                    "opacity": 1,
                }, 600)
                //小圆点
                changeXyd(imgk + 1)
                imgk++;
                if (imgk == imgs.length - 1) {
                    imgk = -1;
                }
                //清除上一次循环
                clearInterval(dt);
                //重新开启循环
                dt = setInterval(function () {
                    goxh();
                }, 4000);
            }
            //更改小圆点    
            function changeXyd(k) {
                var xyds = $("#index_3_banner_yd").find("li");
    
                //颠倒传入的k
                var k_arr = [];
                for (var i = 0, j = xyds.length; i < j; i++) {
                    k_arr.push(xyds.length - i - 1);
                }
    
                xyds.not(xyds[k_arr[k]]).css("background", "#929495");
                $(xyds[k_arr[k]]).css("background", "#ffc500");
            }
            var imgs = $("#index_3_banner_img").find("img");
            var imgk = 0;
            var dt;
            imgs.css("display", "none");
            $(imgs[imgk]).css("display", "block");
            //生成小圆点
            $.each(imgs, function (k, v) {
                var k_arr = [];
                for (var i = 0, j = banner_img.length; i < j; i++) {
                    k_arr.push(banner_img.length - i - 1);
                }
                var xyd_li = "<li k='" + k_arr[k] + "'></li>";
                var xyds = $("#index_3_banner_yd").find("ul").append($(xyd_li));
            });
    
            changeXyd(imgk);
            //开启循环
            dt = setInterval(function () {
                goxh();
            }, 4000);
    
    
            //点击小原点切换图片
            $("#index_3_banner_yd").find("li").on("click", function () {
                //暂停循环
                clearInterval(dt);
                img_inx = $(this).attr("k");
                img_inx = parseInt(img_inx) - 1;
                goxh();
            });
        }
        indexhft();
    
    
        
        //左右切换的轮播图
        (function ($) {
            $.fn.changeImg = function (options) {
    
                var defalutes = {
                    'boxWidth': 800,
                    'changeLen': 4,
                    'changeSpend': 1000,
                    'autoChange': true,
                    'changeHandle': true,
                    'autoTime':5000
                };
    
                var ops = $.extend(defalutes, options),
                    $that = $(this);
    
                var _html = '<a href="javascript:;" class="change-bnt prev-bnt">&nbsp;</a><a href="javascript:;" class="change-bnt next-bnt">&nbsp;</a>';
    
    
                var $changeBox = $that.find(".focus-img-con"),
                    $changeUl = $changeBox.find("ul"),
                    $changeLi = $changeBox.find("li"),
                    $changePrev = '',
                    $changeNext = '',
                    _len = $changeLi.length,
                    _timer = '';
    
    
                $changeBox.width(ops.boxWidth);
                if (ops.changeHandle) {
                    $that.append(_html);
                    $changePrev = $that.find(".prev-bnt");
                    $changeNext = $that.find(".next-bnt");
                };
    
    
                var oWidth = $changeLi.eq(0).outerWidth(),
                    bWidth = oWidth * _len,
                    _handle = true;
                $changeUl.width(bWidth);
    
    
                $changePrev.on("click", function () {
                    if (_handle) {
                        _handle = false;
                        clearInterval(_timer);
                        $changeUl.css('right', 'auto');
                        for (var i = 0; i < ops.changeLen; i++) {
                            var _li = $changeUl.find("li").eq(i).clone(true);
                            $changeUl.append(_li);
                        };
                        $changeUl.stop().animate({
                            'left': -oWidth * ops.changeLen
                        }, 300, function () {
                            for (var i = 0; i < ops.changeLen; i++) {
                                $changeUl.find("li").eq(0).remove();
                            };
                            $changeUl.css('left', 0);
                            _handle = true;
                        });
                        autoPlay();
                    };
                });
    
                var _len1 = _len - 1;
                $changeNext.on("click", function () {
    
                    $changeUl.css('right', 0);
                    if (_handle) {
                        _handle = false;
                        clearInterval(_timer);
                        $changeUl.css('left', 'auto');
                        for (var i = 0; i < ops.changeLen; i++) {
                            var $_li = $changeUl.find("li").eq(_len1).clone(true);
                            $changeUl.prepend($_li);
                        };
    
                        $changeUl.stop().animate({
                            'right': -oWidth * (_len - ops.changeLen)
                        }, 300, function () {
                            for (var i = 0; i < ops.changeLen; i++) {
                                $changeUl.find("li").eq(_len).remove();
                            };
                            _handle = true;
                        });
                        autoPlay();
                    };
                });
    
    
                function autoPlay() {
                    if (ops.autoChange) {
                        _timer = setInterval(function () {
                            $changePrev.click();
                        }, ops.autoTime)
                    }
                }
                autoPlay();
    
    
                return this;
            }
    
        })(jQuery);
        $("#focus-img").changeImg({
            'boxWidth': 1160,
            'changeLen': 4,
            'changeSpend': 400,
            'autoChange': true,
            'changeHandle': true
        });
})