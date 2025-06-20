"use client";
import React from 'react'
import Control from '../../public/lottie/Control_burn.json'
import Accelerate from '../../public/lottie/Accelerate_revenues.json'
import Growth from '../../public/lottie/Grow_with_confidence.json'
import BlueprintComponent from './blueprintComponent';

const Blueprint = () => {
  return (
    <section className='py-[120px] relative'>
        <div className='w-full p-[5%]'>
            <div className='flex flex-col gap-y-20'>
                <div className='flex justify-between items-end'>
                    <h2 className='text-4xl '>Your blueprint for lasting growth</h2>
                    <a className='text-lg text-gray-500'>Talk to Us</a>
                </div>
                <div className='flex gap-x-4'>
                    <BlueprintComponent title="Control burn" description="Smooth out chunky payables, conserve your working capital, and invest where it matters most." animationData={Control} />
                    <BlueprintComponent title="Accelerate revenues" description="Streamline receivables and close cash gaps without compromising customer relationships." animationData={Accelerate} />
                    <BlueprintComponent title="Grow with confidence" description="Embed Gynger across your financial workflows to optimize key performance indicators and achieve lasting success." animationData={Growth} /> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blueprint
