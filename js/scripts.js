$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul#user").prepend("<li>hello</li>");
    $("ul#webpage").prepend("<li>hello there</li>");
    $("ul#user").css("background-color", "green");
    $("ul#webpage").css("background-color", "red");
    $("ul#user").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>goodbye</li>");
    $("ul#webpage").prepend("<li>I said goodbye!</li>");
    $("ul#user").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
    });
  });

  $("button#stop").click(function(){
    $("ul#user").prepend("<li>stop!!</li>");
    $("ul#webpage").prepend("<li>I said stop</li>");
    $("ul#user").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
    });
  });

});
