$(function(){
    
        //顶部导航条效果
        $(".header_nav_ul_li").hover(function () {
            var last_ul = $(this).find(".header_last_nav");
            if (!last_ul) {
                return;
            }
            last_ul.stop(true).animate({
                "height": "300px",
                "opacity": 1
            }, 300);

        }, function () {
            var last_ul = $(this).find(".header_last_nav");
            if (!last_ul) {
                return;
            }
            last_ul.stop(true).animate({
                "height": "0px",
                "opacity": 0
            }, 300);
        });

        //顶部导航条效果
        $(".footer_nav_li").hover(function () {
            var last_ul = $(this).find(".footer_nav_xl_ul");
            last_ul.css("display", "block");
            last_ul.stop(true).animate({
                "opacity": 1
            }, 400);
        }, function () {
            var last_ul = $(this).find(".footer_nav_xl_ul");
            last_ul.css("display", "none");
            last_ul.stop(true).animate({
                "opacity": 0
            }, 400);
        });


    
        //顶部背景图切换
        var bjimg = ['url("images/head2.png")','url("images/head1.png")']
        var he_bj = $("#header_bj");
        var bjxtdsq;
        var bjxuk = 1;
        bjxtdsq = setInterval(function(){
                if(bjxuk == bjimg.length - 1){
                    bjxuk = 0;
                }else{
                    bjxuk ++;
                }
                    he_bj.animate({
                        "opacity":0   
                    },1000,function(){
                        $(this).css({
                        "background":bjimg[bjxuk]
                        });
                        $(this).animate({
                            "opacity":1
                        },1000);

                    });
                
        },5000);
    
    })