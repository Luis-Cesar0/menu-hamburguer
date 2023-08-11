function clickmenu() {
    if (primmenu.style.display == 'block') {
        primmenu.style.display = 'none'
    } else {
        primmenu.style.display = 'block'
    }
}
function mutamanho() {
    if(window.innerWidth >= 768){
        primmenu.style.display= 'block'
    } else{
        primmenu.style.display= 'none'
    }
}