/**
 * Created by Administrator on 2016/11/20.
 */
$(window).ready(function () {
    if (window.pageYOffset<650) {
        $("#features-item").css({display:"none"})
    }
    $(window).scroll(function () {
        if (window.pageYOffset > 200) {
            $("#features-item").fadeIn(1500);
        }
    })
})