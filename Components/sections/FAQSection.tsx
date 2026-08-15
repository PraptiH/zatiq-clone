import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion"


export default function FAQSection() {

    const items = [
        {
            value: "item-1",
            trigger: "How does Zatiq help my business?",
            content: "Zatiq gives you everything you need to run your business online — all in one place. You can create a professional store in minutes, manage orders, accept payments, track inventory, and connect with customers easily. Whether you sell from home, a shop, or on social media, Zatiq helps you look professional, save time, and grow faster — without needing tech skills or a big budget.",
        },
        {
            value: "item-2",
            trigger: "Do I need technical skills to use Zatiq?",
            content: "Not at all. Zatiq is designed for non-technical users. You can create and manage your store easily with step-by-step guidance — no coding or design experience needed.",
        },
        {
            value: "item-3",
            trigger: "How much does it cost to use Zatiq?",
            content: "You can get started for just ৳500. We offer flexible plans based on your business stage, whether you're starting small or looking to scale.",
        },
        {
            value: "item-4",
            trigger: "Are there any hidden charges?",
            content: "No. All pricing is transparent. There are no hidden fees, setup costs, or surprise charges. What you see in your plan is exactly what you pay.",
        },
        {
            value: "item-5",
            trigger: "Is my data safe with Zatiq?",
            content: "Yes, your data is safe. Zatiq uses secure servers, encryption, and strict privacy practices to protect your store and customer information. We never share your data without your permission.",
        },
    ]

    return (
        <div>
            <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 text-center">Frequently Asked Questions</h1>

            <Accordion type="single"
                collapsible
                defaultValue="item-1" className="w-full max-w-5xl rounded-2xl mx-auto p-2 md:p-6 bg-[#fafbfc] shadow-sm mb-10">
                {items.map((item) => (
                    <AccordionItem key={item.value} value={item.value}
                        className="border-b last:border-b-0 px-4 ">
                        <AccordionTrigger className="font-medium text-black sm:text-lg md:text-xl hover:no-underline cursor-pointer">{item.trigger}</AccordionTrigger>
                        <AccordionContent className="px-2 md:px-4 pb-6 text-sm sm:text-base md:text-lg border-gray-200 leading-5 text-gray-500">{item.content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            <p className="text-center text-base text-gray-500 mt-10">For support or inquiries, <span className="text-blue-600 underline">contact us</span> directly.</p>
        </div>

    )
}