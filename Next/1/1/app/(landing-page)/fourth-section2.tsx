'use client'
import Image from "next/image"
import { useState } from "react"

const FourthSection = () => {

    const [data, setData] = useState(
        {
            title: "The Future of E-Commerce",
            info: "Buy and sell wide variety of items from trusted customers worldwide",
            containers: [
                {
                    "mainImage": "1",
                    "sideImage": "1side",
                    "title": "Shop and sell with complete peace of mind",
                    "info": "Our secure payment systems and efficient processes ensure that your transactions are not only seamless but also safe, providing you with a worry-free experience."
                },
                { 
                    "mainImage": "2",
                    "sideImage": "2side",
                    "title": "Enjoy flexible transaction polices",
                    "info": "Customize your transactions to your taste and buy products either singly or in bulk at your convenience."
                },
                { 
                    "mainImage": "3",
                    "sideImage": "3side",
                    "title": "Choose from a variety of colors",
                    "info": "Personalize every detail of your choice product by select your preferred colors, icons, and additional features to tailor Sceptre to your unique needs."
                }
            ]
        }
    )
    return(
        <div className="bg-[#F8FCFF] pt-[72px] font-out pb-[120px] flex flex-col gap-[136px] overflow-x-hidden">
            <div className="flex flex-col gap-4 text-center justify-center items-center">
                <h3 className="font-semibold text-4xl md:text-[62px] text-[#013860]">{data.title}</h3>
                <p className="text-[#929292] text-lg md:text-[32px] w-4/5 md:w-[665px]">{data.info}</p>
            </div>

            <div className="w-full px-8 lg:px-[100px] flex flex-col gap-72 md:gap-20 lg:gap-[120px] justify-center items-center">
                {data.containers.map((container, index) => {
                    return (
                        <div key={container.title} className={`flex flex-col gap-9 xl:gap-[133px] h-[480px] justify-center items-center ${index %2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            <Image 
                                src={`/iconHero/ecommerce/${container.mainImage}.svg`} 
                                width={480} 
                                height={480} 
                                alt={container.title} 
                                className="w-full md:w-2/5"
                            />

                            <div>
                                <Image 
                                    src={`/iconHero/ecommerce/${container.sideImage}.svg`} 
                                    width={56} 
                                    height={56} 
                                    alt={container.title} 
                                />
                                <h3 className="font-medium text-lg md:text-[52px] text-[#002E56] leading-none mb-4 mt-10">{container.title}</h3>
                                <p className="text-base md:text-[29px] text-[#929292] leading-8">{container.info}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FourthSection