$(function () {
    $.getUrlParam = function (t) {
        var a = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
            c = window.location.search.substr(1).match(a);
        return null != c ? unescape(c[2]) : null
    };
    var t = $.getUrlParam("productid");
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getdiscountproduct",
        data: {
            productid: t
        },
        success: function (t) {
            var html = template("discountProduct", t);
            $(".cu-content").html(html)
        }
    })
});
