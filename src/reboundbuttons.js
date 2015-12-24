//constants
var BUTTON_HOVER_PRESS_DEPTH = 0.5;
var BUTTON_CLICK_PRESS_DEPTH = 1;

// Get a reference to the logo element.
var github_btn = document.getElementById('github_btn');
var linkedin_btn = document.getElementById('linkedin_btn');

// create a SpringSystem and a Spring with a bouncy config.
var springSystem = new rebound.SpringSystem();
var githubSpring = springSystem.createSpring(50, 3);
var linkedinSpring = springSystem.createSpring(50, 3);

// Add a listener to the spring. Every time the physics
// solver updates the Spring's value onSpringUpdate will
// be called.
githubSpring.addListener({
  onSpringUpdate: function(spring) {
    var val = spring.getCurrentValue();
    val = rebound.MathUtil.mapValueInRange(val, 0, 1, 1, 0.5);
    scale(github_btn, val);
  }
});

linkedinSpring.addListener({
  onSpringUpdate: function(spring) {
    var val = spring.getCurrentValue();
    val = rebound.MathUtil.mapValueInRange(val, 0, 1, 1, 0.5);
    scale(linkedin_btn, val);
  }
});

// github button springs
github_btn.addEventListener("mouseover", function() {
  hover(githubSpring);
}, false);

github_btn.addEventListener('mousedown', function() {
  clicked(githubSpring);
});

github_btn.addEventListener('mouseout', function() {
  reset(githubSpring);
});

github_btn.addEventListener('mouseup', function() {
  reset(githubSpring);
});

// linkedin button springs
linkedin_btn.addEventListener("mouseover", function() {
  hover(linkedinSpring);
}, false);

linkedin_btn.addEventListener('mousedown', function() {
  clicked(linkedinSpring);
});

linkedin_btn.addEventListener('mouseout', function() {
  reset(linkedinSpring);
});

linkedin_btn.addEventListener('mouseup', function() {
  reset(linkedinSpring);
});

// button spring helper functions
function hover(spring) {
  console.log("hover");
  spring.setEndValue(BUTTON_HOVER_PRESS_DEPTH);
}

function reset(spring) {
  console.log("reset");
  spring.setEndValue(0);
}

function clicked(spring) {
  console.log("clicked");
  spring.setEndValue(BUTTON_CLICK_PRESS_DEPTH);
}

// Helper for scaling an element with css transforms.
function scale(btn, val) {
  btn.style.mozTransform =
  btn.style.msTransform =
  btn.style.webkitTransform =
  btn.style.transform = 'scale3d(' + val + ', ' + val + ', 1)';
}