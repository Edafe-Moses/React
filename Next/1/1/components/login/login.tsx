'use client'
import Navbar from "../navbar/navbar"
import Res from "./_components/_Main"
import Image from "next/image"

interface LoginProps {
    value: boolean
}

const Login:React.FC<LoginProps> = ({value}) =>  {


    // This code is for the login signup and verification of mail page
    return (
        <div className="relative w-full min-h-lvh h-fit flex flex-col select-none backdrop-blur-sm">
            <Image src="/icons/fo.png" width={1010} height={0} alt="Image" className="absolute w-full h-full" />
            <div className="z-10">

                <div className="sticky top-0 z-50 border-b border-black opacity-80 backdrop-blur-sm">
                    <Navbar />
                </div>

                <div className="flex justify-center items-center">
                    <div className="bg-white mx-1 bg-opacity-90 px-2 sm:px-12 mt-3 flex gap-4 flex-col items-center pt-10 lg:w-[450px] md:w-4/5 border border-[rgb(207,207,207)] rounded-sm">
                        <Image src={`/logos/logo4.png`} width={120} height={50} alt="" />

                        {/* Set the value of sign as true (SignUp Page) sign as false (login page) */}
                        <Res 
                            sign={value}
                        />
                        
                        <Image src="/icons/line.svg" width={351} height={0} alt="Line" className="mb-10" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login