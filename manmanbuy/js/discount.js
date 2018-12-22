$.ajax({
    type: "get",
    url:  "http://localhost:9090/api/getinlanddiscount",
    
    success: function (t) {
        console.log(t);
        
        var html = template("productList", t);
        $("ul").html(html)
    }
});
var count = 0;

function rotate() {
    $(".loading").css({
        WebkitTransform: "scale(0.5) rotate(" + count + "deg)",
        MozTransform: "scale(0.5) rotate(" + count + "deg)"
    }), 360 == count && (count = 0), count += 45, window.setTimeout(rotate, 100)
}
window.setTimeout(rotate, 10);
