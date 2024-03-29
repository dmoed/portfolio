import './style.css';

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
    });

    gsap.utils.toArray(".layer").forEach(layer => {
        const depth = layer.dataset.depth;
        const movement = -(layer.offsetHeight * depth)
        tl2.to(layer, {y: movement, ease: "none"}, 0)
    });
}

function section2() {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section-2',
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
        }
    });

    tl.set(["#section-3 .animate-text"], {y: "100%", autoAlpha: 0})
    tl.to("#section-3 .animate-text", {y: 0, autoAlpha: 1, stagger: 0.1, ease: "power2.out", duration: .6})
}

document.addEventListener('DOMContentLoaded', function () {

    gsap.to("#default-loader", {y: "-100%", ease: "power1.out"})




    intro()
    section2()
    section3()
});