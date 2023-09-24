//ease scroll animation
const easeSpeed = 0.05;
let scrollY = 0,
  curScroll = 0;
let wheelY = 0;

const innerHeight = window.innerHeight;

onscroll = () => {
  scrollY = window.scrollY;
};

function animate() {
  requestAnimationFrame(animate);

  curScroll = curScroll + easeSpeed * (scrollY - curScroll);
  if (curScroll < 0.01) curScroll = 0;
  document.getElementById("main").style.transform = `translateY(${
    curScroll * -1
  }px)`;
}

animate();
