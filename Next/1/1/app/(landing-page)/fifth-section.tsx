'use client'

import Image from 'next/image';
import {useState} from 'react';

import {
    PiBookOpenTextLight,
    PiCompassLight,
    PiHeadset,
    PiMegaphoneLight,
    PiRocketLaunchFill,
    PiSparkleLight,
} from 'react-icons/pi';

const tabs = [
    {
        icon: <PiSparkleLight/>,
        name: 'Product',
        image: 'assets/DancingDoodle.svg',
    },
    {
        icon: <PiMegaphoneLight/>,
        name: 'Sales',
        image: 'assets/GroovyDoodle.svg',
    },
    {
        icon: <PiRocketLaunchFill/>,
        name: 'Distribution',
        image: 'assets/DogJumpDoodle.svg',
    },
    {
        icon: <PiHeadset/>,
        name: 'Advetrising',
        image: 'assets/FloatDoodle.svg',
    },
    {
        icon: <PiCompassLight/>,
        name: 'Marketing',
        image: 'assets/BalletDoodle.svg',
    },
    {
        icon: <PiBookOpenTextLight/>,
        name: 'Funding',
        image: 'assets/LovingDoodle.svg',
    },
]





const FifthSection = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    return ( <div className='relative flex justify-center items-center flex-col px-8 md:px-0 xl:w-3/4 mx-auto 2xl:w-[55%]'>
        <div className='pt-20 lg:pt-0 text-3xl xl:5xl font-medium text-center pb-8'>
            Every team, side by side.
        </div>
        <div className='grid grid-cols-4 md:grid-cols-6 md:row-span-1 gap-4 xl:gap-6 mt-8 xl:px-0'>
                {tabs.map((tab,) => (
                    <div key={tab.name}
                    className={`flex p-1 md:p-8 cursor-pointer 
                    ${
                        activeTab.name === tab.name
                        ? 'bg-[#f6f5f4] rounded-md md:rounded-xl md:bg-white border-gray-200 md:border items-center justify-center flex p-1'
                        : 'bg-[#f6f5f4] rounded-md p-1 justify-center items-center hover:bg-[#eae7ec] md:rounded-xl'
                    }`
                }
                onClick={()=>setActiveTab(tab)}
                    >
                        <div className='flex flex-col items-center md:justify-center mx-auto'>
                            <div className='hidden md:flex text-4xl'>{tab.icon}
                            </div>
                            <div className='font-mediun text-sm xl:text-lg mt-1'>
                                {tab.name}
                            </div>
                        </div>

                    </div>
                ))}
        </div>
        {/*display content based on which tab is active */}
        <div className='py-10 lg:px-16 xl:px-0 md:px-16 w-full'>
            {activeTab && (
                <div className='flex justify-center items-center flex-col'>
                    <Image
                    src={activeTab.image}
                    alt='image'
                    width={500}
                    height={500}
                    className='w-full border p-20 xl:p-40 rounded-xl'
                    />
                </div>
            )}
        </div>
    </div> );
}
 
export default FifthSection;