'use client'
import Image from "next/image"
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react"

export default function Faq(props: { header: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; paragraph: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) {

    const [image, setImage] = useState("/icons/down.svg");
    const [fade, setFade] = useState(false)

    const toggleImage = () => {
        setFade(true)
        setTimeout(() => {
            setImage(prevImage => 
                prevImage === "/icons/down.svg" ? "/icons/up.svg" : "/icons/down.svg"
            )
            setFade(false)
        }, 200)
    }

    return (
        <div className="w-full px-8 py-5 mb-6 flex flex-col gap-5 justify-center h-fit border-2 border-[#c0c0c0] bg-[#fcfcfc] rounded-lg transition transition-height overflow-hidden duration-500 animate-in animate-out ease-in-out hover:bg-[#f6f6f6]" onClick={toggleImage}>
            <div className="flex items-center justify-between">
                <h1 className="font-medium text-2xl text-black">{props.header}</h1>
                <Image src={image} alt="" width={32} height={32} className={`object-cover transition-image ${fade ? 'fade-out' : 'fade-in'} animate-pulse`} ></Image>
            </div>
            {image === "/icons/up.svg" && (
                <p className={`text-[#686868] font-normal text-2xl transition-image ${fade ? 'fade-out animate-out' : 'fade-in animate-in '} transition duration-500`}>{props.paragraph}</p>
            )}
        </div>
    )
}