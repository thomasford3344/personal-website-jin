import { NextResponse } from "next/server";

const workData = [
    {
        image: "/images/work/vieaura_optrix_platform.png",
        title: "OPTRIX Platform",
        company: "Vieaura Inc.",
        slug: "https://vieaura.com/what-we-do"
    },
    {
        image: "/images/work/cip_graphic.png",
        title: "Cyber Intelligence Platform",
        company: "RevBits LLC",
        slug: "https://revbits.com/cyber-intelligence-platform"
    }
];




export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
