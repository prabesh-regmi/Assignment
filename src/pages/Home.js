import React from 'react';
import './Home.css';

import MessageSetting from './HomeComponents/MessageSetting';
import LoyaltyType from './HomeComponents/LoyaltyType';
import LoyaltyCard from './HomeComponents/LoyaltyCard';
import Stamp from './HomeComponents/Stamp';


function Home() {


  return (
    <>
      <div className='my-home'>
        <p className='current-route'>HOME / LOYALTY /<b> CONFIGURATION</b></p>
        <div className='home-content'>
          <div className='first-seg'>
            <LoyaltyType/>
            <LoyaltyCard/>
            <Stamp/>
          </div>
          <MessageSetting/>

        </div>

      </div>
    </>
  );
}

export default Home;
