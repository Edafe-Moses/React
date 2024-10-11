import { PiArrowRight } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

const GetStartedFree = () => {
    return (
        <>
            <div className="py-20 xl:py-24 flex justify-center items-center flex-col border-b">
                <div className="text-4xl xl:text-5xl font-medium text-center">
                    Get started for free
                </div>
                <div className="py-4 xl:w-1/3 text-center px-10">
                    Never lose a customer again. Capture them with Sceptre.
                </div>
                <Link href="/Contact" legacyBehavior>
                    <a className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
                        Request a demo <PiArrowRight className="ml-3 text-sm" />
                    </a>
                </Link>
                <Image
                    src="/assets/MessyDoodle.svg"
                    alt="hero image"
                    width={1000}
                    height={1000}
                    className="w-80 pt-10"
                />
            </div>
        </>
    );
}

export default GetStartedFree;
