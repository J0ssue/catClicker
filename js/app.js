// ***********View *********** //
let model = {
	setCurrentCat: function() {
		this.currentCat = this.cats[0];
	},
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
	]
};

// ************ Octopus ***************//
let octopus = {
	init: function() {
		model.setCurrentCat();
		listView.init();
		this.setDefaultCat();
		adminView.init();
	},
	setDefaultCat: function() {
		document.onload = function() {
			model.currentCat = model.cats[0];
		};
		catView.setDefaultCat();
	},
	setCurrentCat: function() {
		var getCats = model.cats;
		for (let i = 0; i < getCats.length; i++) {
			if (event.target.textContent === getCats[i].name) {
				model.currentCat = getCats[i];
				console.log(model.currentCat);
			}
		}
	},
	getCats: function() {
		return model.cats;
	},
	getCurrentCat: function() {
		return model.currentCat;
	},
	increaseCounter: function() {
		let currentCat = this.getCurrentCat();
		currentCat.clickCounter++;
	}
};


// *************  View ***************//
let listView = {
	init: function() {
		this.catList = document.getElementById('catList');

		this.render();
		catView.init();
		catView.render();
	},
	render: function() {
		var getCats = octopus.getCats();
		for (let i = 0; i < getCats.length; i++) {
			this.li = document.createElement('li');
			this.li.textContent = getCats[i].name;
			this.catList.appendChild(this.li);
			this.li.addEventListener('click', octopus.setCurrentCat);
		}
	}
};

let catView = {
	init: function() {
		this.currentCat = octopus.getCurrentCat();
		this.catName = document.querySelector('#name');
		this.clickCount = document.querySelector('#clickCount');
		this.img = document.querySelector('img');
		this.img = document.querySelector('img');

		// adds image clicker:
		this.addImgClickCounter();
	},
	render: function() {
		onclick = function() {
			var currentCat = octopus.getCurrentCat();
			let catName = document.querySelector('#name');	
			let clickCount = document.querySelector('#clickCount');
			let img = document.querySelector('#img');

			catName.textContent = currentCat.name;
			clickCount.textContent = currentCat.clickCounter;
			this.img.src = currentCat.src;
		}
	},
	setDefaultCat: function() {
		this.catName.textContent = this.currentCat.name;
		this.clickCount.textContent = this.currentCat.clickCounter;
		this.img.src = this.currentCat.src;
	},
	addImgClickCounter: function(img) {
		this.img.addEventListener('click', function() {
			octopus.increaseCounter();
		});
	},
};

let adminView = {
	init: function() {
		// displaying addming toggle on & off:
		const adminBtn = document.querySelector('#admin-btn');
		const admin = document.querySelector('#admin');
		this.displayAdmin(adminBtn, admin);

		// get input values
		const formName = admin.children[0].children[1];
		const btnS = admin.children[3].children[0];
		this.getFormValues(formName, btnS);
	},
	displayAdmin: function(btn, form) {
		btn.addEventListener('click', function() {
			if (form.style.display === 'none') {
			form.style.display = 'block';
			} else {
				form.style.display = 'none';
			}
		});
	},
	getFormValues: function(name, btnS) {
		btnS.addEventListener('click', function() {
			console.log(name.value)
			name.value = '';
		});
	}
};

octopus.init();