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

  //Mobile Menu
  $('.menu-btn, .mobile-nav a.close-mobile-menu-btn').click(function(){
    $('.mobile-nav').slideToggle();
  });


 $('.mobile-nav .sub-nav-open-close').click(function () {
        //slide up all the link lists
        $('.sub-nav').slideUp('slow');
        $(this).find('.main-ul').slideToggle('slow');
    });

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
