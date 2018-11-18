/* ==========================================================================
MAIN JAVASCRIPT
LAST UPDATED: 05.23.2018
AUTHOR: JOEL VIXIE, CHARITY DYNAMICS
UPDATED BY: LEE JASTER, CHARITY DYNAMICS
PAGEBUILDER: reus_cddev_donation_form_js
===========================================================================*/
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


$('.gift-level-container').click(function(){
  $('.gift-level-container').removeClass('active');
  $(this).addClass('active');
});

$('.gift-level-container.gift-amount1').click(function(){
  var inputValue = $('#inputgift1').val();
  console.log(inputValue)
  $('#totalGift').text("$" + inputValue)
});

$('.gift-level-container.gift-amount2').click(function(){
  var inputValue = $('#inputgift2').val();
  console.log(inputValue)
  $('#totalGift').text("$" + inputValue)
});

$('.gift-level-container.gift-amount3').click(function(){
  var inputValue = $('#inputgift3').val();
  console.log(inputValue)
  $('#totalGift').text("$" + inputValue)
});

$('.gift-level-container.gift-amount4').click(function(){
  var inputValue = $('#inputgift4').val();
  console.log(inputValue)
  $('#totalGift').text("$" + inputValue)
});

$('.gift-level-container.other-field').keypress(function(e) {
  $('#totalGift').text("$" + e.key)
});

$('#one-time-giving input[type=radio]:checked').parent('div').addClass('active');




  //Hacking IE 10
//   var doc = document.documentElement;
//   doc.setAttribute('data-useragent', navigator.userAgent);


// //Media Query JS
//   function checkSize(){
//     if ($('#mobile-indicator').is(':visible')){
//       $('.mobile-nav.hide.u-full-width.u-max-full-width').hide();
//     } else {
//         $('.mobile-nav.hide.u-full-width.u-max-full-width').hide();
//     }
//   }
