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

  //initialize tiny slider
  let slider = tns({
    container: ".my-slider",
    controlsText: [
      '<img src="/assets/src/img/prev_icon.png" />',
      '<img src="/assets/src/img/next_icon.png" />',
    ],
    loop: true,
    mouseDrag: true,
    gutter: 20,
    controls: true,
    fixedWidth: 80,
    responsive: {
      600: {
        gutter: 20,
        fixedWidth: 194,
      },
    },
  });

  let slider2 = tns({
    container: ".lives-slider",
    controlsText: [
      '<img src="/assets/src/img/prev_icon.png" />',
      '<img src="/assets/src/img/next_icon.png" />',
    ],
    fixedWidth: 285,
    gutter: 10,
    loop: true,
    mouseDrag: true,
    controls: true,
    responsive: {
      992: {
        fixedWidth: 406,
        gutter: 10,
      },
    },
  });

  let slider3 = tns({
    container: ".shorts-slider",
    controlsText: [
      '<img src="/assets/src/img/prev_icon.png" />',
      '<img src="/assets/src/img/next_icon.png" />',
    ],
    fixedWidth: 285,
    gutter: 10,
    loop: true,
    mouseDrag: true,
    controls: true,
    /*  responsive: {
       992: {
         fixedWidth: 406,
         gutter: 10,
       },
     }, */
  });

  /*  let slider4 = tns({
    container: ".shows-slider",
    controlsText: [
      '<img src="/assets/src/img/prev_icon.png" />',
      '<img src="/assets/src/img/next_icon.png" />',
    ],
    loop: false,
    mouseDrag: true,
    controls: true,
    responsive: {
      992: {
        fixedWidth: 1240,
        gutter: 10,
      },
    },
  }); */

  var swiper2 = new Swiper(".showSwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /** script for load more button */
  const moreTextEl = document.getElementById("more-text");
  const toggleBtnEl = document.getElementById("toggle-btn");
  const hideBtnEl = document.getElementById("hide-btn");
  const contentBlk = document.getElementById("content_block");

  toggleBtnEl.addEventListener("click", () => {
    moreTextEl.classList.toggle("hidden");
    toggleBtnEl.classList.toggle("hidden");
    hideBtnEl.classList.toggle("hidden");
    contentBlk.classList.toggle("line-clamp-6");
  });

  hideBtnEl.addEventListener("click", () => {
    moreTextEl.classList.toggle("hidden");
    toggleBtnEl.classList.toggle("hidden");
    hideBtnEl.classList.toggle("hidden");
    contentBlk.classList.toggle("line-clamp-6");
  });

  /*** Home page FAQ */
});
