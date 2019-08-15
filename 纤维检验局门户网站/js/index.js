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

//选项卡
$(".xjyx_btn").on("click", function () {
    $(".xjyx_btn").not($(this)).attr("id", "");
    if ($("#xxksj")) {
        $("#xxksj").remove();
    }
    $(this).attr("id", "xjyx_btn_active");
    var html = `<div class="sanjiao" id="xxksj"><img src="images/sanjiao.png" /></div>`
    $(this).append($(html));


    //切换右边对应数据
    var list = `
    <div class="news_content_list">
        <dv class="news_content_list_r">
            <div class="news_content_list_r_tit">工会第二小组开展“徒步康道舒身心 健康生活走起来”主题登山活动
            </div>
            <div class="news_content_list_r_msg">
                近日，为丰富会员的业余文化生活，倡导绿色、健康的生活方式，在局工会的关心指导下，工会第二小组开展了“徒步康道舒身心健康生活走起来”主题登山活动。
            </div>
            <div class="xiangxi  visible-md-block visible-lg-block">[ 详细 ]</div>
            <div class="clear"></div>
        </dv>
        <div class="xwimg"><img src="images/xwimg_05.png" /></div>
    </div>
    <div class="clear"></div>
    `;
    //装list的box
    let news_box = $("#xxk_content");
    news_box.empty();
    //获取到的数据，只取前三条。
    let data  = [{},{},{},{}];
    for(let i = 0 ; i < 3 ; i++){
        news_box.append($(list));
        
    }
})
//初始化 第一次肯定要显示数据吧
$($(".xjyx_btn")[0]).trigger("click")