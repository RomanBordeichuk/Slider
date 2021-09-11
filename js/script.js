const cont = document.querySelector('.container');

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
arrowLeft.addEventListener('click', scrollL);
arrowRight.addEventListener('click', scrollR);

function scrollL(){
	cont.scrollLeft -= 100;
}
function scrollR(){
	cont.scrollLeft += 100;
}

let containerScroll = cont.scrollLeft;
console.log(containerScroll);