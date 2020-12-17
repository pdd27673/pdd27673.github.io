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
						fromName.value = ' ';
						message.value = ' ';
						email.value = ' ';
						subject.value = ' ';
					},
					function (error) {
						alert('error...');
                        console.log(error);
					}
				);
		});

	console.log('Its working');

	let theme = localStorage.getItem('theme');
	let themeStyle = document.getElementById('theme-style');
	let themeDots = document.getElementsByClassName('theme-dot');

	if (theme == null) {
		setTheme('light');
	} else {
		setTheme(theme);
	}

	for (var i = 0; themeDots.length > i; i++) {
		themeDots[i].addEventListener('click', function () {
			let mode = this.dataset.mode;
			console.log('Option clicked:', mode);
			setTheme(mode);
		});
	}

	function setTheme(mode) {
		if (mode == 'light') {
			themeStyle.href = 'styles.css';
		}

		if (mode == 'blue') {
			document.getElementById('theme-style').href = 'blue.css';
		}

		if (mode == 'green') {
			document.getElementById('theme-style').href = 'green.css';
		}

		if (mode == 'purple') {
			document.getElementById('theme-style').href = 'purple.css';
		}

		localStorage.setItem('theme', mode);
	}
};
