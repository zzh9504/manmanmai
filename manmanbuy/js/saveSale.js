window.onload = function () {
    var a, e, t = (a = new RegExp("(^|&)" + "productid" + "=([^&]*)(&|$)"), null != (e = window.location.search.substr(1).match(a)) ? unescape(e[2]) : null);
    $.ajax({
        type: "get",
        data: {
            productid: t
        },
        url: "http://localhost:9090/api/getmoneyctrlproduct",
        success: function (a) {
            var e = template("sales", a);
            console.log(e),
            $(".sale").html(e)
        }
    })
};