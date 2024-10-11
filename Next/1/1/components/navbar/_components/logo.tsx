import Image from "next/image";
import Link from "next/link";


const Logo = () => {
    return (<>
        <Link href="/">
            <Image
            src="/logos/logo4.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-27 ml-3"
            />

        </Link>
    </>);
}

export default Logo; 