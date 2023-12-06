import Image from 'next/image'
import React from 'react'

const TownParkPage = () => {
  return (
    <section className='bg-black text-white h-[100dvh] townParkBg townParkPage overflow-x-hidden relative'>
      <div className="width-restriction h-[100dvh]">
        <div className="absolute top-1/2 left-[31%] md:left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col gap-y-[2.56rem] md:gap-y-[12px]">
            <h2 className='text-white text-[8.56rem] td:text-[6rem] md:text-[32px] md:text-center unbounded'>ГОРОДСКОЙ <br /> САД</h2>
            <p className='text-[3.85rem] td:text-[2.85rem] md:text-[16px] md:text-center max-w-[71.74rem] md:max-w-[282px] gilroy'>
              <span className='text-green'>— </span>
              Место с красивыми цветами, зелеными газонами и ухоженными
              деревьями. Здесь можно прогуляться по аллеям, отдохнуть на скамейках,
              посетить фонтаны и насладиться тишиной и умиротворением.
            </p>
          </div>
        </div>

        <div className="absolute top-[14% md:top-[67%] right-[2%] md:right-0 md:left-[60%] z-[0] md:z-[4] firstImage">
          <div className="relative w-[30.65rem] md:w-[125px] h-[25.68rem] md:h-[88px]">
            <Image src={"/pages/townParkPage/carousel.png"} alt="arc" fill />
          </div>
        </div>
        <div className="absolute top-[33%] md:top-[70%] right-[3%] md:left-0 md:right-1/2 md:translate-x-1/2 z-[3] secondImage">
          <div className="relative w-[54.28rem] md:w-[209px] h-[29.45rem] md:h-[123px]">
            <Image src={"/pages/townParkPage/bush.png"} alt="arc" fill />
          </div>
        </div>
        <div className="absolute top-[55%] md:top-[82%] right-[5%] md:left-0 md:right-1/4 md:translate-x-1/2 z-[4] thirdImage]">
          <div className="relative w-[19.69rem] md:w-[79px] h-[21.48rem] md:h-[92px]">
            <Image src={"/pages/townParkPage/people.png"} alt="arc" fill />
          </div>
        </div>
        <div className="absolute top-[53%] md:top-[66%] right-[27%] md:left-[10%] z-[4] md:z-0 fourthImage">
          <div className="relative w-[29.62rem] md:w-[116px] h-[25.59rem] md:h-[104px]">
            <Image src={"/pages/townParkPage/river.png"} alt="arc" fill />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TownParkPage