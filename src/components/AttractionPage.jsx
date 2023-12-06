import React from 'react';
import Image from 'next/image';

const AttractionPage = () => {
  return (
    <section className='bg-black text-white h-[100dvh] overflow-x-hidden relative mapPage'>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[2]">
        <h2 className='unbounded text-[8.56rem] md:text-[32px]'>ДОСТОПРИМЕ<br />ЧАТЕЛЬНОСТИ <br /> КРАСНОДАРА</h2>
      </div>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[0] map">
        <div className="relative w-screen td:mx-auto td:flex td:items-center td:justify-center td:w-[60rem] 
        td:h-[45rem] md:w-[345px] h-screen md:h-[190px]">
          <Image src={"/pages/attractionPage/map.png"} alt="map" fill />
        </div>
      </div>
    </section>
  )
}

export default AttractionPage