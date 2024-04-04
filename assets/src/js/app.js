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

  /** Search bar in navigation js */
  const searchInput = document.getElementById("searchInput");
  const searchIcon = document.getElementById("searchIcon");
  const closeIcon = document.getElementById("closeIcon");

  searchInput.addEventListener("input", function () {
    if (searchInput.value.trim() !== "") {
      searchIcon.style.display = "none";
      closeIcon.style.display = "inline-block";
    } else {
      searchIcon.style.display = "inline-block";
      closeIcon.style.display = "none";
    }
  });

  closeIcon.addEventListener("click", function () {
    searchInput.value = "";
    searchIcon.style.display = "inline-block";
    closeIcon.style.display = "none";
  });

  /** slider for home page header */
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

  // Check if the element with class "lives-slider" exists
  var livesSliderExist = document.querySelector(".lives-slider");

  // If the element exists, initialize the slider
  if (livesSliderExist) {
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
  }

  // Check if the element with class "shorts-slider" exists
  var shortsSliderExist = document.querySelector(".shorts-slider");

  // If the element exists, initialize the slider
  if (shortsSliderExist) {
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
    });
  }

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

  /**
   * Latest Videos Slider show Page
   */

  // Check if the element with class "latest-videos-slider" exists
  var latestVideosSliderExist = document.querySelector(".latest-videos-slider");

  // If the element exists, initialize the slider
  if (latestVideosSliderExist) {
    var latest_videos_slider = tns({
      container: ".latest-videos-slider",
      items: 2,
      fixedWidth: 343,
      gutter: 10,
      center: true,
      loop: false,
      swipeAngle: false,
      speed: 400,
      mouseDrag: true,
      controlsText: [
        '<img src="/assets/src/img/prev_icon.png" />',
        '<img src="/assets/src/img/next_icon.png" />',
      ],
      controls: true,
      responsive: {
        992: {
          fixedWidth: 934,
          gutter: 20,
        },
      },
    });
  }

  /** script for load more button Home page and Show Page
   * Discover the Best Sport Block
   */
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

  /***
   * Show page banner show more/less
   * content
   * */
  const show_content = document.getElementById("show_content_block_banner");
  if (show_content) {
    const button = document.createElement("button");
    show_content.append(button);
    button.append("Show More");
    button.setAttribute("id", "height-show-more");
    const moreContentBtn = document.getElementById("height-show-more");
    const contentClass = document.getElementById("content_height");

    moreContentBtn.addEventListener("click", () => {
      contentClass.classList.toggle("line-clamp-4");
      contentClass.classList.toggle("h-[95px]");
      if (button.innerHTML === "Show More") {
        button.innerHTML = "Show Less";
      } else {
        button.innerHTML = "Show More";
      }
    });
  }

  /***
   * Load more Game previews in show page
   */
});
