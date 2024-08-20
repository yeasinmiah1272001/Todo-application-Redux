import React from 'react';

import { Metadata } from 'next';
import InputFrom from './Component/InputFrom';



export const metadata: Metadata = {
  title: "Home||Todo app",
  description: "Generated by create next app",
};

const HomePage = () => {
  return (
    <div className='font-bodyFont w-full min-h-screen text-white flex items-center flex-col py-5'>
      <div className='w-full max-w-screen-md py-3 bg-bodyColor'>
        <InputFrom/>
      </div>
      
    </div>
  );
};

export default HomePage;