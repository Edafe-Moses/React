"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const datas = {
        "main": [
            {
                "id": 1,
                "title": "",
                "location": "Sceptre e-commerce Ltd., Plot 1234, Zone 4, Central Business District, Abuja, FCT, Nigeria.P.O. Box 56789",
                "img": [
                    { "name": "linkdin", "url": "https://www.linkedin.com/company/projectsceptre/" },
                    { "name": "instagram", "url": "https://www.instagram.com/sceptrestores_/" },
                    { "name": "tiktok", "url": "https://www.tiktok.com/@sceptre" },
                ],
            },
        ],

        "side": [
            {
                "id": 2,
                "header": "Resources",
                "links": [
                    { "name": "blogs", "url": "/blogs" },
                    { "name": "help center", "url": "/help-center" },
                    { "name": "community", "url": "/community" },
                    { "name": "market place", "url": "/market-place" },
                    { "name": "events", "url": "/events" },
                    { "name": "my account", "url": "/my-account" },
                ],
            },
            {
                "id": 3,
                "header": "Company",
                "links": [
                    { "name": "pricing", "url": "/pricing" },
                    { "name": "about us", "url": "/about-us" },
                    { "name": "careers", "url": "/careers" },
                    { "name": "contact us", "url": "/contact-us" },
                ],
            },
            {
                "id": 4,
                "header": "Legal",
                "links": [
                    { "name": "terms of use", "url": "/terms-of-use" },
                    { "name": "privacy policy", "url": "/privacy-policy" },
                    { "name": "terms of use", "url": "/terms-of-use" },
                ],
            },
        ]
    }

    return (
        <footer className="w-full flex flex-col justify-between p-0 bg-[#1a1a1a] overflow-hidden text-white">
            <div className="flex flex-wrap gap-3 mb-3 justify-center lg:gap-52 md:gap-11 mt-12 sm:mb-[5.625rem]">
                {datas.main.map(items => {
                    return (
                        <div key={items.id} className="w-4/5 sm:w-1/4">
                            <Link href="/" passHref legacyBehavior>
                                <a className="flex items-center gap-2 mb-5">
                                    <Image 
                                        src="/logos/logo1.png" 
                                        width={120} 
                                        height={100} 
                                        alt="Logo"
                                    />
                                    <h1 className="font-bold text-2xl font-segoe_ui">{items.title}</h1>
                                </a>
                            </Link>
                            <p className="mb-8 text-lg font-normal">{items.location}</p>
                            <div className="flex gap-5 sm:gap-7">
                                {items.img.map((images, index) => 
                                    <Link href={images.url} key={images.name} passHref legacyBehavior>
                                        <a>
                                            <Image 
                                                src={`/icons/${images.name}.svg`} 
                                                width={index === 0 ? 7 : 16} 
                                                height={index === 0 ? 24 : 16} 
                                                alt={images.name}
                                            />
                                        </a>
                                    </Link>
                                )}
                            </div>
                        </div>
                    )
                })}
                <div className="flex flex-wrap gap-8 sm:gap-20 justify-center mb-5">
                    {datas.side.map(items => {
                        return (
                            <div key={items.id} className="flex flex-col gap-5">
                                <Link href={`/${items.header.toLowerCase().replace(/\s+/g, '-')}`} passHref legacyBehavior>
                                    <a>
                                        <h1 className="font-semibold text-2xl">{items.header}</h1>
                                    </a>
                                </Link>
                                <div className="flex flex-col gap-3">
                                    <ul>
                                        {items.links.map(link => 
                                            <li key={link.name}>
                                                <Link href={link.url} className="font-normal text-base capitalize">
                                                    {link.name}
                                                </Link>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="w-full px-1 border-t-2 border-[#7a7a7a] flex justify-between font-medium text-lg sm:px-[10.5rem] py-8">
                <p className="flex gap-2 items-center">
                    <Image 
                        src={"/icons/copyright.svg"} 
                        width={24} 
                        height={28} 
                        alt="Copy Right"
                    />
                    <Link href="/" passHref legacyBehavior>
                        <a className="hover:underline">
                            <span>2024 Sceptre</span>
                        </a>
                    </Link>
                </p>
                <span className="capitalize">all rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;
