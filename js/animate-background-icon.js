// Animate each layer group with different speeds and paths
document.querySelectorAll('.layer1').forEach((icon, i) => {
  anime.animate(icon, {
    translateY: () => anime.random(-30, 30),
    translateX: () => anime.random(-20, 20),
    rotate: () => anime.random(-15, 15),
    duration: () => anime.random(4000, 7000),
    delay: i * 300,
    direction: 'alternate',
    loop: false,
    easing: 'easeInOutSine',
  });
});

document.querySelectorAll('.layer2').forEach((icon, i) => {
  anime.animate(icon, {
    translateY: () => anime.random(-40, 40),
    translateX: () => anime.random(-30, 30),
    rotate: () => anime.random(-20, 20),
    duration: () => anime.random(5000, 9000),
    delay: i * 500,
    direction: 'alternate',
    loop: false,
    easing: 'easeInOutQuad',
  });
});

// Fade in background icons on load
anime.animate('.background-icon svg', {
  opacity: [0, 0.6],
  duration: 2000,
  delay: anime.stagger(200, { start: 500 }),
  easing: 'easeOutQuad',
});