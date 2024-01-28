// Update getElementById to getElementsByClassName
document.getElementsByClassName("menu-icon")[0].addEventListener("click", function () {
  var menu = document.getElementById("menu");
  menu.classList.toggle("menu-visible");
});

document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");

  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;

  gsap.set(cursor, { x: mouseX, y: mouseY });
gsap.set(cursorFollower, { x: posX, y: posY });

  gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });

      gsap.set(cursorFollower, {
        css: {
          left: posX,
          top: posY,
        },
      });
    },
  });

  document.addEventListener("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });
});

// Select all links in the navigation bar
const navLinks = document.querySelectorAll('#menu a');

// Loop through each link
navLinks.forEach(link => {
// Add hover event listener
link.addEventListener('mouseenter', () => {
  // Scale up on hover
  gsap.to(link, { scale: 1.2, duration: 0.3 });
});

// Add mouse leave event listener
link.addEventListener('mouseleave', () => {
  // Scale down when hover ends
  gsap.to(link, { scale: 1, duration: 0.3 });
});
});

document.getElementById('theme-toggle').addEventListener('click', function() {
var themeIcon = document.getElementById('theme-icon');
if (document.documentElement.getAttribute('data-theme') === 'dark') {
  document.documentElement.removeAttribute('data-theme');
    themeIcon.src = 'assets/Dark.svg'; // Dark mode icon
    document.querySelector('.cursor').style.borderColor = 'black';
        document.querySelector('.cursor-follower').style.borderColor = 'black';
} else {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeIcon.src = 'assets/Light.svg'; // Light mode icon
  document.querySelector('.cursor').style.borderColor = 'white';
  document.querySelector('.cursor-follower').style.borderColor = 'white';
}
});
