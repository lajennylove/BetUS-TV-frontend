/**
 * Verify if the DOM is ready
 * @param {function} fn
 * @return {void}
 */
function domReady(fn) {
  // If we're early to the party
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    fn();
  }
}

/**
 * Application entrypoint
 */
domReady(() => {
  console.log("The Dom is ready! 🚀");

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var slider = tns({
    container: ".my-slider",
    items: 1,
    controlsText: [
      '<img src="/assets/src/img/prev_icon.png" />',
      '<img src="/assets/src/img/next_icon.png" />',
    ],
    responsive: {
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 2,
      },

      900: {
        items: 3,
      },
      1200: {
        items: 7,
      },
    },
  });
});
