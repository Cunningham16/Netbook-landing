const header = document.querySelector("header")
const mainPage = document.querySelector(".main-page")

let mainPagePos = mainPage.getBoundingClientRect().bottom + window.pageYOffset

function bgHeader(){
	let y = window.pageYOffset

	if(y >= mainPagePos){
		header.style.backgroundColor = "#EBF4FF"
	}else{
		header.style.backgroundColor = "transparent"
	}
}
bgHeader()

window.onscroll = () => {
	bgHeader()
}

const burgerButton = document.querySelector(".hamburger-button")
const burgerSidebar = document.querySelector("nav")
const body = document.querySelector("body")
let isOpenedSidebar = false;


burgerButton.onclick = () => {
	if(isOpenedSidebar === false){
		isOpenedSidebar = true;
		burgerSidebar.style.transform = "translate(0, 0)"
		body.style.overflowY = "hidden"
	}else if(isOpenedSidebar === true){
		isOpenedSidebar = false;
		burgerSidebar.style.transform = "translate(100%, 0)"
		body.style.overflowY = "auto"
	}
}

const popularArr = [2, 1, 4, 3]
const activeArr = [1, 2, 3, 4]
const newestArr = [4, 3, 2, 1]
const avatars = document.querySelectorAll(".avatar")
const sortButtons = document.querySelectorAll(".sort-button")
let arraySortBtns = []

for(let elem of sortButtons){
	arraySortBtns.push(elem)
}

function sortAvatars(array){
	for(let elem of avatars){
		elem.style.transform = "translate(0, 100%)"
		elem.style.opacity = "0"
		elem.style.transition = "0.3s"
	}

	setTimeout(() => {
		avatars[0].style.order = array[0]
		avatars[1].style.order = array[1]
		avatars[2].style.order = array[2]
		avatars[3].style.order = array[3]
	}, 300)

	setTimeout(() => {
		for(let elem of avatars){
		elem.style.transform = "translate(0, 0)"
		elem.style.opacity = "1"
		elem.style.transition = "0.3s"
	}
	}, 600);
}

function changeActiveButton(index){
	for(let elem of arraySortBtns){
		if(elem.classList.contains("sort-button_active")){
			elem.classList.remove("sort-button_active")
		}
	}

	arraySortBtns[index].classList.add("sort-button_active")
}

for(let elem of arraySortBtns){
	elem.onclick = () => {
		if(arraySortBtns.indexOf(elem) === 0){
			sortAvatars(newestArr)
			changeActiveButton(0)
		}else if(arraySortBtns.indexOf(elem) === 1){
			sortAvatars(popularArr)
			changeActiveButton(1)
		}else if(arraySortBtns.indexOf(elem) === 2){
			sortAvatars(activeArr)
			changeActiveButton(2)
		}
	}
}