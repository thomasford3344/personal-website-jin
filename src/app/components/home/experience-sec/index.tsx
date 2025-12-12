import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2024-Current",
      title: "Full Stack Engineer",
      company: "BeamNG GmbH",
      type: "Remote",
      description:
        "Led full-stack development at BeamNG, delivering scalable backend services, modern UI tooling, CI/CD-driven reliability improvements, and integrations supporting the real-time physics engine and online ecosystem.",
    },
    {
      year: "2023-2024",
      title: "Web3 & NFT Developer",
      company: "SpaceFi",
      type: "Remote",
      description:
        "Designed gas-efficient smart contracts and full-stack Web3 features for SpaceFi's DEX, NFT marketplace, Spacebase, and Launchpad on zkSync, while improving DeFi mechanics, security, and blockchain interaction workflows.",
    },
    {
      year: "2020-2023",
      title: "Smart Contract Developer",
      company: "SpaceFi",
      type: "Remote",
      description: "Built secure, modular, and gas-efficient Layer-2 contracts for SpaceFi's DeFi, NFT, and Launchpad features with full testing, auditing, and frontend integration.",
    },
    {
      year: "2017-2020",
      title: "Full Stack Developer",
      company: "Skyrus",
      type: "On-site",
      description: "Built Skyrus' token swap, exchange modules, APIs, and full-stack interfaces with secure backend services, blockchain integrations, and optimized trading UX for a scalable crypto platform.",
    },
    {
      year: "2014-2016",
      title: "Unity Game Developer",
      company: "Kurechii Studio",
      type: "On-site",
      description: "Developed core gameplay systems and Unity C# features for Postknight 2, optimizing mobile performance while collaborating with cross-disciplinary teams to deliver polished, production-ready content.",
    },
    {
      year: "2012-2014",
      title: "Mobile App Developer",
      company: "StarHub Limited",
      type: "On-site",
      description: "Supported the development and maintenance of StarHub's mobile apps by building UI components, integrating basic features, fixing bugs, and assisting senior engineers across both iOS and Android projects.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Experience</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                <div className="">
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                <div className=" relative">
                  {index < experiences.length && (
                    <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? "h-40" : "h-30"} bg-softGray`}></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                        index === 1 ? "border-primary" : "border-black"
                      }`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-normal">{exp.company}</span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
