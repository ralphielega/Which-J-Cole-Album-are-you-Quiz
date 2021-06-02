let count = 0;
$(".dollar").click(function() {
    let age = $(".age").val();
    let music = $(".music").val();
    
    if(age<=25 && music==="beat"){
       $(".warm"). show();
        $(".results"). text("The Warm Up");
    } else if (age<=25 && music==="lyrics") {
           $(".sinner").show();
        $(".results").text("Born Sinner");
    } 
        else if (age>25 && music ==="beat") {
            $(".results").text("K.O.D");
            $(".kod").show();
        }
        else if (age>25 && music==="lyrics") {
            $(".results").text("4 Your Eyes Only");
            $(".youreyes").show();
        }
        else {
            $(".results").text("try again");
            $(".no").show();
}
   
   $(".results").append("<p> You are " + age + " years old and you like music with an exceptional " + music + ".</p>");
    $(".results").show();
    count = count + 1;
    $(".counter").text("This quiz has been taken " + count + " times");
});
$(".dollar").click(function() {
    $(".dreamville").css("width","700px");
});
