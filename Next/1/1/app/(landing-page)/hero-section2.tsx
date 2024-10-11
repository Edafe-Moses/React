'use client'
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HeroSection = () => {

    const [data, setData] = useState(
        {
            title: "Connect to Customers and Retailers on Sceptre",
            info: "Sceptre is an online marketplace, where you can buy and sell products to various customers all around the world",
            link: [
                {"button":"Get Sceptre Free", "url": ""}, 
                {"button":"Learn more", "url": ""}
            ],
            radio: [
                {"heading": "Join thousands of people using sceptre right now", "image": "/iconHero/radio.svg", "url": ""}

            ],
            testimonial: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        }  
    );

    return (
        <div className='flex flex-col w-full h-[100vh] border-black border bg-image bg-center bg-cover overflow-x-hidden'>
            <Navbar />
            <div className="h-[100vh] justify-center pl-4 md:pl-12 flex flex-col gap-20 text-white">
                <div className="justify-self-center flex flex-col gap-6 w-[90%] md:w-[669px] h-fit font-out">
                    <p className="font-semibold text-3xl overflow-y-hidden md:text-[56px] leading-none p-2">{data.title}</p>
                    <p className="text-xl font-normal">{data.info}</p>
                    <div className="flex gap-6 text-[13px] sm:text-base font-medium">
                        <Link 
                            href={data.link[0].url}
                             className="px-5 py-4 bg-black rounded-sm border-[2px] border-black">
                            {data.link[0].button}
                            </Link>
                        <Link 
                            href={data.link[1].url} 
                            className="flex items-center gap-2 px-5 py-4 rounded-sm border-[2px] border-white">
                            {data.link[1].button} 
                            <Image 
                                src={`/iconHero/arrow.svg`} 
                                width={26} 
                                height={0} 
                                alt={`im`} 
                            />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <p className="flex gap-2">
                        <Image 
                            src={data.radio[0].image} 
                            width={20.16} 
                            height={20.16} 
                            alt="" 
                        />
                        {data.radio[0].heading}
                    </p>

                    <div className="relative flex items-center gap-3">
                        {
                            data.testimonial.map((individual, index) => {
                                return (
                                    <Image
                                        src={`/iconHero/testimonial/${individual}.svg`} 
                                        width={56} 
                                        height={56} 
                                        alt={`${individual} image`}
                                        key={individual}
                                        className={`w-11 h-11 md:w-14 md:h-14 ${index > 0 && 'ml-[-27px] z-[${individual}]'}`}
                                    />
                                )
                            })
                        }
                        <span>and many more</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection