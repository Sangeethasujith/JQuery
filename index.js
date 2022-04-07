//function changeBg(){
    //console.log("abc");
  //  document.getElementById("myDIV").style.backgroundColor = "lightblue";
//}

$(document).ready(function(){
    $("button").click(function(){
         $("#myDIV").css("background-color","lightblue");
         $("p").hide();
    });
    $("h2").addClass("edit-h2").text("Hello World!!!");
    //$("h2").text("Hello World!!!");

    $("h3").on("mouseover",function(){
		$("h3").css("color","green");
	 });

    $("a").attr("href","https://m.youtube.com/");

    $("input").keypress(function(){
        console.log(event.key);
       // $("h2").text(event.key);
    });
   
  });