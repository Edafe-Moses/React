import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";


const logos = [
    {image : '/logos/logoipsum-286.svg'},
    {image : '/logos/logoipsum-290.svg'},
    {image: '/logos/logoipsum-297.svg'},
    {image: '/logos/logoipsum-311.svg'},
    {image: '/logos/logoipsum-317.svg'},
    {image: '/logos/logoipsum-321.svg'},
    {image: '/logos/logoipsum-323.svg'},
    {image: '/logos/logoipsum-329.svg'},
    {image: '/logos/logoipsum-292.svg'},
    {image: '/logos/logoipsum-291.svg'},
    {image: '/logos/logoipsum-282.svg'},
    {image:'/logos/logoipsum-284.svg'},
]

const SecondSection = () => {
return ( 
        <div className="pt-16 flex justify-center items-center flex-col">
            <div className="text-4xl w-3/4 text-center xl:text-5xl font-medium">
            Millions selling  on Sceptre 
            everyday
            </div>
            <div className="py-4 xl:w-1/4 text-center">
            Equiping stores with the power of outreach to various customers.
            </div>
            <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer" >
                Read customer stories <PiArrowRight className="ml-3 text-sm"/>
            </div>
            { <div className="grid grid-cols-3 xl:grid-cols-4 items-center justify-center px-10 md:px-20 lg:px-0 lg:w-1/2 pt-10 gap-10 text-center mx-auto">
                {logos.map((logo,index)=>(
                    <div key={index}>
                        <Image src={logo.image} alt="logo" width={400} height={400} className="w-26" />   
                    </div>
                ))}
                </div>}
        </div>
     );
}
export default SecondSection;