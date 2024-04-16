// Loading Start
// hide-preloaded
let preloder = document.querySelector('.preloder');
let preloderC = document.querySelector('.preloder-container');
document.querySelector('nav').style.display = 'none' ; 
window.addEventListener('load', _ =>{
//   preloder.classList.add('hide-preloaded');
  preloderC.classList.add('hide-preloaded');
  document.querySelector('nav').style.display = 'block' ; 
});

// Fixed nav bar start
const nav = document.querySelector('nav');

const header = document.querySelector('.header');
window.addEventListener('scroll', _=> {
    nav.classList.toggle('fixed-header' , nav.getBoundingClientRect().height <= scrollY);
});
// Fixed nav bar end

// Dark-light mode start
const btn = document.querySelector(".btn-toggle");
// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-mode");
} else if (currentTheme == "light") {
    document.body.classList.toggle("light-mode");
}

btn.addEventListener("click", _=> {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-mode");
        var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
    } else {
        document.body.classList.toggle("dark-mode");
        var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    }
    localStorage.setItem("theme", theme);
    if (theme === "dark") { 
        btn.innerHTML = `<i class="fa-regular fa-sun"></i>` ; 
        nav.style.background = `#ffffff` ;  
    } else{ 
        btn.innerHTML = `<i class="fa-solid fa-moon"></i>` ; 
        nav.style.background = `#353535` ;  
  }
}) ; 
// Dark-light mode end

/* ========== popup video start =========== */
    let videoPlayer = document.getElementById(`video-player`) ; 
    let myVideo = document.getElementById('my-video') ;
    let  closeIcon = document.querySelector(`.fa-circle-xmark`) ; 

    closeIcon.addEventListener('click' , _=> { 
        myVideo.pause();
        myVideo.removeAttribute('autoplay');
        videoPlayer.style.display = "none" ;
    }) ; 

    function palyVideo (path) { 
        myVideo.src = path ;
        myVideo.setAttribute('autoplay', true);
        videoPlayer.style.display = "block" ; 
    }


/* ========== popup video end  ===========*/

// open-clos nav 

let barBtn = document.querySelector(`.bar-icon`) ; 
let navLinks = document.querySelector(`.nav-links`) ; 
barBtn.addEventListener('click' , _=> { 
    navLinks.classList.toggle('show-nav-links');
    if(navLinks.classList.contains('show-nav-links')){ 
        barBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>` ; 
    }else { 
        barBtn.innerHTML = `<i class="fa-solid fa-bars"></i>` ; 
    }
}) ; 


window.addEventListener('scroll', _=> {
    navLinks.classList.remove(`show-nav-links`) ; 
    barBtn.innerHTML = `<i class="fa-solid fa-bars"></i>` ; 
}) ; 


// Year Dynamic Loading
document.querySelector(`.date-of-year`).innerHTML = new Date().getFullYear();

