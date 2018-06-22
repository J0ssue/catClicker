var cat = document.querySelector('img');
var clicks = document.querySelector('#clicks');
clicks.textContent = 0;
var counter = 0;
cat.addEventListener('click', function() {
	counter += 1;
clicks.textContent = counter;
}, false);
