/*Toggle nav links color */
let links = document.querySelectorAll('nav ul li a');
links[0].classList.add('activ');
links.forEach(function(link) {
	link.addEventListener('click',turnOn); 
})

function turnOn(e){
	links.forEach(function(link){
		link.classList.remove('activ');
	})
	e.target.classList.add('activ');
}

/*Menu small screen*/
var menu = document.getElementById('menu_btn').addEventListener('click',turnMenu);
var ul = document.getElementById('ul_nav');
var nav = document.getElementById('nav');
var cnt = 0;
/*Turn off nav when click on nav links on mobile screen*/
ul.addEventListener('click',function() {
	if(window.matchMedia("(max-width: 500px)").matches){
		ul.style.display = 'none';
	}
});
/*Toggle sandwich menu*/
function turnMenu(){
	if(cnt === 1){
		ul.style.display = 'none';
		cnt --;
	}else{
		ul.style.display = 'flex';
		nav.style.display = 'block';
		cnt ++;
	}
}

/* Main Mask function showdown text*/
let mask1 = document.querySelector('#maskholder1');
let mask1a = document.querySelector('#maskholder1a');
let mask2 = document.querySelector('#maskholder2');
let mask2a = document.querySelector('#maskholder2a');
let mask2b = document.querySelector('#maskholder2b');
let sq1 = document.querySelector('#leftsq');
let sq2 = document.querySelector('#rightsq');

var loop;
var loop1;
mask1.style.display = 'none';
mask2.style.display = 'none';
mask2a.style.display = 'none';
mask2b.style.display = 'none';
sq1.style.display = 'none';
sq2.style.display = 'none';
let loop2 = setTimeout(showText,500);
function showText(){
	mask1.style.display = 'block';
	mask1.classList.add('up-position');
}

/* Main mask scroll text*/
let text = makeText();
function makeText(){
	let text = 'Web Design Studio thats make you happy';
	let textAr = text.split('');
	return textAr;
}
function start(){
	if(text.length > 0){
		mask1a.innerHTML += text.shift();
		loop = setTimeout(start,50);
	}else{
		text = makeText();          //reset text
	}
}
loop1 = setTimeout(start,1500);

/* Slider images*/
let bg = document.querySelector('#mainview');
let prev = document.querySelector('.leftbtn');
let next = document.querySelector('.rightbtn');
let img0 = 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("images/komp.jpeg")';
let img1 = 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("images/mac.jpeg")';
let images = [img0,img1];
bg.style.backgroundImage = images[0];
let current = 0;
next.addEventListener('click',showNext);
prev.addEventListener('click',showPrev);

function showNext () {
		if(current === images.length - 1){
			current = -1;
		}
		bg.style.backgroundImage = images[current + 1];
		current ++;
		
		if(current === 0){m2()}else{m1()};
}
function showPrev(){
		if(current === 0){
			current = images.length;
		}
		bg.style.backgroundImage = images[current - 1];
		current --;
		clearInterval(auto);
		if(current === 0){m2()}else{m1()};
}

function m1 () {
	mask1.style.display = 'none';	   //mask1 clearing
	mask1a.innerHTML = '';    //mask1a clearing
clearTimeout(loop); clearTimeout(loop1);

setTimeout(showText1,500);	
function showText1(){
	mask2.style.display = 'block';
	mask2.classList.add('down-position');
	let sleepblocks = setTimeout(showBlocks,100);
	function showBlocks(){
		sq1.style.display = 'block';
		sq2.style.display = 'block';
		sq1.classList.add('ltr');
		sq2.classList.add('rtl');
	}
	mask2a.style.display = 'block';
	mask2a.classList.add('up-position1');
	mask2b.style.display = 'block';
	mask2b.classList.add('up-position2');
}
}

function m2 () {
mask1.classList.remove('up-position');
mask1a.innerHTML = '';
mask1.style.display = 'none';
mask2.style.display = 'none';
mask2a.style.display = 'none';
mask2b.style.display = 'none';
sq1.style.display = 'none';
sq2.style.display = 'none';
setTimeout(showText,500);
function showText(){
	mask1.style.display = 'block';
	mask1.classList.add('up-position');
}

/* Main mask scroll text*/
let text = makeText();
function makeText(){
	let text = 'Web Design Studio thats make you happy';
	let textAr = text.split('');
	return textAr;
}
function start(){
	if(text.length > 0){
		mask1a.innerHTML += text.shift();
		loop = setTimeout(start,50);
	}else{
		text = makeText();          //reset text
	}
}
loop1 = setTimeout(start,1500); 
}

/* Auto Slider*/
let auto = setInterval(showNext,7000);

/*Call owl carousel*/
$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel();
 
});

/*Gallery*/
const currentImg = document.querySelector('#current');
const imgs = document.querySelectorAll('#imgs img');
const gallery = document.querySelector('#gallery');
const main = document.querySelector('#main-img-wrapp');
const close = document.querySelectorAll('.close')[0];
close.addEventListener('click',function(){
	main.style.display = 'none';
	gallery.style.display = 'block';
})
imgs[0].style.opacity = 0.6; 

imgs.forEach(function(img){
	img.addEventListener('click',imageClick);
});

function imageClick (e) {
	main.style.display = 'flex';
	main.scrollIntoView(true);
	gallery.style.display = 'none';
	//3.reset opacity-ja
	imgs.forEach(img => (img.style.opacity = 1));
	//1.promena src atributa tekuce slike u src event slike
	currentImg.src = e.target.src;
	//4.fade-in animation
	currentImg.classList.add('fade-in');
	//5.reset animacije
	setTimeout(() => currentImg.classList.remove('fade-in'),400);
	//2.promena opacity event slike 
	e.target.style.opacity = 0.6;
}