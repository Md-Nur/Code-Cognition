import React from "react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      imageUrl: "/services/customeSoftware.png",
    },
    {
      title: "Web Development",
      imageUrl: "/services/webDevelopment.png",
    },
    {
      title: "Mobile App Development",
      imageUrl: "/services/mobileDevelopement.png",
    },
    {
      title: "SQL Database Development",
      imageUrl: "/services/sqlDevelopment.png",
    },
    {
      title: "Video Editing",
      imageUrl: "/services/videoEditing.jpg",
    },
    {
      title: "Ui & Ux Designing",
      imageUrl: "/services/uiUx.png",
    },
  ];

  return (
    <section className="my-5">
      <h2 className="text-[#AAFF30] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center font-semibold uppercase mb-16">
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
