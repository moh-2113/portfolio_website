// Send Message receive details


//Smooth Scrolling

var navMenuTags = document.querySelectorAll(".nav-menu a");
var interval;

for (var i = 1; i < navMenuTags.length; i++) {
  navMenuTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();
    console.log(targetSectionID);
    if (targetSectionID == "coding profiles") {
      targetSectionID = "technical";
    }
    var targetSection = document.getElementById(targetSectionID);

    interval = setInterval(function () {
      scrollVertically(targetSection);
    }, 15);
  });
}

function scrollVertically(targetSection) {
  var reqCoordinates = targetSection.getBoundingClientRect();
  if (reqCoordinates.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}


//Skill Bars Filling

var progressBars = document.querySelectorAll(".skill-progress > div");
function initialiseBar(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + "%";
}
for (var bar of progressBars) {
  initialiseBar(bar);
}
function fillBar(bar) {
  let currentWidth = 0;
  let targetWidth = bar.getAttribute("data-bar-width");
  let interval = setInterval(function () {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
      return;
    }
    currentWidth++;
    bar.style.width = currentWidth + "%";
  }, 5);
}

// This function uses a for loop for individual progress bars.
function checkScroll() {
  for (let bar of progressBars) {
    var barCoordinates = bar.getBoundingClientRect();
    if (
      bar.getAttribute("data-visited") == "false" &&
      barCoordinates.top <= window.innerHeight - barCoordinates.height
    ) {
      bar.setAttribute("data-visited", true);
      fillBar(bar);
    } else if (barCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialiseBar(bar);
    }
  }
}
window.addEventListener("scroll", checkScroll);
