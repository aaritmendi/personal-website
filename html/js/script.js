var ano = (new Date).getFullYear();
$(document).ready( function() {	
$(".algo").typed({
        strings: ["Adrián Aritmendi", "Web Developer", "Geek", "Técnico"],
        typeSpeed: 12,
        loop:true,
        backDelay: 2400
})
$("#fecha").text( ano );
;
$(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
  $('.barra').click(function(){
    var c = document.getElementById("navbar");
    c.classList.remove("active");
    var cb = document.getElementById("navbutton");
    cb.classList.remove("active");

  });

});

