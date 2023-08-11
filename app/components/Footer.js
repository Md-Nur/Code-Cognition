import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="text-white text-center pt-10">
      <div className="bg-[#16A072] flex flex-wrap gap-10 justify-evenly px-5 py-44">
        <div className="w-[500px]">
          <p className="text-xl font-semibold">
            <span className="text-[#AAFF30] text-4xl lg:text-5xl">Code</span>{" "}
            <span className="text-2xl lg:text-3xl">&</span>
            <br /> <span className="text-3xl lg:text-4xl">Cognition</span>
          </p>
          <p className="lg:text-xl">
            Is an ed-tech platform that trains kids and teenagers in programming
            and other tech skills
          </p>
        </div>
        <div className="">
          <p className="text:xl lg:text-2xl font-semibold pb-5 lg:text-left">
            Quick Links
          </p>
          <ul className="list-none lg:text-left text-lg lg:text-xl leading-10">
            <li>About StackJunior</li>
            <li>Courses</li>
            <li>Career</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Send Feedback</li>
            <li>Partnerships</li>
          </ul>
        </div>
        <div>
          <div className="">
            <p className="text-xl lg:text-2xl font-semibold pb-5 lg:text-left">Socials</p>
            <ul className="list-none lg:text-left flex gap-5">
              <li>
                <Image src={"/social/facebook.svg"} height={40} width={40} />
              </li>
              <li>
                <Image src={"/social/twitter.svg"} height={40} width={40} />
              </li>
              <li>
                <Image src={"/social/instagram.svg"} height={40} width={40} />
              </li>
              <li>
                <Image src={"/social/youtube.svg"} height={40} width={40} />
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-lg lg:text-xl lg:text-left mt-5 leading-10">Contact Us</p>
            <ul className="lg:text-left text-xl leading-10">
              <li>
                <a href="tel: 01521758709">0121758709</a>
              </li>
              <li>
                <a href="tel: 01770171779">01770171779</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#066A4C] p-9">
        <p className="text-lg lg:text-xl font-semibold">Code & Cognition</p>
        <p className="">© 2023 Code & Cognition. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
