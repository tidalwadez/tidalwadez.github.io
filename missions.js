console.log("this is on");

 if (jQuery) {  
    console.log("jQuery is loaded");
} else {
    console.log("jQuery is not loaded");
}

// $(".menu-btn a").on("click", function(f) {
//   $(".menu-btn a").text("ACTIVE!");
// });

  //Mobile Menu
  $('.menu-btn, .mobile-nav a.close-mobile-menu-btn').click(function(){
    // $('.menu-btn a').toggleClass('menu-active');
    $('.mobile-nav').slideToggle();
  });

  // $('#testList').mouseenter(function () {
  //     $('.sub-nav').slideToggle();
  //   });

  // $('.mobile-nav .sub-sub-nav-open-close').click(function () {
  //       //slide up all the link lists
  //       $('.sub-sub-nav').slideUp();
  //       $('.sub-sub-nav-open-close').html('&#10133;').parent().removeClass('sub-sub-active');
  //       //slide down the link list below the h3 clicked - only if its closed
  //       if (!$(this).next().is(':visible')) {
  //           $(this).next().slideDown();
  //           $('.sub-sub-nav-open-close').html('&#10133;').parent().removeClass('sub-sub-active');
  //           $(this).html('&#10134').parent().addClass('sub-sub-active');
  //       }
  //   });


 $('.mobile-nav .sub-nav-open-close').mouseenter(function () {
        //slide up all the link lists
        $('.sub-nav, .sub-sub-nav').slideUp('slow');
        // $('.sub-nav-open-close').html('&#10133;').parent().removeClass('sub-active');
        //slide down the link list below the h3 clicked - only if its closed
        if (!$(this).next().is(':visible')) {
            $(this).next().slideDown('slow');
            // $('.sub-nav-open-close').html('&#10133;').parent().removeClass('sub-active');
            // $(this).html('&#10134').parent().addClass('sub-active');
        }
    });

  $('.mobile-nav .sub-sub-nav-open-close').mouseenter(function () {
        //slide up all the link lists
        $('.sub-sub-nav').slideUp('slow');
        // $('.sub-sub-nav-open-close').html('&#10133;').parent().removeClass('sub-sub-active');
        //slide down the link list below the h3 clicked - only if its closed
        if (!$(this).next().is(':visible')) {
            $(this).next().slideDown('slow');
            // $('.sub-sub-nav-open-close').html('&#10133;').parent().removeClass('sub-sub-active');
            // $(this).html('&#10134').parent().addClass('sub-sub-active');
        }
    });
