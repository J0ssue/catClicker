var cat = document.querySelector('#img');
var clicks = document.querySelector('#clicks');
clicks.textContent = 0;
var counter = 0;
cat.addEventListener('click', function() {
	counter += 1;
clicks.textContent = counter;
alert('Meow!!!');
}, false);

var cat2 = document.querySelector('#img2');
var clicks2 = document.querySelector('#clicks2');
clicks2.textContent = 0;
var counter2 = 0;
cat2.addEventListener('click', function() {
	counter2 += 1;
	clicks2.textContent = counter2;
	alert('Meow!!')
});




// names the cats
const catNames = function() {
	// initializes each cat
	this.init = function() {
		this.catName(this.cats[0].name, this.cats[0].id);
		this.catName(this.cats[0].name, this.cats[0].id);
		this.catName(this.cats[1].name, this.cats[1].id);
		this.catName(this.cats[1].name, this.cats[1].id);
	}
	// stores cats names and id references
	this.cats = 
	[
		{
			name: 'Grumpy',
			id: '#cat1'
		},
		{
			name: 'Happy',
			id: '#cat2'
		}
	];
	// names each cat function
	this.catName = function(name, catId) {
		let nameTag = document.querySelector(catId);
		nameTag.childNodes[1].textContent = name;
		nameTag.childNodes[3].childNodes[1].textContent = name;
	};
	this.init();
}
catNames();
