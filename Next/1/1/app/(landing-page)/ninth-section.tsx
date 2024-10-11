import Faq from "@/components/ui/faq"

const NinthSection = () => {

    const data = [
        {
            id: "1",
            header: "How do i get started with Sceptre",
            paragraph: "To get started on Sceptre, create an account by clicking the \"Sign Up\" button on the homepage. Fill in the required information, verify your email, and you’re ready to shop!",
        },
        {
            id: "2",
            header: "What is your return policy",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: "3",
            header: "Do you offer international shipping",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: "4",
            header: "Do you offer customer care services",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: "5",
            header: "How long does it take to process a refund",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: "6",
            header: "Is my personal info secure",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: "7",
            header: "What should i do if i encounter a payment error",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ]

    return (
        <div className="flex flex-col w-4/5 items-center mx-auto font-outfit">
            <h1 className="font-medium text-5xl mb-10 text-center">Frequently Asked Questions</h1>
            {
                data.map(items => {
                    return (
                        <Faq 
                            key={items.id}
                            {...items}
                        />
                    )
                })
            }
        </div>
    )
}

export default NinthSection