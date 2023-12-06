import Image from 'next/image'
import React from 'react'

const ParkPage = () => {
  return (
    <section className='bg-black text-white h-[100dvh] overflow-x-hidden relative parkPage parkBg'>
      <div className="width-restriction h-[100dvh]">
        <div className="absolute top-1/2 left-[31%] md:left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col gap-y-[2.56rem] md:gap-y-[12px]">
            <h2 className='text-white text-[8.56rem] td:text-[6rem] md:text-[32px] md:text-center unbounded'>ПАРК <br /> ГАЛИЦКОГО</h2>
            <p className='text-[3.85rem] td:text-[2.85rem] md:text-[16px] md:text-center max-w-[71.74rem] md:max-w-[282px] gilroy'>
              — Уютное место для отдыха и прогулок среди живописной природы.
              Здесь можно насладиться красотой озер, ручьев и цветущих садов,
              а также посетить детскую площадку, кафе и спортивные площадки.
            </p>
          </div>
        </div>
        <div className="absolute top-[14%] md:top-[66%] right-[25%] md:right-[63%] z-[0] firstImage">
          <div className="relative w-[30.65rem] md:w-[118px] h-[25.68rem] md:h-[102px]">
            <Image src={"/pages/parkPage/lavander.png"} alt="arc" fill />
          </div>
        </div>
        <div className="absolute top-[33%] md:top-[70%] right-[3%] md:right-1/2 md:translate-x-1/2 z-[3] secondImage">
          <div className="relative w-[54.28rem] md:w-[209px] h-[29.45rem] md:h-[123px]">
            <Image src={"/pages/parkPage/wide.png"} alt="arc" fill />
          </div>
        </div>
        <div className="absolute top-[25%] md:top-[67%] right-[1%] md:right-[10%] z-[4] thirdImage">
          <div className="relative w-[32.61rem] md:w-[125px] h-[21rem] md:h-[88px]">
            <Image src={"/pages/parkPage/heart.png"} alt="arc" fill />
          </div>
        </div>
        <div className="absolute top-[53%] md:top-[82%] right-[17%] md:right-1/2 md:translate-x-1/2 z-[4] fourthImage">
          <div className="relative w-[29.62rem] md:w-[98px] h-[25.59rem] md:h-[88px]">
            <Image src={"/pages/parkPage/water.png"} alt="arc" fill />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParkPage