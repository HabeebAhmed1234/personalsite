//constants
var BUTTON_HOVER_PRESS_DEPTH = 0.5;
var BUTTON_CLICK_PRESS_DEPTH = 1;

var buttonsToSprings = new Map();
var springsToButtons = new Map();

// Get a reference to the logo element.
var buttons = [document.getElementById('github_btn') ,
               document.getElementById('linkedin_btn'),
               document.getElementById('throwned_icon'),
               document.getElementById('music_player_icon'),
               document.getElementById('wakey_wakey_icon'),
               document.getElementById('peppit_icon'),
               document.getElementById('uwhub_icon'),
               document.getElementById('pop_icon'),
               document.getElementById('nvidia_logo'),
               document.getElementById('enflick_logo'),
               document.getElementById('venmo_logo'),
               document.getElementById('blackberry_logo'),
               document.getElementById('quantica_logo')];

// create a SpringSystem and a Spring with a bouncy config.
var springSystem = new rebound.SpringSystem();
var springs = [];

for (i = 0 ; i < buttons.length ; i++) {
  springs.push(springSystem.createSpring(50, 3));
  buttonsToSprings.set(buttons[i].id, springs[i]);
  springsToButtons.set(springs[i], buttons[i]);
}

// Add a listener to the spring. Every time the physics
// solver updates the Spring's value onSpringUpdate will
// be called.
for (i = 0 ; i < springs.length ; i++) {
  springs[i].addListener({
    onSpringUpdate: function(spring) {
      var val = spring.getCurrentValue();
      val = rebound.MathUtil.mapValueInRange(val, 0, 1, 1, 0.5);
      scale(springsToButtons.get(spring), val);
    }
  });
}

// add spring inputs
for (i = 0 ; i < buttons.length ; i++) {
  buttons[i].addEventListener("mouseover", function(event) {
    hover(buttonsToSprings.get(event.target.id));
  }, false);
}

for (i = 0 ; i < buttons.length ; i++) {
  buttons[i].addEventListener("mousedown", function(event) {
    clicked(buttonsToSprings.get(event.target.id));
  }, false);
}

for (i = 0 ; i < buttons.length ; i++) {
  buttons[i].addEventListener("mouseout", function(event) {
    reset(buttonsToSprings.get(event.target.id));
  }, false);
}

for (i = 0 ; i < buttons.length ; i++) {
  buttons[i].addEventListener("mouseup", function(event) {
    reset(buttonsToSprings.get(event.target.id));
  }, false);
}

// button spring helper functions
function hover(spring) {
  spring.setEndValue(BUTTON_HOVER_PRESS_DEPTH);
}

function reset(spring) {
  spring.setEndValue(0);
}

function clicked(spring) {
  spring.setEndValue(BUTTON_CLICK_PRESS_DEPTH);
}

// Helper for scaling an element with css transforms.
function scale(btn, val) {
  btn.style.mozTransform =
  btn.style.msTransform =
  btn.style.webkitTransform =
  btn.style.transform = 'scale3d(' + val + ', ' + val + ', 1)';
}