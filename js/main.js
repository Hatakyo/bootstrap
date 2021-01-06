document.getElementById("chooseEnglish").onclick = () => {
    document.getElementById("changeLang").innerHTML = `<i class="fad fa-language"></i> english`
}
document.getElementById("chooseGermany").onclick = () => {
    document.getElementById("changeLang").innerHTML = `<i class="fad fa-language"></i> germany`
}

document.getElementById("chooseUSD").onclick = () => {
    document.getElementById("changeMoney").innerHTML = `<i class="fal fa-dollar-sign"></i> USD`
}
document.getElementById("chooseEUR").onclick = () => {
    document.getElementById("changeMoney").innerHTML = `<i class="fal fa-euro-sign"></i> EUR`
}

$('.slide-show').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    dotsSpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
// scrollMenu
let scroll = document.getElementById("scrollMenu");
let sticky = scroll.offsetTop;
let heightMenu = document.querySelector('.header-line').offsetHeight

function fixMenu() {
    if (window.pageYOffset >= sticky) {
        scroll.classList.add("fixed-menu")       
    } else {
        scroll.classList.remove("fixed-menu");
        
    }
}