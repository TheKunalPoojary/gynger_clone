"use client";
import Image from 'next/image';
import React from 'react'

interface SolutionProps {
  data: {
        title?: string;
        people?: {
            logo?: string;
            photo?: string;
            description?: {line:string}[];
        }[]
  } | undefined;
}

const persons=[
    {logo:'/solution/67e31272227c6b046323f214_73a6b489982683982b53a26ddc548c5f_buyes-logo.svg', image: '/solution/67e311ff0c2b4cfbe4669670_avatar-1.avif',review:["Smooth out your payables","Conserve your cash","Grow your business"]},
    {logo:'/solution/67e312729f79ce9af276f828_a6ca93699ae9752585e35d3e1a13221f_sellers-logo.svg', image: '/solution/67e311ff104374fc6b16acf9_avatar-2.avif',review:["Offer flexible payments","Pull cash forward","Optimize financial workflows"]},
    {logo:'/solution/67e31272248db95ad88916e7_cfos-logo.svg', image: '/solution/67e311ff36ed048ad7b8c94a_avatar-3.avif', review:["Shorten DSO","Unlock working capital","Master cash flow conversion"]},
    {logo:'/solution/67e312725a6ba62be600ca49_cros-logo.svg', image: '/solution/67e311ff26a7ea5ef01fd6e6_avatar-4.avif', review:["Close deals faster","Streamline renewals","Differentiate your offers"]},
]
const Solution: React.FC<SolutionProps> = ({ data }) => {
    
  return (
    <section className='py-20 text-white'>
        <div className='w-full px-[5%]'>
            <div className='w-full bg-[#052b28] rounded-[2.4rem] max-w-[80rem] mx-auto'>
                <div className='flex flex-col gap-y-20 py-[7.5rem] px-[6%]'>
                    <div className='flex justify-between items-end max-[767px]:flex-col max-[767px]:items-center max-[767px]:text-center'>
                        <h2 className='text-[4rem] font-extralight'>Find Your Solution</h2>
                        <a className='bg-[#9fe29e] flex justify-center items-center text-black text-lg rounded-lg min-w-37 h-15 '>Talk to us</a>
                    </div>
                    <div className='flex gap-x-5 max-[992px]:grid max-[992px]:auto-cols-[1fr] max-[992px]:grid-col-[1fr_1fr] max-[992px]:grid-row-[auto_auto] max-[992px]:gap-x-[1.2rem] max-[992px]:gap-y-[1.2rem]'>
                        {persons.map((person,index)=>(
                            <div key={index} className='flex flex-1 flex-col gap-y-10 rounded-2xl items-center p-6' style={{backgroundColor:"#013d3d"}}>
                                <Image
                                    src={person.logo}
                                    alt="logo"
                                    width={100}
                                    height={100}
                                    className='h-10'
                                />
                                <Image
                                    src={person.image}
                                    alt="logo"
                                    width={100}
                                    height={100}
                                    className='rounded-full'
                                />
                                <ul className='flex flex-col gap-y-1 items-start justify-center'>
                                    {person.review.map((item,index)=>(
                                        <li key={index} className='text-sm'>{item}</li>
                                    ))}
                                </ul>
                                <a className='text-[#9fe29e]'>Learn more</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solution
