
    // Code for fixed nav with animation 
      const list = document.getElementById("new-desktop-menu").classList;
      console.log(list);
      const navbar = document.getElementById("new-desktop-menu");
      window.addEventListener("scroll", function () {
        const scrollHeight = window.pageYOffset;
        const navHeight = navbar.getBoundingClientRect().height;
        if (scrollHeight > navHeight) {
          list.add("fixed-top");
          list.add("navbar-fixed");
        } 

        if($(window).scrollTop() == 0) {
              list.remove("fixed-top");
              list.remove("navbar-fixed");
         }

      });
    // Code for fixed nav with animation ended



  $(".nav-search").focus(function(){
    $(".suggetion_box").addClass("fade_suggetion");
    $(".nav-search-wrapper button").addClass("gold_button");
  });

  $(".suggetion_box").click(function(){
    $(".nav-search").focus();
  });
  document.querySelector('.nav-search').addEventListener('blur', function(){
    $(".suggetion_box").removeClass("fade_suggetion");
    $(".nav-search-wrapper button").removeClass("gold_button");

  });

  // This is for controlling resizing modal 
  $(window).resize(function(){
    if($(window).innerWidth() > 992){
      if($(".mobile-menu-modal").attr("class") === "modal fixed-right fade mobile-menu-modal show"){
        $(".mobile-menu-modal, .modal-backdrop").hide();
      }
    }
    $(".nav-link").find("svg path, svg circle,  svg line, svg ellipse").css({
        'stroke':'#003464'
        });

  });
// This is for controlling resizing modal ended------------------------------------------


$(".modal").click(function(){
    $(".nav-link").find("svg path, svg circle,  svg line, svg ellipse").css({
        'stroke':'#003464'
        });
})
$(".nav-link").click(function(){
    $('.modal').modal('hide');


    
    if($(this).attr("class") === "nav-link visited"){
        $(".nav-link").find("svg path, svg circle,  svg line, svg ellipse").css({
            'stroke':'#003464'
            });
            $(this).removeClass("visited");


    }else{
        $(".nav-link").find("svg path, svg circle, svg line, svg ellipse").css({
            'stroke':'#003464'
            });
            $(this).find("svg path,  svg circle, svg line, svg ellipse").css({
            'stroke':'#c09451'
            });
            $(this).addClass("visited");

    }



});


$(".close").click(function(){
    $(".nav-link  ").find("svg path,  svg circle,  svg line,  svg ellipse").css({
        'stroke':'#003464'
    });
})


