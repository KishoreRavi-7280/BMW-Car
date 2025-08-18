//toggle Menu
// function toggleMenu(){
//     const menu = document.querySelector('.menu');
//     const nav = document.querySelector('.nav');
//     menu.classList.toggle('active')
//     nav.classList.toggle('active')
// }

// function changeVideo(name){
//     const bgVideoList = document.querySelectorAll('.bg-video');
//     const trailers = document.querySelectorAll('.trailer');
//     const models = document.querySelectorAll('.model');

//     bgVideoList.forEach(video => {
//         video.classList.remove('.active');
//         if(video.classList.contains(name)){
//             video.classList.add('active')
//         }
//     });

//     models.forEach(video => {
//         model.classList.remove('.active');
//         if(model.classList.contains(name)){
//             model.classList.add('active')
//         }
//     });

//     trailers.forEach(video => {
//         video.classList.remove('.active');
//         if(video.classList.contains(name)){
//             video.classList.add('active')
//         }
//     });

// }

//scroll up
let currentIndex = -1;
  const sections = document.querySelectorAll("section");

  function scrollUp() {
    if (currentIndex < sections.length - 1) {
      currentIndex++;
      sections[currentIndex].scrollIntoView({ behavior: "smooth" });
    }
  }


  let currentIndex2 = 0;
  const sections2 = document.querySelectorAll("section");

  function scrollUp2() {
    if (currentIndex2 < sections2.length - 1) {
      currentIndex2++;
      sections[currentIndex2].scrollIntoView({ behavior: "smooth" });
    }
  }


// // Toggle menu button

// const header = document.querySelector("header");

// window.addEventListener ("scroll", function() {
// 	header.classList.toggle ("stickyy", window.scrollY > 0);
// });

// function toggleMenu() {
//     const menu = document.querySelector('.menu');
//     const nav = document.querySelector('.nav');
//     if (menu) menu.classList.toggle('active');
//     if (nav) nav.classList.toggle('active');
// }
// // menu
// const sr = ScrollReveal ({
// 	distance: '45px',
// 	duration: 2700,
// 	reset: true
// })

//  sr.reveal('.content',{delay:350, origin:'left'})
//  sr.reveal('.logo',{delay:350, origin:'right'})

// sr.reveal('.home,.x-series,.m-series,.Booking',{delay:200, origin:'bottom'})

// // Change the background video when clicking on the gallery
// function changeVideo(names) {
//     const bgVideoList = document.querySelectorAll('.bg-video');
//     const trailers = document.querySelectorAll('.trailer');
//     const models = document.querySelectorAll('.model');

//     // Change background videos
//     bgVideoList.forEach(video => {
//         video.classList.remove('active');
//         if (video.classList.contains(names)) {
//             video.classList.add('active');
//         }
//     });

//     // Change model name
//     models.forEach(model => {
//         model.classList.remove('active');
//         if (model.classList.contains(names)) {
//             model.classList.add('active');
//         }
//     });

//     // Change trailers
//     trailers.forEach(trailer => {
//         trailer.classList.remove('active');
//         if (trailer.classList.contains(names)) {
//             trailer.classList.add('active');
//         }
//     });
// }


// Sticky Header
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("stickyy", window.scrollY > 0);
});

// Toggle Menu
function toggleMenu() {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");
  const toggleBtn = document.querySelector(".menu-toggle");

  if (menu) menu.classList.toggle("active");
  if (nav) nav.classList.toggle("active");
  if (toggleBtn) toggleBtn.classList.toggle("open"); // animate crossline
}

// Attach click event to hamburger button
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleMenu);
  }

  // Close menu when clicking on nav links (for mobile UX)
  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector(".menu")?.classList.remove("active");
      document.querySelector(".nav")?.classList.remove("active");
      toggleBtn?.classList.remove("open");
    });
  });

  // Reset menu on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      document.querySelector(".menu")?.classList.remove("active");
      document.querySelector(".nav")?.classList.remove("active");
      toggleBtn?.classList.remove("open");
    }
  });
});

// ScrollReveal Animations
const sr = ScrollReveal({
  distance: "45px",
  duration: 2700,
  reset: true,
});

sr.reveal(".content", { delay: 350, origin: "left" });
sr.reveal(".logo", { delay: 350, origin: "right" });
sr.reveal(".home,.x-series,.m-series,.Booking", {
  delay: 200,
  origin: "bottom",
});

// Change Background Video
function changeVideo(names) {
  const bgVideoList = document.querySelectorAll(".bg-video");
  const trailers = document.querySelectorAll(".trailer");
  const models = document.querySelectorAll(".model");

  bgVideoList.forEach((video) => {
    video.classList.toggle("active", video.classList.contains(names));
  });

  models.forEach((model) => {
    model.classList.toggle("active", model.classList.contains(names));
  });

  trailers.forEach((trailer) => {
    trailer.classList.toggle("active", trailer.classList.contains(names));
  });
}
