(function() {
	console.log("Hello World!");

	// Build THE FINAL COUNTDOWN!!!
	// https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/

	// set End date ISO 8601 format
	// new president inauguration Jan. 20 2021
	const deadline = '2021-01-20';

	// calculate remaining time
	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const seconds = Math.floor( (total/1000) % 60 );
		const minutes = Math.floor( (total/1000/60) % 60 );
		const hours = Math.floor( (total/(1000*60*60)) % 24 );
		const days = Math.floor( total/(1000*60*60*24));

		return {
			total,
			days,
			hours,
			minutes,
			seconds
		};
	}

	// return object data to console
	console.log("Minutes Remaining: " + getTimeRemaining(deadline).minutes );
	console.log("Hours Remaining: " + getTimeRemaining(deadline).hours );
	console.log("Days Remaining: " + getTimeRemaining(deadline).days );

	// output data to #clockdiv
	function initializeClock(id, endtime) {
		const clock = document.getElementById(id);

		// clock elements
		const d = clock.querySelector('.days');
		const hr = clock.querySelector('.hours');
		const min = clock.querySelector('.minutes');
		const sec = clock.querySelector('.seconds');

		function updateClock() {
			const t = getTimeRemaining(endtime);

			// build clock output
			// add leading zeros ('0' + n).slice(-2)
			d.innerHTML =  ('0' + t.days).slice(-2); 
			hr.innerHTML =  ('0' + t.hours).slice(-2);
			min.innerHTML =  ('0' + t.minutes).slice(-2);
			// sec.innerHTML =  t.seconds;

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}

		}

		updateClock(); // run function once at first to avoid delay
		var timeinterval = setInterval(updateClock,1000);
	}

	// run clock!
	initializeClock('clockdiv', deadline);


	// TODAYS DATE
	// https://www.freecodecamp.org/news/javascript-date-now-how-to-get-the-current-date-in-javascript/

	// display current date 
	const today = new Date();
	console.log("Today is: " + today.toDateString());
	const date = document.getElementById('date');
	const currentDate = date.querySelector('.current-date');
	currentDate.innerHTML = today.toDateString();

})();
