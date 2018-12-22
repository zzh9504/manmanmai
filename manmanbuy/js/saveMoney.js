$(function () {
    var e, t;
    e = $("ul"), t = 0, $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getmoneyctrl",
        data: {
            pageid: t
        },
        success: function (t) {
            var a = template("shop", t);
            e.html(a)
        }
    }), 
    $.ajax({
        type: "get",
        data: {
            pageid: 0
        },
        url: "http://localhost:9090/api/getmoneyctrl",
        success: function (t) {
            var a = template("option", {
                items: parseInt(t.totalCount / t.pagesize)
            });
            $(".footer-bottom select").html(a)
        }
    });
    var l = 0;
    $("select").on("change", function () {
        l = $(this).val() - 1, $.ajax({
            data: {
                pageid: l
            },
            url: "http://localhost:9090/api/getmoneyctrl",
            success: function (t) {
                var a = template("shop", t);
                console.log(a), $("ul").html(a)
            }
        })
    });
    var a = $(".btn1");
    itcast.tap(a[0], function () {
        if (0 == l) return !1;
        l--, $.ajax({
            data: {
                pageid: l
            },
            url: "http://localhost:9090/api/getmoneyctrl",
            success: function (t) {
                var a = template("shop", t);
                $("ul").html(a), $(".footer-bottom select").val(l + 1)
            }
        })
    });
    var o = $(".btn2");
    itcast.tap(o[0], function () {
        if (13 == l) return !1;
        console.log(l), l++, $.ajax({
            data: {
                pageid: l
            },
            url: "http://localhost:9090/api/getmoneyctrl",
            success: function (t) {
                var a = template("shop", t);
                $("ul").html(a), $(".footer-bottom select").val(l + 1)
            }
        })
    })
});