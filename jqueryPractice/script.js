$("#btn-h1").click(function(){
    $("h1").text("don't click me")
    $("body").addClass("red")
    setTimeout(function(){
        $("h1").text("welcome to the page")
        $("#btn-h1").text("please click me")
        $("body").removeClass("red")
    },5000);
   
})
