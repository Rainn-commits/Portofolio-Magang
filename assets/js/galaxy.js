/* =========================================================
   Galaxy Theme — interactions
   Scroll-reveal + animated stat counters
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

	/* ---------- Scroll reveal ---------- */
	var revealEls = document.querySelectorAll('.reveal');

	if ('IntersectionObserver' in window) {
		var revealObserver = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					revealObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0, rootMargin: '0px 0px -10% 0px' });

		revealEls.forEach(function (el) { revealObserver.observe(el); });
	} else {
		// Fallback: no IntersectionObserver support, just show everything
		revealEls.forEach(function (el) { el.classList.add('is-visible'); });
	}

	/* ---------- Animated stat counters ---------- */
	var counters = document.querySelectorAll('[data-count]');

	function animateCounter(el) {
		var target = parseInt(el.getAttribute('data-count'), 10) || 0;
		var duration = 1200;
		var startTime = null;

		function step(timestamp) {
			if (!startTime) startTime = timestamp;
			var progress = Math.min((timestamp - startTime) / duration, 1);
			var value = Math.floor(progress * target);
			el.textContent = value + (el.getAttribute('data-suffix') || '');
			if (progress < 1) {
				window.requestAnimationFrame(step);
			} else {
				el.textContent = target + (el.getAttribute('data-suffix') || '');
			}
		}
		window.requestAnimationFrame(step);
	}

	if ('IntersectionObserver' in window && counters.length) {
		var counterObserver = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					animateCounter(entry.target);
					counterObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.5 });

		counters.forEach(function (el) { counterObserver.observe(el); });
	} else {
		counters.forEach(function (el) {
			el.textContent = (el.getAttribute('data-count') || '0') + (el.getAttribute('data-suffix') || '');
		});
	}

});
