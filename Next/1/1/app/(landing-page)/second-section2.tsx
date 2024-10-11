'use client'
import {useState} from "react"
import Image from "next/image"

const SecondSection = () => {

    const [data, setData] = useState(
        {
            containers: [
                {
                    title: "Payment",
                    titleImage: "dollar",
                    info: "Manage Payment effectively",
                    payment: "Secure Payment",
                    image2: "cash",
                },
                {
                    title: "Friendly UI",
                    titleImage: "shield",
                    info: "Simple, Interactive and User Friendly",
                    payment: "Fast and Easy",
                    image2: "diamond",
                },
                {
                    title: "Products",
                    titleImage: "case",
                    info: "We've got whatever you want",
                    payment: "Endless Items",
                    image2: "paste",
                },
                {
                    title: "Blog",
                    titleImage: "book",
                    info: "Easy Interaction with quick Feedbacks",
                    payment: "Easy Interaction",
                    image2: "message",
                },
            ]
        }
    )

    return(
        <div className="w-full flex justify-center flex-auto">
            <div className="w-full flex justify-center flex-wrap gap-x-24 gap-y-10 py-10">
                {
                    data.containers.map((container, index) => {
                        return (
                            <div key={container.title} className={`flex flex-col ${index %2===0 ? 'gap-3' : 'gap-1'} shadow-custom-shadow rounded-lg p-5 w-[230px]`}>
                                <div className="flex gap-2 items-center">
                                    <Image 
                                        src={`/iconHero/tabs/${container.titleImage}.svg`} 
                                        alt={container.titleImage} 
                                        width={24} 
                                        height={24}
                                    />
                                    <h3 className="font-open font-semibold text-xl">{container.title}</h3>
                                </div>
                                <p className="text-sm">{container.info}</p>
                                <div className="flex gap-2">
                                    <span className="text-xs text-[#EA45F8]">Secure Payment</span>
                                    <Image 
                                        src={`/iconHero/tabs/${container.image2}.svg`} 
                                        alt={container.image2} 
                                        width={12} 
                                        height={12}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SecondSection