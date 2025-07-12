window.scrollTo(0,80);
// window.addEventListener("DOMContentLoaded",
//   () => {
//     anime({
//     targets: '#title-curtain', 
//     scaleX:[1, 0],
//     easing: 'easeInOutExpo',
//     duration: 600
//   });
//   anime({
//     targets: '.header-education',
//     height: '30vh',
//     easing: 'easeInOutExpo',
//     duration: 600,
//     delay:1000
//   });
//   setTimeout(function () {
//     window.scrollBy({
//       top:-80,
//       behavior: 'smooth',
//     });
//   }, 700);
// });




 

// anime({
//   targets: '.vl',
//   height:['0%', '120%', '100%'],
//   easing: 'easeInOutQuad',
//   duration:600
// });
// //Animation du titre
// // anime({
// //     targets: '.titre',
// //     translateY: [-50, 0],
// //     opacity: [0, 1],
// //     duration: 1500,
// //     easing: 'easeOutExpo'
// //   });
  
//   // Animation du paragraphe après un petit délai
//   anime({
//     targets: '.intro',
//     opacity: [0, 1],
//     translateX: [-30, 0],
//     delay: 1000,
//     duration: 1000,
//     easing: 'easeOutQuad'
//   });

//   // anime.timeline({ easing: 'easeOutExpo', duration: 1000 })
//   // .add({
//   //   targets: '.hero-content h1',
//   //   translateY: [-50, 0],
//   //   opacity: [0, 1]
//   // })
//   // .add({
//   //   targets: '.hero-content h2',
//   //   translateY: [-30, 0],
//   //   opacity: [0, 1],
//   //   offset: '-=600' // commence avant la fin du précédent
//   // });

//   const course = document.getElementsByClassName('course');
//   document.addEventListener('click', function(e){
//     if (course.contains(e.target)){
//       course.classList.toggle('hover-fake');
//     } else {
//       course.classList.remove('hover-fake');
//     }
//   });

//   const popup = document.getElementById('popup');
//   const openBtn = document.getElementById('openPopup');
//   const closeBtn = document.getElementById('closePopup');

//   openBtn.addEventListener('click', () => {
//     popup.classList.remove('popup-hidden');
//   });

//   closeBtn.addEventListener('click', () => {
//     popup.classList.add('popup-hidden');
//   });

window.addEventListener("DOMContentLoaded", () => {
  // Your anime.js animations
  anime({
    targets: '#title-curtain', 
    scaleX: [1, 0],
    easing: 'easeInOutExpo',
    duration: 600
  });
  anime({
    targets: '.header-education',
    height: '30vh',
    easing: 'easeInOutExpo',
    duration: 600,
    delay: 1000
  });
  setTimeout(() => {
    window.scrollBy({
      top: -80,
      behavior: 'smooth',
    });
  }, 700);

  anime({
    targets: '.vl',
    height: ['0%', '120%', '100%'],
    easing: 'easeInOutQuad',
    duration: 600
  });

  anime({
    targets: '.intro',
    opacity: [0, 1],
    translateX: [-30, 0],
    delay: 1000,
    duration: 1000,
    easing: 'easeOutQuad'
  });

  // Fix course hover-fake toggle on click
  const courses = document.querySelectorAll('.course');

  document.addEventListener('click', (e) => {
    let clickedInsideCourse = false;
    courses.forEach(course => {
      if (course.contains(e.target)) {
        course.classList.toggle('hover-fake');
        clickedInsideCourse = true;
      } else {
        course.classList.remove('hover-fake');
      }
    });
    // if clicked outside any course, all will have hover-fake removed
  });

  // Popup open/close
  const popupOverlay = document.getElementById('popupOverlay');
  const popupBody = document.getElementById('popupBody');
  const closeBtn = document.querySelector('.close-btn');

  // Open popup
  document.querySelectorAll('[data-toggle="openPopup"]').forEach(item => {
    item.addEventListener('click', async () => {
      const target = item.getAttribute('data-popup-target');
      try {
        const response = await fetch(`./courses/${target}.html`);
        if (!response.ok) throw new Error('Popup not found.');
        const content = await response.text();
        popupBody.innerHTML = content;
        // popupOverlay.classList.remove('popup-hidden');
        popupOverlay.classList.add('active');   // Show popup

      } catch (error) {
        popupBody.innerHTML = `<p style="color:red;">Failed to load popup: ${error.message}</p>`;
        // popupOverlay.classList.remove('popup-hidden');
        popupOverlay.classList.add('active');   // Show popup
      }
    });
  });

  // Close popup
  closeBtn.addEventListener('click', () => {
    // popupOverlay.classList.add('popup-hidden');
    popupOverlay.classList.remove('active'); // Hide popup
    popupBody.innerHTML = '';
  });

  // Optional: close popup on overlay click
  popupOverlay.addEventListener('click', e => {
    if (e.target === popupOverlay) {
      // popupOverlay.classList.add('popup-hidden');
      popupOverlay.classList.remove('active'); // Hide popup
      popupBody.innerHTML = '';
    }
  });
});

