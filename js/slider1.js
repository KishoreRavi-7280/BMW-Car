// const bmwTrack = document.querySelector(".bmw-slider-track");
// const bmwPrev = document.querySelector(".bmw-prev");
// const bmwNext = document.querySelector(".bmw-next");

// let bmwIndex = 0;
// const bmwSlides = document.querySelectorAll(".bmw-slide");
// const bmwSlideWidth = bmwSlides[0].offsetWidth + 40; // includes margin

// function bmwUpdateSlider() {
//     bmwTrack.style.transform = `translateX(-${bmwIndex * bmwSlideWidth}px)`;
// }

// bmwNext.addEventListener("click", () => {
//     if (bmwIndex < bmwSlides.length - 1) {
//         bmwIndex++;
//         bmwUpdateSlider();
//     }
// });

// bmwPrev.addEventListener("click", () => {
//     if (bmwIndex > 0) {
//         bmwIndex--;
//         bmwUpdateSlider();
//     }
// });

// // Swipe support for mobile
// let bmwStartX = 0;
// bmwTrack.addEventListener("touchstart", (e) => {
//     bmwStartX = e.touches[0].clientX;
// });

// bmwTrack.addEventListener("touchend", (e) => {
//     let bmwEndX = e.changedTouches[0].clientX;
//     if (bmwStartX - bmwEndX > 50 && bmwIndex < bmwSlides.length - 1) {
//         bmwIndex++;
//     } else if (bmwEndX - bmwStartX > 50 && bmwIndex > 0) {
//         bmwIndex--;
//     }
//     bmwUpdateSlider();
// });


const bmwTrack = document.querySelector(".bmw-slider-track");
const bmwPrev = document.querySelector(".bmw-prev");
const bmwNext = document.querySelector(".bmw-next");

let bmwIndex = 0;
const bmwSlides = document.querySelectorAll(".bmw-slide");

function getSlideWidth() {
  return bmwSlides[0].offsetWidth + 5; // adjust gap if needed
}

function bmwUpdateSlider() {
  const bmwSlideWidth = getSlideWidth();
  bmwTrack.style.transition = "transform 0.4s ease-in-out";
  bmwTrack.style.transform = `translateX(-${bmwIndex * bmwSlideWidth}px)`;
}

// Next button
bmwNext.addEventListener("click", () => {
  if (bmwIndex < bmwSlides.length - 1) {
    bmwIndex++;
    bmwUpdateSlider();
  }
});

// Prev button
bmwPrev.addEventListener("click", () => {
  if (bmwIndex > 0) {
    bmwIndex--;
    bmwUpdateSlider();
  }
});

// Handle window resize (recalculate width & adjust position)
window.addEventListener("resize", () => {
  bmwUpdateSlider();
});

// Swipe support for mobile
let bmwStartX = 0;
bmwTrack.addEventListener("touchstart", (e) => {
  bmwStartX = e.touches[0].clientX;
});

bmwTrack.addEventListener("touchend", (e) => {
  let bmwEndX = e.changedTouches[0].clientX;
  if (bmwStartX - bmwEndX > 50 && bmwIndex < bmwSlides.length - 3) {
    bmwIndex++;
  } else if (bmwEndX - bmwStartX > 50 && bmwIndex > 0) {
    bmwIndex--;
  }
  bmwUpdateSlider();
});
