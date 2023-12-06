import React from 'react';
import Header from './Header';
import AboutTownPage from './AboutTownPage';
import AttractionPage from './AttractionPage';
import ParkPage from './ParkPage';
import StreetPage from './StreetPage';
import TownParkPage from './TownParkPage';
import Footer from './Footer';

const MainSection = () => {
  return (
    <div className='bg-black wrapper min-h-[100dvh] text-white overflow-hidden md:overflow-x-hidden overflow-y-auto relative'>
      <div className="content">
        <Header />
        <AboutTownPage />
        <AttractionPage />
        <ParkPage />
        <StreetPage />
        <TownParkPage />
        <Footer />
      </div>
    </div>
  )
}

export default MainSection;