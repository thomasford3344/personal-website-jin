import { NextResponse } from "next/server";

const workData = [
    {
        image: "/images/work/BeamNG GmbH.jpg",
        title: "Driving Simulation",
        company: "BeamNG GmbH",
        slug: "https://beamng.tech"
    },
    {
        image: "/images/work/SpaceFi.png",
        title: "SpaceFi NFT Staking",
        company: "SpaceFi",
        slug: "https://www.spacefi.io/Staking"
    },
    {
        image: "/images/work/Kurechii Studio.png",
        title: "Postknight 2",
        company: "Kurechii Studio",
        slug: "https://postknight.com"
    },
    {
        image: "/images/work/StarHub Limited.png",
        title: "giga!",
        company: "StarHub Limited",
        slug: "https://play.google.com/store/apps/details?id=com.starhub.giga"
    }
];




export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
