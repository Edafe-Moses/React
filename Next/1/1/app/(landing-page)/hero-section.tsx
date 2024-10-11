'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';



import React from 'react';

import {
    PiArrowRight,
    PiBookOpenText,
    PiBookOpenTextLight,
    PiBagBold,
    PiFileThin,
    PiSparkleLight,
    PiTargetLight,
} from "react-icons/pi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { BsChatLeftQuoteFill } from "react-icons/bs";

import { MdPayments } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { features } from 'process';
import { MdDescription } from 'react-icons/md';
import { ImageMinus } from 'lucide-react';

const tabs = [{
    icon: (
        <RiSecurePaymentFill  className='text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-full ' />
    ),
    name: 'Payments',
    feature: 'It gets better',
    description: 'Manage payment efciently',
    more: (
        <div className='text-purple-600 flex items-center'>
            Secure Payments <MdPayments className='text-sm ml-1' />
        </div>
    ),
    image: '/assets/GroovyDoodle.svg'
},
{
    icon: (
        <MdOutlineVerifiedUser className='text-3xl mr-2 text-red-300 bg-purple-100 p-1 rounded-full ' />
    ),
    name: 'Friendly UI',
    description: 'Simple,Interactive and user friendly',
    more: (
        <div className='text-red-300 flex items-center'>
            Fast and Easy <FaHandshakeSimple className='text-sm ml-1' />
        </div>
        
    ),
    image: '/assets/PlantDoodle.svg'
},
{
    icon: (
        <PiBagBold className='text-3xl mr-2 text-blue-600 bg-purple-100 p-1 rounded-full ' />
    ),
    name: 'Products',
    description: "We've got Whatever you want",
    more: (
        <div className='text-blue-600 flex items-center'>
            Endless items < GiShoppingBag  className='text-sm ml-1' />
        </div>
    ),
    image: '/assets/MessyDoodle.svg'
},
{
    icon: (
        <PiBookOpenTextLight className='text-3xl mr-2 text-yellow-300 bg-yellow-100 p-1 rounded-full ' />
    ),
    name: 'Blogs',
    description: 'Easy interracration with quick feedbacks',
    more: (
        <div className='text-yellow-600 flex items-center'>
            Easy Interraction <BsChatLeftQuoteFill className='text-sm ml-1' />
        </div>
    ),
    image: '/assets/FloatDoodle.svg'
},
]


function HeroSection() {

    const [activeTab, setActiveTab] = useState(tabs[0])
    const isSmallScreen = useMediaQuery({ maxWidth: 767 })
    return (
        <div className='md:items-center flex flex-col'>
            <div className='
            font-medium
            2xl:w-1/3
            xl:w-1/2
            lg:w-2/3
            md:w-3/4
            sm:w-4/5
            w-full
            lg:px-0
            px-4
            text-3xl
            sm:text-4xl
            md:text-5xl
            xl:text-6xl
            flex
            flex-col
            justify-center
            items-center
            xl:pt-14
            pt-6
            text-center
            whitespace-normal
'>
    <span>Connect to Various Customers</span>
    <span className='pt-1'>and Retailers on Sceptre.</span>
</div>


            <div className="text-2xl pt-4 text-center w-2/3 mx-auto">
                <p>Sceptre is an online marketplace, where you can buy and sell products</p>
                <p>to various customers all around the world.</p>
            </div>

            <div className='flex gap-4 pt-6 items-center justify-center'>
                <Link href={'/Contact'}>
                    <Button className='py-1'>
                        <div className='flex items-center justify-center'>
                            <div className='text-lg'>
                                Register Now
                            </div>
                            <div><PiArrowRight className='ml-2' />
                            </div>
                        </div>
                    </Button>
                </Link>
            </div>
            <div className='pt-10 xl:pt-20 items-center justify-center'>
                <Image
                    src={"/assets/LayingDoodle.svg"}
                    alt="Hero"
                    width={1000}
                    height={1000}
                    className="
                            flex
                             xl:w-80
                              items-center
                               justify-center
                                mx-auto
                                 w-60"
                />

            </div>
            {isSmallScreen ? (
                <div className='px-8'>
                    <div className='grid
                 grid-cols-4
                  md: row-span-1
                  gap-4
                  xl:gap-6
                  mt-8
                  xl:px-0
                  '
                    >
                        {tabs.map((tab) => (
                            <motion.div
                                key={tab.name}
                                className={`
                        flex
                        p-1
                        md:p-8
                        cursor:pointer
                        
                        ${activeTab.name === tab.name
                                        ? 'rounded-md md:rounded-xl bg-[#f6f5f4] md:bg-white border-gray-200 md:border items-center justify-center flex p-1'
                                        : "md:bg-[f6f5f4] rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7]"
                                    }
                        `}
                                onClick={() => setActiveTab(tab)}
                            >
                                <div className='felx flex-col items-center md:justify-center mx-auto '>
                                    <div className='hidden md:flex text-4xl'>{tab.icon}</div>
                                    <div className='font-medium text-sm xl:text-lg mt-1'>
                                        {tab.name}
                                    </div>

                                </div>

                            </motion.div>
                        ))}

                    </div>
                    {/*contnet based on which tab is active*/}
                    <div className='pt-6 md:py-10 lg:px-16 xl:px-0  w-full'>
                        {activeTab && (
                            <div className='flex justify-center items-center flex-col'>
                                <Image
                                    src={activeTab.image}
                                    alt='Hero'
                                    width={1000}
                                    height={1000}
                                    className='
                            w-full
                            h-full
                            border
                            p-20
                            xl:p-40
                            rounded-xl
                            '
                                />
                            </div>
                        )}

                    </div>
                </div>
            ) : (
                <div className='flex xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]'>
                    {tabs.map((tab) => (
                        <motion.div
                            key={tab.name}
                            className={
                                `
                        xl:flex
                        justify-center
                        space-x-4
                        xl:pt-4
                        sm:my-10
                        w-60
                        xl:py-0
                        h-36

                        ${activeTab.name === tab.name
                                    ? 'border rounded-xl pt-2 bg-white'
                                    : 'shadow-md rounded-xl pt-2 bg-white'
                                }
                        `
                            } onMouseEnter={() => setActiveTab(tab)}
                        >
                            <div className="px-4">
                                <div className="flex items-center">
                                    <div>{tab.icon}</div>
                                    <div className="text-2xl font-medium">{tab.name}</div>

                                    {/* Render feature tag only for "AI" tab */}
                                    {tab.name === "AI" && (
                                        <div className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full ml-2">
                                            {tab.feature}
                                        </div>
                                    )}
                                </div>

                                <motion.div
                                    className="flex flex-col text-sm"
                                    initial={{ y: 0 }}
                                    animate={{ y: activeTab === tab ? 10 : 25 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div>
                                        {/* Only animate the description */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {tab.description}
                                        </motion.div>
                                    </div>

                                    {/* Conditional rendering for "Learn more" link */}
                                    {activeTab === tab && (
                                        <div className="text-sm mt-2">{tab.more}</div>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            )}

            {/* Display content based on the active tab */}
            <div className="hidden md:flex py-10 px-8 md:px-0    lg:w-3/4 2xl:w-[55%]">
                {activeTab && (
                    <div className=" md:flex  items-center justify-center space-x-6 hover:cursor-pointer w-full">
                        <Image
                            src={activeTab.image}
                            width={500}
                            height={500}
                            alt="logo"
                            className="
                      w-full
                      p-20
                      xl:p-40
                      shadow-md
                      rounded-xl
                      bg-white
              "
                        />
                    </div>
                )}
            </div>
        </div>

    );
};

export default HeroSection;
