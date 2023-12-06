import Image from 'next/image';
import React from 'react';

const AboutTownPage = () => {
  return (
    <section className='relative flex aboutBg border-2 border-solid border-b-white border-x-0 border-t-0'>
      <div className="width-restriction h-[100dvh]">
        <div className="flex flex-col gap-y-[2.56rem] md:gap-y-[12px] mt-[16rem] md:mt-0 
        md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <h2 className='text-green text-[8.56rem] td:text-[6rem] md:text-[36px] md:text-center unbounded title'>КРАСНОДАР <br />
            <span className='text-white'>ЭТО</span></h2>
          <p className='text-[3.85rem] d:mx-auto td:text-[2.85rem] md:text-[16px] md:text-center max-w-[72.68rem] md:max-w-[282px] gilroy subtitle'>
            <span className='text-green'>— </span>
            место, где сливаются традиции и современность,
            создавая уникальную атмосферу для тех, кто хочет
            насладиться разнообразием кубанской культуры и природы.
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 mt-[1rem]">
        <div className="relative w-screen h-screen scale-[1.08] opacity-90 z-[3] md:smallWhiteLine">
          <Image src={"/pages/aboutTownPage/whiteLine.svg"} alt="arc" fill className='md:hidden' />
        </div>
      </div>
      <div className="absolute top-0 left-0 mt-[1rem]">
        <div className="relative w-screen h-screen scale-[1.08] opacity-90 z-[1] md:smallGreenLine">
          <Image src={"/pages/aboutTownPage/greenLine.svg"} alt="arc" fill className='md:hidden' />
        </div>
      </div>

      <div className="absolute top-[8%] right-[19%] td:right-[7%] md:right-[60%] td:z-[5] z-[0] firstImage">
        <div className="relative w-[38.86rem] md:w-[154px] h-[23.97rem] md:h-[101px]">
          <Image src={"/pages/aboutTownPage/redLights.png"} alt="arc" fill className='md:rounded-[14px]' />
        </div>
      </div>
      <div className="absolute top-[28%] td:top-[32%] md:top-[65%] right-0 md:right-[9%] z-[4] secondImage">
        <div className="relative w-[56.33rem] md:w-[188px] h-[29.96rem] md:h-[110px]">
          <Image src={"/pages/aboutTownPage/stadium.png"} alt="arc" fill className='md:rounded-[14px]' />
        </div>
      </div>
      <div className="absolute top-[54%] md:top-[83%] right-[5%] md:right-[55%] z-[4] thirdImage">
        <div className="relative w-[33.3rem] md:w-[168px] h-[11.55rem] md:h-[71px]">
          <Image src={"/pages/aboutTownPage/arch.png"} alt="arc" width={389} height={185} className='md:rounded-[14px]' />
        </div>
      </div>
      <div className="absolute top-[70%] md:top-[18%] right-[35%] md:right-[12%] z-[2] fourthImage">
        <div className="relative w-[24.82rem] md:w-[121px] h-[17.2rem] md:h-[98px]">
          <Image src={"/pages/aboutTownPage/river.png"} alt="arc" fill className='md:rounded-[14px]' />
        </div>
      </div>
    </section>
  )
}

export default AboutTownPage;