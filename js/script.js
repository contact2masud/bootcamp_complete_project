// Get all nav items
const navItems = document.querySelectorAll('.nav-item a');

// Add click event to each nav item
navItems.forEach(item => {
  item.addEventListener('click', function () {
    // Remove active class from all nav items
    navItems.forEach(nav => nav.classList.remove('active'));
    // Add active class to the clicked nav item
    this.classList.add('active');
  });
});

// Typed text Style JS Start other which is work by typed letter
// এখানে typed.js বলে এর var typed নিতে হইছে। 

let typed = new Typed(".type_text", {
  strings: ["Web developer", "UI/UX Designer", "Graphics Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000, // 'BackDelay' should be 'backDelay'
  loop: true,
});


// Scroll Bar JS Star.

let calcscrollvalue = () => {
  let scrollProgress = document.getElementById("progressbar");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#0097e6 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  // #03cc65 for progressbar and #d7d7d7 for unused area of progressbar.
};

window.onscroll = calcscrollvalue;
window.onload = calcscrollvalue;

// !Scroll Bar JS End.

// Custom Curser JS STart

const curserDot = document.querySelector("[data-cursor-dot]");
const curserOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    curserDot.style.left = `${posX}px`;
    curserDot.style.top = `${posY}px`;

    // curserOutline.style.left = `${posX}px`; 
    // curserOutline.style.top = `${posY}px`; 
    
    
    curserOutline.animate({
        left:`${posX}px`,
        top:`${posY}px`
    }, {duration:500, fill:"forwards"});
}
);

// Custom Curser JS End

