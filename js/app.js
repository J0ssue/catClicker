// Pattern - Object Literal Module
let cat = {
	cats: [
	{
		clickCounter: 0,
		name: 'Grumpy',
		src: 'src/catClicker.jpg'
	},
	{
		clickCounter: 0,
		name: 'Happy',
		src: 'src/chewie.jpg'
	},
	{
		clickCounter: 0,
		name: 'Cat', 
		src: 'src/chatty.jpeg'
	},
	{
		clickCounter: 0,
		name: 'Pedro', 
		src: 'src/climber.jpeg'
	},
	{
		clickCounter: 0,
		name: 'Frank', 
		src: 'src/funk.jpeg'
	},
	{
		clickCounter: 0,
		name: 'Gold', 
		src: 'src/gold.jpeg'
	},
	{
		clickCounter: 0,
		name: 'Sleepy', 
		src: 'src/sleepy.jpeg'
	},
	{
		clickCounter: 0,
		name: 'Sunny', 
		src: 'src/surprise.jpeg'
	}
	],
	init: function() {
		this.cacheDom();
		this.render();
		// this.addClick();
		// this.bindEvents();
	},
	cacheDom: function() {
		this.container = document.querySelector('#cat-container');
	},
	// bindEvents: function() {
	// },
	render: function() {
		for (let i = 0; i < this.cats.length; i++) {
			let newCat = document.createElement('div');
			this.domCats = `
											<h2 class="name">${this.cats[i].name}</h2>
											<h2 class="clickCount">You clicked on <span>${this.cats[i].name}</span> <span id="${this.cats[i].name}">${this.cats[i].clickCounter}</span> times</h2>	
											<img id="${this.cats[i].name}" class="d-block m-auto" src=${this.cats[i].src} alt="cat picture">
										  `
			newCat.innerHTML = this.domCats;
			this.container.appendChild(newCat);
		}
	},
};
cat.init();


const imgs = document.querySelectorAll('img');
function addClick() {
	for (let i = 0; i < imgs.length; i++) {
		imgs[i].addEventListener('click', function(e) {
			e.target.previousElementSibling.lastElementChild.textContent++;
			// for (let j = 0; j < cat.cats.length; j++) {
			// 	if (e.target.previousElementSibling.lastElementChild.id === cat.cats[j].name) {
			// 		cat.cats[j].clickCounter++;
			// 	}
			// }
		});
	}
}
addClick();