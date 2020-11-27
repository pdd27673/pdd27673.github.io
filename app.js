(function () {
	emailjs.init('user_nhb9nWttLxPGEUm7sAlkq');
})();

window.onload = function () {
	document
		.getElementById('contact-form')
		.addEventListener('submit', function (event) {
			var fromName = document.getElementById('name');
			var message = document.getElementById('message');
			var email = document.getElementById('email');
			var subject = document.getElementById('subject');

			console.log(fromName);
			event.preventDefault();

			emailjs
				.send('service_wl21tib', 'template_vct1am8', {
					from_name: `${fromName.value}`,
					message: `${message.value}`,
					email: `${email.value}`,
					subject: `${subject.value}`,
				})
				.then(
					function () {
						alert('Success');
					},
					function (error) {
						alert('error...');
					}
				);
		});
};
