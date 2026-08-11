
import { StaticImageData } from "next/image"
import sultan from "@/public/Images/sultan.webp"
import anika from "@/public/Images/anika.webp"
import rashidul from "@/public/Images/shamim.webp"
import fahmeed from "@/public/Images/anis.webp"
import piash from "@/public/Images/piash.webp"
import akram from "@/public/Images/akram.webp"

type Team = {
    id: number
    name: string
    role: string
    about: string
    avatar: StaticImageData
}

const teamMemberData: Team[] = [
    {
        id: 1,
        name: "Sultan Moni",
        role: "Co-Founder & CEO",
        about:
            "As the Chief Executive Officer, Sultan is committed to driving the company forward with visionary leadership.",
        avatar: sultan,
    },
    {
        id: 2,
        name: "Mumtahina Anika",
        role: "Co-Founder & COO",
        about:
            "As the Chief Operating Officer, Anika is dedicated to enhancing operational efficiency.",
        avatar: anika,
    },
    {
        id: 3,
        name: "Rashidul Hasan Shamim",
        role: "VP of Business",
        about:
            "As the Vice President of Business Development, Shamim is dedicated to crafting impactful strategies.",
        avatar: rashidul,
    },
    {
        id: 4,
        name: "Fahmeed Anis",
        role: "Head of Marketing",
        about:
            "With a passion for innovative strategies, Fahmeed leads our brand growth and engagement.",
        avatar: fahmeed,
    },
    {
        id: 5,
        name: "Shekh Ariful Islam Piash",
        role: "Chief Business Officer",
        about:
            "As our Chief Business Officer, Piash is dedicated to driving strategic growth and forging key partnerships.",
        avatar: piash,
    },
    {
        id: 6,
        name: "Akram Hossain",
        role: "Co-Founder",
        about:
            "As Co-Founder, Akram drives the company’s vision, strategy, and technological direction, leading innovation and long-term growth initiatives.",
        avatar: akram,
    },
]

export default teamMemberData

