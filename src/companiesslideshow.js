var companyButtons = [document.getElementById('nvidia_logo'),
               document.getElementById('enflick_logo'),
               document.getElementById('venmo_logo'),
               document.getElementById('blackberry_logo'),
               document.getElementById('quantica_logo')];

var companyDescriptions = ['At NVIDIA I worked on the Shield Hub Android development team<br> where I helped design the launch version of the flagship Android TV NVIDIA Shield. <br>As well as other Shield devices.',
				   'At Enflick I helped make many bug fixes as well has major overhauls to the TextNow VOIP calling and texting app.<br>An example of a major feature implementation was the floating chat feature that I made from scratch (similar to Facebook\'s chatheads)',
				   'At Venmo I\'m currently working on the Android client side app that is used to make instant payments to friends.',
				   'At Blackberry I worked on the BBM VOIP and video chat application for the BB10 OS.',
				   'At Quantica I worked mainly on the client side of a high frequency trading automation application.'];


var companyButtonsToDescriptions = new Map();

for (i = 0 ; i < companyButtons.length ; i++) {
  companyButtonsToDescriptions.set(companyButtons[i], companyDescriptions[i]);

  companyButtons[i].addEventListener("mouseover", function(event) {
  	if (document.getElementById('company_description').innerHTML != companyButtonsToDescriptions.get(event.target)) {
		$("#company_description").fadeTo(250,0.30, function() {
			document.getElementById('company_description').innerHTML = companyButtonsToDescriptions.get(event.target);
		}).fadeTo(125,1);
	}
  }, false);
}