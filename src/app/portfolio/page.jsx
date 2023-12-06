"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';


gsap.registerPlugin(ScrollTrigger);

const Portfilo = () => {
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

      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scrollTimelineTrigger,
          start: 'top 0%',
          end: scrollTimelineEnd,
          scrub: 1,
          pin: scrollTimelineTrigger,

        }
      });

      if (windowWidth > 850) {
        gsap.to("html", { duration: 0, delay: 0, overflowY: "hidden" })
        gsap.to(".animation-block", { duration: 3, opacity: 1 })
        gsap.to(".left-line", { duration: 2, delay: 2, opacity: 0, x: -300 })
        gsap.to(".right-line", { duration: 2, delay: 2, opacity: 0, x: 300 })
        gsap.to(".logo", { duration: 1.4, delay: 1.7, opacity: 0 })
        gsap.to(".animation-block", { duration: 2, delay: 2, opacity: 1 })

        gsap.to(".ksunnwy", { duration: 2, delay: 1.5, x: -450 })
        gsap.to(".samael", { duration: 2.7, delay: 1.5, x: 450 })
        gsap.to(".circles", { duration: 1.7, delay: 2, opacity: 1 })
        gsap.to(".left-circle", { duration: 2, delay: 3, x: -450 })
        gsap.to(".right-circle", { duration: 2, delay: 3, x: 450 })

        gsap.to(".ksunnwy", { duration: 2, delay: 3.9, opacity: 1, y: -200 })
        gsap.to(".samael", { duration: 2, delay: 3.9, opacity: 1, y: -200 })
        gsap.to(".work", { duration: 2, delay: 3.9, opacity: 1 })
      } else {

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
    <div className='relative bg-black h-[100vh] flex items-center justify-center overflow-hidden '>

      <div className="animation-block opacity-0 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-evenly w-full width-restriction">
          <div className='flex items-center justify-center w-[31.82rem] h-[.2rem] md:w-[] md:h-[] left-line'>
            <Image src={'/pages/portfolio/line.svg'} alt='|' width={360} height={1} />
          </div>
          <div className='flex items-center justify-center w-[44.52rem] h-[32rem] md:w-[] md:h-[] mx-[16.8rem] td:mx-[6rem] md:mx-[] logo'>
            <Image src={'/logo.svg'} alt='|' width={520} height={323} />
          </div>
          <div className='flex items-center justify-center w-[31.82rem] h-[.2rem] md:w-[] md:h-[] right-line'>
            <Image src={'/pages/portfolio/line.svg'} alt='|' width={360} height={1} />
          </div>
        </div>
      </div>

      <div className="opacity-0 circles absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center">
          <div className='flex flex-col items-center justify-center pr-[2.225rem] w-[20rem] h-[19.68rem] md:w-[] md:h-[] left-circle'>
            <Image src={'/pages/portfolio/ellipse.svg'} alt='|' width={360} height={1} />
          </div>
          <div className='flex flex-col items-center justify-center pl-[2.225rem] w-[20rem] h-[19.68rem] md:w-[] md:h-[] right-circle'>
            <Image src={'/pages/portfolio/ellipse.svg'} alt='|' width={360} height={1} />
          </div>
        </div>
      </div>

      <div className=" text absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center">
          <div className='flex flex-col items-center justify-center pr-[2.225rem] w-[20rem] h-[19.68rem] md:w-[] md:h-[] opacity-0 ksunnwy'>
            <span className='text-white text-[5.47rem] md:text-[]'>ksunnwy</span>
          </div>
          <div className='flex flex-col items-center justify-center pl-[2.225rem] w-[20rem] h-[19.68rem] md:w-[] md:h-[] opacity-0 samael'>
          <span className='text-white text-[5.47rem] md:text-[]'>samael</span>
          </div>
        </div>
      </div>

        <span className='text-white text-[3.42rem] md:text-[] text-center w-[58.84rem] md:w-[] mt-[35rem] opacity-0 work
        absolute top-[32%] left-1/2 translate-x-[-50%] translate-y-[-50%]'>
              Работа подготовлена в рамках хакатона 2023 от Taskills
        </span>

      {/* <div className="opacity-0 main-data absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-between w-full">
            <div className='flex flex-col gap-y-[4.19rem] md:gap-y-[] items-center justify-center w-[20rem] h-[19.68rem] md:w-[] md:h-[]'>
              <span className='text-white text-[5.47rem] md:text-[]'>ksunnwy</span>
              <Image src={'/pages/portfolio/ellipse.svg'} alt='|' width={360} height={1} />
            </div>
            <span className='text-white text-[3.42rem] md:text-[] text-center w-[58.84rem] md:w-[] mt-[35rem]'>
              Работа подготовлена в рамках хакатона 2023 от Taskills
            </span>
            <div className='flex flex-col gap-y-[4.19rem] md:gap-y-[] items-center justify-center w-[20rem] h-[19.68rem] md:w-[] md:h-[]'>            
              <span className='text-white text-[5.47rem] md:text-[]'>samael</span>
              <Image src={'/pages/portfolio/ellipse.svg'} alt='|' width={360} height={1} />
            </div>
          </div>
      </div> */}

    </div>
  )
}

export default Portfilo