
    //IE兼容性调整
    function IEVersion() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        if(isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if(fIEVersion == 7 ) {
                return true;
            } else if(fIEVersion == 8) {
                return true;
            } else if(fIEVersion == 9) {
                return true;
            } else if(fIEVersion == 10) {
                return true;
            } else {
                return true;
            }   
        } else if(isEdge) {
            return false;
        } else if(isIE11) {
                return true;
        }else{
            return false;
        }
    }
if(IEVersion()){
   
    var widow_w =  $(window).width();

    if(991 < widow_w && widow_w< 1500){
        $(".last_lm").css(
            {
                "display":"none"
            }
        )
        $(".dwjj_msg").css({
            "height":($(".dwjj_box").height() - 138)+"px"
        })
    }
    if( widow_w >= 1500){
          
        $(".last_lm2").css(
            {
                "display":"none"
            }
        )
    }

    
    var li_el = $(".xw_lists_ul").find("li");
    li_el.css({
       "height":"16px",
       "marginTop":"22px"
    });
    $(".xw_lists_ul").find("a").css({
        "height":"20px",
    })

}
