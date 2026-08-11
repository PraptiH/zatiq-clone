import type { StaticImageData } from "next/image"
import farzana from "@/public/Images/farzana-haque.webp"
import shamim from "@/public/Images/shamim-reza.webp"
import lubna from "@/public/Images/lubna-akhter.webp"
import faruk from "@/public/Images/faruk-hossain.webp"
import taslima from "@/public/Images/taslima-haque.webp"
import sumaiya from "@/public/Images/sumaiya-jahan.webp"
import raihan from "@/public/Images/raihan-ahmed.webp"
import sourav from "@/public/Images/sourav-das.webp"
import jannatul from "@/public/Images/jannatul-ferdous.webp"
import esha from "@/public/Images/esha-haque.webp"
import sharmin from "@/public/Images/sharmin-sultana.webp"
import arif from "@/public/Images/mohammad-arif.webp"
import omar from "@/public/Images/omar-faruk.webp"
import alam from "@/public/Images/shahidul-alam.webp"
import tasnia from "@/public/Images/tasnia-zerin.webp"
import karim from "@/public/Images/rezaul-karim.webp"
import shahana from "@/public/Images/shahana-begum.webp"
import arafat from "@/public/Images/arafat-imam.webp"
import nayeem from "@/public/Images/nayeem-ullah.webp"
import imran from "@/public/Images/imran-kabir.webp"

type Testimonial = {
    id: number
    name: string
    role: string
    message: string
    avatar: StaticImageData
}
const testimonialData: Testimonial[] = [
    {
        id: 1,
        name: "Farzana Haque",
        role: "Owner, Mrittika",
        message:
            "Zatiq lets me manage orders, payments, and delivery from one dashboard. It saves time and makes my small shop feel professional.",
        avatar: farzana,
    },
    {
        id: 2,
        name: "Shamim Reza",
        role: "Proprietor, Deshi Look",
        message:
            "Zatiq gave me a full website to build my brand. Customers can browse, order, and pay easily. I feel like a real business owner now.",
        avatar: shamim,
    },
    {
        id: 3,
        name: "Lubna Akhter",
        role: "Founder, Cake Bari",
        message:
            "Zatiq helped me create a shop where customers see my cakes and order easily. It made my bakery more organized and professional.",
        avatar: lubna,
    },
    {
        id: 4,
        name: "Faruk Hossain",
        role: "Owner, SmartLink Mobile Hub",
        message:
            "I used to track orders in a notebook. Now Zatiq helps me manage stock, payments, and orders all in one place. It's so much easier.",
        avatar: faruk,
    },
    {
        id: 5,
        name: "Taslima Haque",
        role: "Founder, Gorom Gorom Kitchen",
        message:
            "Zatiq made it easy to list meals, take pre-orders, and track everything. No more phone calls for every order—it's now hassle-free.",
        avatar: taslima,
    },
    {
        id: 6,
        name: "Sumaiya Jahan",
        role: "Founder, Box & Bloom",
        message:
            "Zatiq gave me a beautiful store for gift boxes. Customers browse, choose items, and order smoothly. It made my business feel like a brand.",
        avatar: sumaiya,
    },
    {
        id: 7,
        name: "Raihan Ahmed",
        role: "Owner, PrintBond",
        message:
            "Zatiq lets customers upload designs and order mugs or t-shirts easily. Now, custom orders are smooth and organized.",
        avatar: raihan,
    },
    {
        id: 8,
        name: "Sourav Das",
        role: "Owner, Bornomala",
        message:
            "Zatiq turned my random online bookstore posts into a full shop with search and categories. Now customers easily find what they need.",
        avatar: sourav,
    },
    {
        id: 9,
        name: "Jannatul Ferdous",
        role: "Founder, Prokriti Roop",
        message:
            "Zatiq lets me showcase skincare items without constant chatting. One store link now shares all info—saving lots of time.",
        avatar: jannatul,
    },
    {
        id: 10,
        name: "Esha Haque",
        role: "Founder, RongGolpo",
        message:
            "After selling at fairs, Zatiq gave me a permanent online shop. Now, customers can always find and buy my crafts.",
        avatar: esha,
    },
    {
        id: 11,
        name: "Sharmin Sultana",
        role: "Founder, FitBite",
        message:
            "Zatiq helped me set up weekly meal plans online. Customers pick and pay easily. It feels organized and professional.",
        avatar: sharmin,
    },
    {
        id: 12,
        name: "Mohammad Arif",
        role: "Owner, Ushnota",
        message:
            "Zatiq let me upload winter clothes fast, manage orders, and start selling right when the season began.",
        avatar: arif,
    },
    {
        id: 13,
        name: "Md. Omar Faruk",
        role: "Owner, Barakah House",
        message:
            "Zatiq gave me an elegant store for Islamic decor. Customers can now order without endless chatting.",
        avatar: omar,
    },
    {
        id: 14,
        name: "Shahidul Alam",
        role: "Owner, WalkBangla",
        message:
            "Zatiq's product variation system fixed order errors. Buyers choose size and color easily. No more confusion.",
        avatar: alam,
    },
    {
        id: 15,
        name: "Tasnia Zerin",
        role: "Founder, Arshinagar",
        message:
            "Zatiq gave my handmade jewelry a shop that matches its beauty. Customers enjoy browsing and ordering clearly.",
        avatar: tasnia,
    },
    {
        id: 16,
        name: "Rezaul Karim",
        role: "Founder, Legacy Leather",
        message:
            "Zatiq made it easy to show leather goods online, arrange items, and take payments. My shop looks professional now.",
        avatar: karim,
    },
    {
        id: 17,
        name: "Shahana Begum",
        role: "Owner, RannaGhar Delights",
        message:
            "Zatiq displays all my pickles and chutneys in one link. No more repeating prices—just trust and smooth orders.",
        avatar: shahana,
    },
    {
        id: 18,
        name: "Arafat Imam",
        role: "Founder, Gamer's Grid",
        message:
            "Zatiq gave my tech gear shop a clean, bilingual site to list specs and take orders easily. It looks smart now.",
        avatar: arafat,
    },
    {
        id: 19,
        name: "Nayeem Ullah",
        role: "Co-founder, Madhumati Fabrics",
        message:
            "Zatiq helped us turn our bedsheet business into an organized online shop. Now buyers from anywhere can view and order.",
        avatar: nayeem,
    },
    {
        id: 20,
        name: "Imran Kabir",
        role: "Owner, MatiGolpo",
        message:
            "Zatiq made it easy to show pottery online and take orders with delivery details. Now I reach more customers.",
        avatar: imran,
    },
]
export default testimonialData