(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function (e) {
    // e.preventDefault();
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // fullPage
  // $("[data-aos]").each(function () {
  //   $(this).addClass("aos-init");
  // });
  // new fullpage("#fullpage", {
  //   // sectionsColor: ["yellow", "orange", "#C0C0C0", "#ADD8E6"],
  //   anchors: [
  //     "page1",
  //     "page2",
  //     "page3",
  //     "page4",
  //     "page5",
  //     "page6",
  //     "page7",
  //     "page8",
  //   ],
  //   // navigationTooltips: ["fullPage", "Open", "Easy", "Touch"],
  //   css3: true,
  //   scrollingSpeed: 1000,
  //   navigation: false,
  //   slidesNavigation: true,
  //   responsiveHeight: 330,
  //   responsiveWidth: 992,
  //   dragAndMove: true,
  //   dragAndMoveKey:
  //     "YkdZV3gyWVhKdmRISnBaMjh1WTI5dEE3X09keFpISmhaMEZ1WkUxdmRtVT0xbmw=",
  //   controlArrows: false,
  //   // Get your license at https://alvarotrigo.com/fullPage/pricing/
  //   // licenseKey: "YOUR LICENSE KEY HERE ",
  // });
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);
});
