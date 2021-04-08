$("#btn-h1").click(function(){
    $("h1").text("don't click me")
    setTimeout(function(){
        $("h1").text("Welcome to the page")
        $("#btn-h1").text("click me")
    },5000)

})