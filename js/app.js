// ***********View *********** //
let model = {
	setCurrentCat: function() {
		this.currentCat = this.cats[0];
	},
	setCurrentLi: '',
	cats: [
	{
		clickCounter: 0,
		name: 'grumpy',
		src: 'src/catClicker.jpg',
		id: '0'
	},
	{
		clickCounter: 0,
		name: 'happy',
		src: 'src/chewie.jpg',
		id: '1'
	},
	{
		clickCounter: 0,
		name: 'cat', 
		src: 'src/chatty.jpeg',
		id: '2'
	},
	{
		clickCounter: 0,
		name: 'pedro', 
		src: 'src/climber.jpeg',
		id: '3'
	},
	{
		clickCounter: 0,
		name: 'frank', 
		src: 'src/funk.jpeg',
		id: '4'
	},
	{
		clickCounter: 0,
		name: 'gold', 
		src: 'src/gold.jpeg',
		id: '5'
	},
	{
		clickCounter: 0,
		name: 'sleepy', 
		src: 'src/sleepy.jpeg',
		id: '6'
	},
	{
		clickCounter: 0,
		name: 'sunny', 
		src: 'src/surprise.jpeg',
		id: '7'
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
		displaySrc.init();
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
				// model.setCurrentLi = event.target;
				model.setCurrentLi = event.target;
				console.log(event.target);
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
	},
	displaySrcs: function(src) {
		let cats = this.getCats();		
		for (let i = 0; i < cats.length; i++) {
			let el = document.createElement('li');
			el.innerHTML = cats[i].src;
			src.appendChild(el);
		}
	}
};


// *************  View ***************//

// ************** list
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
			this.li.id = i;
			this.li.textContent = getCats[i].name;
			this.catList.appendChild(this.li);
			this.li.addEventListener('click', octopus.setCurrentCat);
			this.li.addEventListener('click', octopus.setCurrentLi);
		}
	}
};

// ************** Cat display
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

// ******************* Admin display
let adminView = {
	init: function() {
		// displaying addming toggle on & off:
		const adminBtn = document.querySelector('#admin-btn');
		const admin = document.querySelector('#admin');
		this.displayAdmin(adminBtn, admin);

		// save Button:
		const formName = admin.children[0].children[1];
		const formImg = admin.children[1].children[1];
		const formClicks = document.querySelector('#form-clicks');;
		const btnS = admin.children[3].children[0];
		const btnC = admin.children[3].children[1];
		this.saveBtn(formName, formImg, formClicks, btnS);
		this.cancelBtn(btnC);
	},
	displayAdmin: function(btn, form) {
		btn.addEventListener('click', function() {
			if (form.style.display === 'block') {
			form.style.display = 'none';
			} else {
				form.style.display = 'block';
			}
		});
	},
	saveBtn: function(name, img, clicks, btn) {
		const ul = document.querySelector('#catList');
		let currentCat = octopus.getCurrentCat();
		let cats = octopus.getCats();

		btn.addEventListener('click', function() {
			for (let i = 0; i < ul.childNodes.length; i++) {
				if (ul.children[i].id == currentCat.id) {
					// cats[i].name = name.value;	
					currentCat.name = name.value;
					currentCat.clickCounter = clicks.value;
					currentCat.src = img.value;
					model.setCurrentLi.textContent = name.value;

					name.value = ""; 
					clicks.value = ""; 
					img.value = ""; 
				}
			}
		});
	},
	cancelBtn: function(btn) {
		btn.addEventListener('click', function() {
			let clicks = document.querySelector('#form-clicks');
			let img = document.querySelector('#form-img');
			let name = document.querySelector('#form-name');
			clicks.value = '';
			img.value = '';
			name.value = '';
		});
	}
};

let displaySrc = {
	init: function() {
		this.displaySrcs();
		this.addToInput();
	},
	displaySrcs: function() {
		let srcsList = document.querySelector('#urls');
		octopus.displaySrcs(srcsList);
	},
	addToInput: function() {
		let srcsList = document.querySelector('#urls');
		let srcInput = document.querySelector('#form-img');
		for (let i = 0; i < srcsList.children.length; i++) {
			srcsList.children[i].addEventListener('click', function(e) {
				srcInput.value = e.target.textContent;
				console.log(e.target);
			});
		}
	}
};

octopus.init();