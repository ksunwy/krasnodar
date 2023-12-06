import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='h-[100dvh] stadiumBg border-2 border-solid border-b-white border-x-0 border-t-0 z-[15] main relative'>
            <div className="width-restriction h-[100dvh]">
                <div className="absolute top-[10%] right-[12%] md:right-1/2 md:translate-x-1/2 md:translate-y-1/2
                 flex gap-x-[41rem] md:gap-x-[225px] lines">
                    <div className="relative h-[17rem] md:h-[115px] w-[.2rem] ">
                        <Image src={"/pages/mainPage/Line.svg"} alt='line' fill />
                    </div>
                    <div className="relative h-[17rem] md:h-[115px] w-[.2rem]">
                        <Image src={"/pages/mainPage/Line.svg"} alt='line' fill />
                    </div>
                </div>
                <div className="flex flex-col relative h-[85dvh]">
                    <div className=" absolute top-1/2 left-[48%] translate-x-[-50%] translate-y-[-50%] z-[2] title">
                        <h1 className='text-white text-[17.12rem] td:text-[13rem] md:text-[42px] opacity-[.85] unbounded'>
                            КРАСНОДАР
                        </h1>
                    </div>
                    <div className="w-[62.92rem] md:w-[268px] whitespace-nowrap absolute top-[36%] md:top-[43%] left-0 adjectives">
                        <span className='text-[4.7rem] md:text-[20px] text-green gilroy'>
                            ЖИВОПИСНЫЙ И РОМАНТИЧНЫЙ
                        </span>
                    </div>
                    <div className="absolute top-[55%] md:top-[52%] left-0 subtitle">
                        <span className='text-[6.84rem] md:text-[30px] text-green opacity-70 figiel'>
                            KRASNODAR
                        </span>
                    </div>
                    <div className="absolute top-[64%] md:top-[60%] left-0 description">
                        <span className='text-[6.2rem] md:text-[16px] text-white max-w-[66.78rem] md:max-w-[246px] gilroy'>
                            Познакомьтесь с лучшими местами <br /> Краснодара 2023
                        </span>
                    </div>
                    <div className="absolute top-[87%] left-0 flex items-center justify-center w-[15rem] md:w-[95px] h-[15rem] md:h-[95px] 
                    arrow md:left-1/2 md:-translate-x-1/2 md:top-[95%]">
                        <div className="relative w-[3.42rem] md:w-[21.11] h-[4.53rem] md:h-[27.97px]">
                            <Image src={"/pages/mainPage/arrowDown.svg"} alt='down' fill />
                        </div>
                    </div>
                </div>
                <div className="flex items-baseline md:items-start gap-x-[3rem] md:gap-x-[6px] absolute top-[64%] md:top-[58%] right-0 md:right-1/2
               md:translate-x-1/2">
                    <div className="flex gap-x-[3rem] items-start md:items-center">
                        <div className="relative w-[.2rem] h-[31.44rem] md:hidden lines">
                            <Image src={"/pages/mainPage/Line.svg"} alt='line' fill />
                        </div>
                        <div className="relative picture">
                            <div className="relative w-[34.24rem] md:w-[195px] h-[18.23rem] md:h-[120px] z-[2]">
                                <Image src={"/pages/mainPage/stadium.png"} alt='pic' fill />
                            </div>
                            <div className="absolute top-[63%] md:top-[59%] left-0 z-[0] down-blur">
                                <div className="relative w-[34.24rem] md:w-[195px] h-[18.23rem] md:h-[120px]">
                                    <Image src={"/pages/mainPage/whiteBlur.png"} alt='blur' fill />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-[3rem] md:gap-x-[6px] items-end">
                        <div className="relative w-[.2rem] h-[31.44rem] md:h-[163px] lines">
                            <Image src={"/pages/mainPage/Line.svg"} alt='line' fill />
                        </div>
                        <div className="relative picture">
                            <div className="absolute -top-[68%] left-0 z-[0] up-blur">
                                <div className="relative w-[34.24rem] md:w-[195px] h-[18.23rem] md:h-[120px] rotate-180">
                                    <Image src={"/pages/mainPage/whiteBlur.png"} alt='blur' fill />
                                </div>
                            </div>
                            <div className="relative w-[34.24rem] md:w-[195px] h-[18.23rem] md:h-[120px] z-[2]">
                                <Image src={"/pages/mainPage/arch.png"} alt='pic' fill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header