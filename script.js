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

  if (scrollY > innerHeight) {
    document.getElementById("about-me").style.opacity = "1";
    document.getElementById("name-profession").style.transform =
      "translateX(150px)";
  } else {
    document.getElementById("about-me").style.opacity = "0";
    document.getElementById("name-profession").style.transform =
      "translateX(0px)";
  }
}

animate();

const observingElement = document.querySelectorAll(".observing");

function observerFunction(classToggle) {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(classToggle, entry.isIntersecting);
      });
    },
    { threshold: 0.5 }
  );

  observingElement.forEach((observingElement) => {
    observer.observe(observingElement);
  });
}

observerFunction("showToLeft");
