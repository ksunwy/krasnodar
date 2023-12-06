import Image from 'next/image'
import React from 'react'

const StreetPage = () => {
  return (
    <section className='bg-black text-white h-[100dvh] streetBg overflow-x-hidden streetPage relative'>
      <div className="width-restriction h-[100dvh]">
        <div className="absolute top-1/2 -right-[20%] md:right-0 md:left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col gap-y-[2.56rem] md:gap-y-[12px]">
            <h2 className='text-white text-[8.56rem] td:text-[6rem] text-right md:text-[32px] md:text-center unbounded'>УЛИЦА <br /> КРАСНАЯ</h2>
              <p className='text-[3.85rem] td:text-[2.85rem] mx-auto text-right md:text-[16px] md:text-center max-w-[71.74rem] md:max-w-[282px] gilroy'>
              — Одна из самых известных и оживленных улиц города. Архитектурный 
              облик улицы сочетает в себе современные здания и элементы старого города, 
              придавая ей уникальный характер.
              </p>
            </div>
          </div>

          <div className="absolute top-[56%] md:top-[82%] left-[14%] md:left-0 md:right-1/3 md:translate-x-1/2 z-[4] firstImage">
          <div className="relative w-[18.75rem] md:w-[79px] h-[22.85rem] md:h-[92px]">
            <Image src={"/pages/streetPage/horse.png"} alt="arc" fill />
          </div>
        </div>
        <div className="absolute top-[33%] md:top-[70%] left-[4%] md:left-0 md:right-1/2 md:translate-x-1/2 z-[3] secondImage">
          <div className="relative w-[58.13rem] md:w-[209px] h-[28.51rem] md:h-[123px]">
            <Image src={"/pages/streetPage/blueLights.png"} alt="arc" fill />
          </div>
        </div>
        <div className="absolute top-[19%] md:top-[66%] left-[30%] md:left-[10%] z-[0] thirdImage">
          <div className="relative w-[27.39rem] md:w-[116px] h-[27.39rem] md:h-[104px]">
            <Image src={"/pages/streetPage/monument.png"} alt="arc" fill />
          </div>
        </div>
        <div className="absolute top-[13%] md:top-[67%] left-[1%] md:left-[60%] z-[4] fourthImage">
          <div className="relative w-[36.64rem] md:w-[125px] h-[23.63rem] md:h-[88px]">
            <Image src={"/pages/streetPage/empty.png"} alt="arc" fill />
          </div>
        </div>
        </div>
    </section>
    )
}

export default StreetPage