import Image from "next/image";
import {Lora} from "next/font/google";
import { cn } from "@/lib/utils";


const font = Lora({
     subsets: ["latin"],
     weight: ['400'],
     });

const ThirdSection = () => {
    return ( <div className="xl:pt-32 pt-24 relative flex justify-center items-center flex-col">
        <div className="xl:text-5xl text-3xl 2xl:w-3/5 w-3/5 xl:w-1/3 font-medium mx-auto text-center" >
        Consolidate tools. Cut Costs.
        </div>
        <Image
        src="/assets/canva-asset.png"
        width={1000}
        alt="Canva"
        height={1000}
        className="pt-10 w-4/5 xl:w-1/3"/>

        {/* <div className={cn(
            'flex items-center justify-center text-2xl xl:text-2xl pt-10 pb-4 xl:py-10 px-8 text-center w-4/5',
            font.className
        )}>
            &quot;We got rid of nearly different tools because of what sceptre does for us.&quot;
        </div> */}
        <div className="items-center justify-center p-20 flex flex-col">
            <Image
            src="/logos/logoipsum-311.svg"
            width={500}
            alt="Hero"
            height={500}
            //className="w-10 pt-2 xl:pt-0 xl:w-14"
            />
            <div className="text-center">
                <div className="font-medium pt-4">Sam Smith</div>
                <div className="">Marketing Director,Big Move Inc.</div>                
            </div>
        </div>
    </div> );
}
export default ThirdSection;