$(function(){
    
        //顶部导航条效果
        $(".header_nav_ul_li").hover(function () {
            var last_ul = $(this).find(".header_last_nav");
            if (!last_ul) {
                return;
            }
            last_ul.animate({
                "height": "300px",
                "opacity": 1
            }, 300);

        }, function () {
            var last_ul = $(this).find(".header_last_nav");
            if (!last_ul) {
                return;
            }
            last_ul.animate({
                "height": "0px",
                "opacity": 0
            }, 300);
        });

        //顶部导航条效果
        $(".footer_nav_li").hover(function () {
            var last_ul = $(this).find(".footer_nav_xl_ul");
            last_ul.css("display", "block");
            last_ul.animate({
                "opacity": 1
            }, 400);
        }, function () {
            var last_ul = $(this).find(".footer_nav_xl_ul");
            last_ul.css("display", "none");
            last_ul.animate({
                "opacity": 0
            }, 400);
        });
})