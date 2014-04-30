$(document).ready(function(){

  $("pre").hide();

  $(".headings li").click(function(){
    $(this).find("pre").slideToggle();
  });

});
