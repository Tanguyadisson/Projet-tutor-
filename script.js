let movekayak = document.querySelector(".movekayak");
let moveBy = 15;

window.addEventListener('load', () => {
    movekayak.style.position = 'absolute' ;
    movekayak.style.left = 0;
    movekayak.style.top = 0;
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft' :
            movekayak.style.left = parseInt(movekayak.style.left) - moveBy + 'px' ;
            break;
        case 'ArrowRight' :
            movekayak.style.left = parseInt(movekayak.style.left) + moveBy + 'px' ;
            break;
        case 'ArrowUp' :
            movekayak.style.top = parseInt(movekayak.style.top) - moveBy + 'px' ;
            break;
        case 'ArrowDown' :
            movekayak.style.top = parseInt(movekayak.style.top) + moveBy + 'px' ;
            break;
    }
});
console.log("testjs")