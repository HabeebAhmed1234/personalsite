var projectButtons = [document.getElementById('throwned_icon'),
               document.getElementById('music_player_icon'),
               document.getElementById('wakey_wakey_icon'),
               document.getElementById('peppit_icon'),
               document.getElementById('uwhub_icon'),
               document.getElementById('pop_icon')];

var screenshots = ['img/screenshots/throwned_1.png',
				   'img/screenshots/musicplayer_1.png',
				   'img/screenshots/wakeywakey_1.png',
				   'img/screenshots/peppit_1.png',
				   'img/screenshots/uwhub_1.png',
				   'img/screenshots/pop_1.png'];

var descriptions = ['Throwned is an app that lets users determine the quality of their content relative to others through participating in competitions that are judged by other users.',
				   'Record Player is a sleek looking music player that has a few features that are not very common in other music player apps',
				   'WakeyWakey is an alarm clock app that implements a few unique features not commonly seen in other alarm clock apps',
				   'Peppit is a virtual secretary that enables users to block all incoming calls when it is active. All callers are notified of the user\'s next available time',
				   'UWHub is an app that provides a sleek interface that lets users make use of the University of Waterloo open API',
				   'Pop is a game made using Andengine and box2D physics. <br>The objective of the game is to pop all the bubbles before they get to the bottom of the screen'];


var projectButtonsToScreenShots = new Map();
var projectButtonsToDescriptions = new Map();

for (i = 0 ; i < projectButtons.length ; i++) {
  projectButtonsToScreenShots.set(projectButtons[i], screenshots[i]);
  projectButtonsToDescriptions.set(projectButtons[i], descriptions[i]);

  projectButtons[i].addEventListener("mouseover", function(event) {
  	if (document.getElementById('screenshot').getAttribute('src') != projectButtonsToScreenShots.get(event.target)) {
		$("#screenshot").fadeTo(250, 0.30, function() {
		  $("#screenshot").attr('src', projectButtonsToScreenShots.get(event.target));
		}).fadeTo(125, 1);

		$("#description").fadeTo(250,0.30, function() {
			document.getElementById('description').innerHTML = projectButtonsToDescriptions.get(event.target);
		}).fadeTo(125,1);
	}
  }, false);
}