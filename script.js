const intro = document.getElementById("intro-vid");
const triggerElement = document.getElementById("lner-title");
const video = intro.querySelector("video");
const introText = intro.querySelector("h1");

//Section 1
const section1 = document.getElementById("section_1");

//ScrollMagic
const controller = new ScrollMagic.Controller();

//video animation
const scene = new ScrollMagic.Scene({
    duration: 8500,
    triggerElement: '#intro',
    triggerHook: 0
})

.addIndicators()
.setPin(intro)
.addTo(controller);



let acceleration = 0.4;
let scrollpos = 0;
let delay = 0;

scene.on('update', e =>{
    if(e.scrollPos >= e.startPos){
        scrollpos = (e.scrollPos-e.startPos) / 1000;
        console.log(e);
    }
    
})

    setInterval(() => {
        delay += (scrollpos - delay) * acceleration;
        // console.log(scrollpos , delay);

        video.currentTime = delay;
    }, 100)


// GSAP

gsap.registerPlugin(ScrollTrigger);

gsap.from(".lner-title", {

    opacity: 0,
    x: -100,
    duration: 0.5,
    markers: true,
    delay: 0.2,
   
});

gsap.from(".carriage-intro", {
    
    opacity: 0,
    x: -100,
    duration: 0.5,
    markers: true,
    delay: 0.2,
    scrollTrigger: {
        trigger: ".intro",
        start: 50
    }
});

gsap.from("#creator-transition", {
    
    
    opacity: 0,
    x: -100,
    duration: 0.5,
    markers: true,
    delay: 0.2,
    scrollTrigger: {
        trigger: "#creator-transition",
        start: 50
    }
});

gsap.from("#creator-transition-2", {
    trigger: "#creator-transition-2",
    opacity: 0,
    x: 100,
    duration: 0.7,
    markers: true,
    scrollTrigger: {
        trigger: "#creator-transition-2",
        start: 50
    }
    
});

var storyMode = document.getElementById("story");
var threeDMode = document.getElementById("3D-toggle");
var ARMode = document.getElementById("AR-toggle");

function modeSwitch(){
    console.log("running");
    var storyElements = [];
        storyElements = document.querySelectorAll(".story");
    if(storyMode.checked){
        
        storyElements.forEach(element => element.style.display = "flex");
        document.getElementById("section_1").style.display = "flex";
        document.getElementById("unity-canvas").style.display = "none";
        document.getElementById("ar").style.display = "none";
    } else if(threeDMode.checked){
        storyElements.forEach(element => element.style.display = "none");
        document.getElementById("unity-canvas").style.display = "block";
        document.getElementById("ar").style.display = "none";

    } else if(ARMode.checked){
        storyElements.forEach(element => element.style.display = "none");
        document.getElementById("unity-canvas").style.display = "none";
        document.getElementById("ar").style.display = "block";

    }

}

document.addEventListener("click", e => {
    console.log(e.target.tagName);
    modeSwitch()
});


window.onload = modeSwitch();

