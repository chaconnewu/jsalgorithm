for (var i = 1; i <= 5; i += 1) {
    (function(i) {
        setTimeout(function(){
        console.log("i: " + i);
    }, i*1000);
    }(i));
}
