"use client";
import React from 'react'
import Control from '../../public/lottie/Control_burn.json'
import Accelerate from '../../public/lottie/Accelerate_revenues.json'
import Growth from '../../public/lottie/Grow_with_confidence.json'
import BlueprintComponent from './blueprintComponent';

interface BlueprintProps {
  data: {
    title?: string;
    section?: {
        title?: string;
        description?: string;
        svg_file?: {
            href?: string;
        }
    }[]
  } | undefined;
}

const Blueprint: React.FC<BlueprintProps> = ({ data }) => {
    console.log(data)
  return (
    <section className='py-[120px] relative'>
        <div className='w-full p-[5%]'>
            <div className='flex flex-col gap-y-20 max-[992px]:gap-y-16'>
                <div className='flex justify-between items-end max-[992px]:justify-center max-[991]:text-center'>
                    <h2 className='text-5xl font-light'>{data?.title}</h2>
                    <a className='text-lg text-gray-500 max-[992px]:hidden'>Talk to Us</a>
                </div>
                <div className='flex gap-x-4 max-[992px]:flex-col'>
                    <BlueprintComponent title="Control burn" description="Smooth out chunky payables, conserve your working capital, and invest where it matters most." animationData={Control} />
                    <BlueprintComponent title="Accelerate revenues" description="Streamline receivables and close cash gaps without compromising customer relationships." animationData={Accelerate} />
                    <BlueprintComponent title="Grow with confidence" description="Embed Gynger across your financial workflows to optimize key performance indicators and achieve lasting success." animationData={Growth} /> 
                </div>
                <div className='min-[992px]:hidden'>
                    <a className='flex text-lg text-gray-500 justify-center'>Talk to Us</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blueprint
