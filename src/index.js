import './style.css';

import $ from 'jquery'
import {gsap} from "gsap";

function intro() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#intro',
            start: "top 30%",
        }
    });

    tl.set(["#intro .animate-text", "#intro .animate-c-text", "#intro .animate-btn"], {y: "100%"})
    tl.to("#intro .animate-text", {y: 0, autoAlpha: 1, stagger: 0.15, ease: "power1.out"})
    tl.to("#intro .animate-c-text", {y: 0, autoAlpha: 1, stagger: 0.15, ease: "power1.out"}, "<=0.3")
    tl.to("#intro .animate-btn", {y: 0, autoAlpha: 1, stagger: 0.1, ease: "power1.out", duration: .6}, "-=0.3")
}

function section2() {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-2',
            start: "top 30%",
        }
    });

    tl.set(["#section-2 .animate-text"], {x: "-25"})
    tl.set(["#section-2 .animate-item"], {rotation: -90, x: -5, autoAlpha: 0})
    tl.to("#section-2 .animate-text", {x: 0, autoAlpha: 1, stagger: 0.1, ease: "power1.out"})
    tl.to("#section-2 .animate-item", {rotation: 0, x: 0, autoAlpha: 1, stagger: 0.05, ease: "power1.out"}, "<=0.3")
}

function section3() {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-3',
            start: "top 30%",
        }
    });

    tl.set(["#section-3 .animate-text"], {y: "100%", autoAlpha: 0})
    tl.to("#section-3 .animate-text", {y: 0, autoAlpha: 1, stagger: 0.1, ease: "power1.out"})
}


document.addEventListener('DOMContentLoaded', function () {
    intro()
    section2()
    section3()
});