import React from "react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      imageUrl: "/service1.png",
    },
    {
      title: "Web Development",
      imageUrl: "/service2.png",
    },
    {
      title: "Mobile App Development",
      imageUrl: "/service3.png",
    },
    {
      title: "SQL Database Development",
      imageUrl: "/service4.png",
    },
  ];

  return (
    <section className="my-5">
      <h2 className="text-[#AAFF30] text-[40px] text-center font-semibold uppercase mb-16">
        Our Programming Tech Services
      </h2>

      <div className="flex flex-wrap gap-10 items-center justify-center">
        {services.map((service, key) => (
          <div key={key} className="w-[544px] h-[544px] bg-white drop-shadow-2xl flex flex-col items-center justify-between">
            <Image
              src={service.imageUrl}
              alt={service.title}
              width={500}
              height={384}
              className="h-96"
            />
            <h3 className="text-[#23232B] text-[22px] text-center font-bold uppercase">
              {service.title}
            </h3>
            <button className="w-full bg-[#0063A4] text-white text-2xl font-bold h-16">Click to learn more</button>
          </div>
        ))}
      </div>
    </section>
  );
}
