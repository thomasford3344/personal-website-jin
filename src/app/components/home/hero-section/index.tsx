import Image from "next/image"

const index = () => {
    return (
        <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
            <div className="container">
                <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
                    <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
                        <div>
                            <div className="flex items-center gap-8">
                                <h1>I'm Jin</h1>
                                <div className="wave">
                                <Image src={"/images/home/banner/wave-icon.svg"} alt="wave-icon" width={62} height={62} className=""/>
                                </div>
                            </div>
                            <h3>Senior Software Developer</h3>
                        </div>
                        <p className="text-secondary font-normal max-w-md xl:max-w-xl"><span className="font-bold">Senior Software Developer</span> with <span className="font-bold">13+ years</span> across full stack, web3, gaming, and mobile development, with recent work spanning BeamNG’s real-time ecosystem and SpaceFi’s blockchain infrastructure.</p>
                    </div>
                    <Image src={"/images/home/banner/banner-img.png"} alt="banner-img" width={600} height={750} className="block lg:hidden" />
                </div>
            </div>
            <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
                <Image src={"/images/home/banner/banner-img.png"} alt="banner-img" width={600} height={750} className=" absolute right-0 top-0 z-1" />
            </div>
        </section>
    )
}

export default index