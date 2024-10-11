import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
    BarChart,
    Code,
    DollarSign,
    Headphones,
    PaintBucket,
    Settings,
    UserPlus

} from "lucide-react"

interface DropDownMenuProps {
    onClose: () => void;
}


const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {

    const handleLinkClick = () => {
        onClose();
    };


    return (
        <div className="mt-10 w-screen h-screen bg-white px-4 items-center justify-center absolute right-0 xl:hidden"

        >
            <Accordion
                defaultValue={'item-1'}
                className="pl-2"
                type="single"
                collapsible
            >
                <AccordionItem className="mt-6 border-b" value="item-1">
                    <AccordionTrigger>
                        Who we are
                    </AccordionTrigger>
                    <AccordionContent
                        defaultValue={'item-1'}
                        className="space-y-2"
                    >
                        <Link href="/ecommerce"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <BarChart className=" h-6 w-5 mr-2 text-red-400" />
                            </div>
                            <div>Sales</div>

                        </Link>

                        <Link href="/api-management"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Code className=" h-6 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>Api</div>

                        </Link>

                        <Link href="/history"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <DollarSign className=" h-6 w-5 mr-2 text-purple-400" />
                            </div>
                            <div>Growth</div>

                        </Link>

                        <Link href="/about"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Headphones className=" h-6 w-5 mr-2 text-green-400" />
                            </div>
                            <div>Listen</div>

                        </Link>

                        <Link href="/ecommerce"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <UserPlus className=" h-6 w-5 mr-2 text-blue-400" />
                            </div>
                            <div>Gifts</div>

                        </Link>

                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-6 border-b" value="item-2">
                    <AccordionTrigger>
                        Aim
                    </AccordionTrigger>
                    <AccordionContent
                        className="space-y-2"
                    >
                        <Link href="/ecommerce"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <BarChart className=" h-6 w-5 mr-2 text-red-400" />
                            </div>
                            <div>Sales</div>

                        </Link>

                        <Link href="/api-management"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Code className=" h-6 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>Api</div>

                        </Link>

                        <Link href="/history"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <DollarSign className=" h-6 w-5 mr-2 text-purple-400" />
                            </div>
                            <div>Growth</div>

                        </Link>

                        <Link href="/about"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Headphones className=" h-6 w-5 mr-2 text-green-400" />
                            </div>
                            <div>Listen</div>

                        </Link>

                        <Link href="/ecommerce"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <UserPlus className=" h-6 w-5 mr-2 text-blue-400" />
                            </div>
                            <div>Gifts</div>

                        </Link>

                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-6 border-b" value="item-3">
                    <AccordionTrigger>
                        Usage
                    </AccordionTrigger>
                    <AccordionContent
                        className="space-y-2"
                    >
                        <Link href="/ecommerce"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <BarChart className=" h-6 w-5 mr-2 text-red-400" />
                            </div>
                            <div>Sales</div>

                        </Link>

                        <Link href="/api-management"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Code className=" h-6 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>Api</div>

                        </Link>

                        <Link href="/history"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <DollarSign className=" h-6 w-5 mr-2 text-purple-400" />
                            </div>
                            <div>Growth</div>

                        </Link>

                        <Link href="/about"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Headphones className=" h-6 w-5 mr-2 text-green-400" />
                            </div>
                            <div>Listen</div>

                        </Link>

                        <Link href="/ecommerce"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <UserPlus className=" h-6 w-5 mr-2 text-blue-400" />
                            </div>
                            <div>Gifts</div>

                        </Link>

                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-6 border-b" value="item-4">
                    <AccordionTrigger>
                        The Project
                    </AccordionTrigger>
                    <AccordionContent
                        className="space-y-2"
                    >
                        <Link href="/ecommerce"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <BarChart className=" h-6 w-5 mr-2 text-red-400" />
                            </div>
                            <div>Sales</div>

                        </Link>

                        <Link href="/api-management"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Code className=" h-6 w-5 mr-2 text-orange-400" />
                            </div>
                            <div>Api</div>

                        </Link>

                        <Link href="/history"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <DollarSign className=" h-6 w-5 mr-2 text-purple-400" />
                            </div>
                            <div>Growth</div>

                        </Link>

                        <Link href="/about"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Headphones className=" h-6 w-5 mr-2 text-green-400" />
                            </div>
                            <div>Listen</div>

                        </Link>

                        <Link href="/ecommerce"
                            className="flex"
                            onClick={handleLinkClick}
                        >
                            <div>
                                <UserPlus className=" h-6 w-5 mr-2 text-blue-400" />
                            </div>
                            <div>Gifts</div>

                        </Link>

                    </AccordionContent>
                </AccordionItem>

            <Link
            href={"/pricing"}
            className="flex flex-1 items-center justify-between py-6 border-b">
                Pricing
                </Link> 
                <Link
            href={"/Contact"}
            className="flex flex-1 items-center justify-between py-6 border-b">
                Request a demo
                </Link>    
            </Accordion>
            <div className="pt-12">
                <div className="space-y-4 flex flex-col px-4">
                    <Button className="w-full">
                    Get Sceptre free
                    </Button>
                </div>

                <div className="space-y-4 flex flex-col px-4 mt-4">
                    <Button 
                    className="w-full"
                    variant={"outline"}
                    >
                    <Link href={"/Login"}>
                        Log in
                    </Link>
                    </Button>
                </div>

            </div>
        </div>);
}
export default DropDownMenu;