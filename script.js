// window.scrollTo(0,0);
window.scrollTo(0,80);
window.addEventListener("DOMContentLoaded",
  () => {
    anime({
    targets: '#title-curtain', 
    scaleX:[1, 0],
    easing: 'easeInOutExpo',
    duration: 600
  });

  anime({
    targets: '#h2-curtain', 
    scaleX:[1, 0],
    easing: 'easeInOutExpo',
    duration: 600,
    delay:90
  });

  anime({
    targets: '#contact-curtain', 
    width: [ '70%', '0%' ],
    easing: 'easeInOutExpo',
    duration: 600,
    delay:180
  });
  anime({
    targets: '#location-curtain', 
    width: [ '40%', '0%' ],
    easing: 'easeInOutExpo',
    duration: 600,
    delay: 270
  });
  anime({
    targets: '#title-curtain', 
    scaleX:[1, 0],
    easing: 'easeInOutExpo',
    duration: 600
  });
  anime({
    targets: '.hero',
    height: '30vh',
    easing: 'easeInOutExpo',
    duration: 600,
    delay:1000
  });
  anime({
    targets: '.hero-content',
    scale: '0.7',
    easing: 'easeInOutExpo',
    duration: 600,
    delay:1000
  });
  setTimeout(function () {
    window.scrollBy({
      top:-80,
      behavior: 'smooth',
    });
  }, 700);
});
//   setTimeout(function () {
//     window.scrollBy({
//       top:230,
//       behavior: 'smooth',
//     });
//   }, 700);
//  });







 

anime({
  targets: '.vl',
  height:['0%', '120%', '100%'],
  easing: 'easeInOutQuad',
  duration:600
});
//Animation du titre
// anime({
//     targets: '.titre',
//     translateY: [-50, 0],
//     opacity: [0, 1],
//     duration: 1500,
//     easing: 'easeOutExpo'
//   });
  
  // Animation du paragraphe après un petit délai
  anime({
    targets: '.intro',
    opacity: [0, 1],
    translateX: [-30, 0],
    delay: 1000,
    duration: 1000,
    easing: 'easeOutQuad'
  });

  // anime.timeline({ easing: 'easeOutExpo', duration: 1000 })
  // .add({
  //   targets: '.hero-content h1',
  //   translateY: [-50, 0],
  //   opacity: [0, 1]
  // })
  // .add({
  //   targets: '.hero-content h2',
  //   translateY: [-30, 0],
  //   opacity: [0, 1],
  //   offset: '-=600' // commence avant la fin du précédent
  // });