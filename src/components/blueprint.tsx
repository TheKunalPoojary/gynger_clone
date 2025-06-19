"use client";
import React from 'react'
import Lottie from 'lottie-react'
import Control from '../../public/lottie/Control_burn.json'
import Accelerate from '../../public/lottie/Accelerate_revenues.json'
import Growth from '../../public/lottie/Grow_with_confidence.json'

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
                    <div className='relative flex flex-1 flex-col rounded-xl'>
                        <div className='pt-10 px-10 pb-6'>
                            <div className='mb-4'><p className='text-2xl'>Control burn</p></div>
                            <div className='opacity-50'><p className='text-lg'>Smooth out chunky payables, conserve your working capital, and invest where it matters most.</p></div>
                        </div>
                        <div>
                            <Lottie
                                animationData={Control}
                                loop={true}
                                className='w-full h-full'
                            />
                        </div>
                    </div>
                    <div className='relative flex flex-1 flex-col rounded-xl'>
                        <div className='pt-10 px-10 pb-6'>
                            <div className='mb-4'><p className='text-2xl'>Accelerate revenues</p></div>
                            <div className='opacity-50'><p className='text-lg'>Streamline receivables and close cash gaps without compromising customer relationships.</p></div>
                        </div>
                        <div>
                            <Lottie
                                animationData={Accelerate}
                                loop={true}
                                className='w-full h-full'
                            />
                        </div>
                    </div>
                    <div className='relative flex flex-1 flex-col rounded-xl'>
                        <div className='pt-10 px-10 pb-6'>
                            <div className='mb-4'><p className='text-2xl'>Grow with confidence</p></div>
                            <div className='opacity-50'><p className='text-lg'>Embed Gynger across your financial workflows to optimize key performance indicators and achieve lasting success.</p></div>
                        </div>
                        <div>
                            <Lottie
                                animationData={Growth}
                                loop={true}
                                className='w-full h-full'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blueprint
