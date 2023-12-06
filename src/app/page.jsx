"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import MainSection from '@/components/MainSection';
import './globals.css'
import { TweenMax } from 'gsap/gsap-core';
import { TimelineMax } from 'gsap/gsap-core';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    let timeline = gsap.timeline({});
    let ctx = gsap.context(() => { });
    let initialWindowWidth = 0;

    const linksPreventDefault = () => {
        const links = Array.from(document.querySelectorAll('a[href="#"]'));
        links.forEach((el) => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
            });
        });
    };

    const onResize = () => {
        if (!initialWindowWidth) return;

        const newWindowWidth = Math.abs(initialWindowWidth - window.innerWidth);
        if (newWindowWidth < 100) return;
        location.reload();
    };

    const initAnimation = () => {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        const baseFontSizeString = getComputedStyle(document.querySelector('html')).fontSize;
        const baseFontSize = +baseFontSizeString.substring(0, baseFontSizeString.length - 2);
        let vw = windowWidth / 100;
        let vh = windowHeight / 100;
        let vhFull = window.outerHeight / 100;
        // let vwRestricted = windowWidth / 100;

        // if (window.outerWidth > 1950) {
        //     vwRestricted = 1920 / 100;
        // }

        let scrollTimelineEnd = 'top -1000%';

        if (navigator.userAgent.match(/firefox|fxios/i)) {
            scrollTimelineEnd = 'top -150%';
        }

        if (window.outerWidth < 850) {
            scrollTimelineEnd = 'top -1000px';
        }

        let scrollTimelineTrigger = `.animation-block`;

        ctx = gsap.context(() => {

            if (windowWidth > 850) {
                gsap.from(".main", { duration: 2, opacity: 0 })
                gsap.from(".main .lines", { duration: 3, opacity: 0 })
                gsap.from(".main .title", { duration: 3, left: "-300%" })
                gsap.from(".main .subtitle", { duration: 3, delay: .5, left: "-300%" })
                gsap.from(".main .adjectives", { duration: 3, delay: .9, left: "-300%" })
                gsap.from(".main .description", { duration: 3, delay: .7, left: "-300%" })
                gsap.from(".main .arrow", { duration: 3, delay: 1, opacity: 0 })
                gsap.from(".main .picture", { duration: 3, opacity: 0 })
                gsap.from(".main .down-blur", { duration: 3, top: "0%" })
                gsap.from(".main .up-blur", { duration: 3, top: "0%" })
                gsap.to(".main .arrow", { duration: 1.5, y: -15, repeat: -1, yoyo: true, ease: "sine.inOut" })

                gsap.to(".aboutBg .firstImage", { duration: 1.7, x: -23, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".aboutBg .secondImage", { duration: 2, x: -12, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".aboutBg .thirdImage", { duration: 1.3, x: 8, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".aboutBg .fourthImage", { duration: 1.5, x: 14, repeat: -1, yoyo: true, ease: "sine.inOut" })

                var tween = new TimelineMax()
                    .add(TweenMax.from('.map', 1, { autoAlpha: 0.8, scale: .97, repeat: -1, yoyo: true, repeatDelay: .3, ease: "sine.inOut" }), "-=0.3")

                gsap.to(".parkPage .firstImage", { duration: 2, x: -13, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".parkPage .secondImage", { duration: 1.1, x: -10, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".parkPage .thirdImage", { duration: 1.9, x: 8, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".parkPage .fourthImage", { duration: 1.5, x: -9, repeat: -1, yoyo: true, ease: "sine.inOut" })

                gsap.to(".streetPage .firstImage", { duration: 2, x: -19, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".streetPage .secondImage", { duration: 1.1, x: -12, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".streetPage .thirdImage", { duration: 1.9, x: 21, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".streetPage .fourthImage", { duration: 1.6, x: -13, repeat: -1, yoyo: true, ease: "sine.inOut" })

                gsap.to(".townParkPage .firstImage", { duration: 1.5, x: 10, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".townParkPage .secondImage", { duration: 1.8, x: -12, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".townParkPage .thirdImage", { duration: 1.1, x: -15, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".townParkPage .fourthImage", { duration: 1.4, x: -13, repeat: -1, yoyo: true, ease: "sine.inOut" })
            } else {
                gsap.from(".main", { duration: 2, opacity: 0 })
                gsap.from(".main .lines", { duration: 3, opacity: 0 })
                gsap.from(".main .title", { duration: 3, left: "-300%" })
                gsap.from(".main .subtitle", { duration: 3, delay: .5, left: "-300%" })
                gsap.from(".main .adjectives", { duration: 3, delay: .9, left: "-300%" })
                gsap.from(".main .description", { duration: 3, delay: .7, left: "-300%" })
                gsap.from(".main .arrow", { duration: 3, delay: 1, opacity: 0 })
                gsap.from(".main .picture", { duration: 3, opacity: 0 })
                gsap.from(".main .down-blur", { duration: 3, top: "0%" })
                gsap.from(".main .up-blur", { duration: 3, top: "0%" })
                gsap.to(".main .arrow", { duration: 1.5, y: -15, repeat: -1, yoyo: true, ease: "sine.inOut" })

                gsap.to(".aboutBg .firstImage", { duration: 1.7, x: -23, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".aboutBg .secondImage", { duration: 2, x: -12, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".aboutBg .thirdImage", { duration: 1.3, x: 8, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".aboutBg .fourthImage", { duration: 1.5, x: 14, repeat: -1, yoyo: true, ease: "sine.inOut" })

                var tween = new TimelineMax()
                    .add(TweenMax.from('.map', 1, { autoAlpha: 0.8, scale: .97, repeat: -1, yoyo: true, repeatDelay: .3, ease: "sine.inOut" }), "-=0.3")

                gsap.to(".parkPage .firstImage", { duration: 2, x: -8, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".parkPage .thirdImage", { duration: 1.9, x: 8, repeat: -1, yoyo: true, ease: "sine.inOut" })

                gsap.to(".streetPage .thirdImage", { duration: 3, x: 8, repeat: -1, yoyo: true, ease: "sine.inOut" })

                gsap.to(".townParkPage .firstImage", { duration: 1.5, x: 10, repeat: -1, yoyo: true, ease: "sine.inOut" })
                gsap.to(".townParkPage .thirdImage", { duration: 1.1, x: -15, repeat: -1, yoyo: true, ease: "sine.inOut" })
            }
        });
    };

    useEffect(() => {
        linksPreventDefault();
        initAnimation();
        initialWindowWidth = window.innerWidth;

        window.addEventListener('resize', onResize);

        return () => {
            ctx.revert();
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div className={`relative z-[1000] w-full min-h-[100dvh] m-0 p-0 overflow-hidden bg-black`}>
            <div className={`animation-block m-0 p-0 overflow-hidden`}>
                <MainSection />
            </div>
        </div>
    )
}