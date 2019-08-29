//党的建设

//轮播
var ddjs = {
    zt: true,
    fn: function () {
        $("#scroll_ul li").css({
            width: $("#content_r_banner").width() + "px",
            height: $("#content_r_banner").height() + "px",
        });
        var w = $("#content_r_banner").width();

        var l = 0;

        var timer = null;

        var len = $("#scroll_ul li").length * 2;
        $("#scroll_ul").append($("#scroll_ul").html()).css({ 'width': len * w, 'left': -len * w / 2 });
        timer = setInterval(init, 2000);
        function init() {
            $(".scroll .next").trigger('click'); //当页面一加载就触发next按钮的点击事件，用trigger的好处是减少重复代码,如果不用，就要把按钮click事件里代码全部复制过来，因为加载的代码和点击next按钮代码和效果相同，所以就用trigger触发执行click里面代码。
        }
        $("#scroll_ul li").hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(init, 2000);
        });
        $(".prev").click(function () {
            l = parseInt($("#scroll_ul").css("left")) + w;  //这里要转成整数，因为后面带了px单位
            showCurrent(l);
        });
        $(".next").click(function () {
            l = parseInt($("#scroll_ul").css("left")) - w;  //这里要转成整数，因为后面带了px单位
            showCurrent(l);
        });
        function showCurrent(l) {     //把图片的左右切换封装成一个函数
            if ($("#scroll_ul").is(':animated')) { //当ul正在执行动画的过程中，阻止执行其它动作。关键之处，不然图片切换显示不完全，到最后图片空白不显示。
                return;
            }
            $("#scroll_ul").animate({ "left": l }, 500, function () {
                if (l == 0) { //当图片位置到第一份图片第二张时，马上把图片定位到第二份的第一张。注意这里的设置的css一定到写在animate动画完成时的执行  //函数里。否则图片只是一瞬间回到第一张，但是没有向右的动画效果。 我在做的时候，用的不是css,而是用animate()定位到第二个第一张，结果切换时，是反方向的运动，一直觉得无论怎样，图片方向都会发生变化 ，弄得花了一天时间才找到原因，所以一定 要用css。
                    $("#scroll_ul").css("left", -len * w / 2);
                } else if (l == (1 - len) * w) { //图片位置到最后一张时（第二份最后一张）时，就把图片定位到第一份最后一张。从而显示的是第一份最后一张。

                    $("#scroll_ul").css('left', (1 - len / 2) * w);

                }

            });

        }


    }
};


