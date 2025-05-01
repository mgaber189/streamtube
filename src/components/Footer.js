import Image from "next/image";
import React from "react";
import logoImage from "@/assets/streamTube.png";
import Link from "next/link";
const infoArray = [
  {
    title: "About us",
    href: "/",
  },
  {
    title: "Contact us",
    href: "/",
  },
  {
    title: "Terms & Conditions",
    href: "/",
  },
  {
    title: "Privacy Policy",
    href: "/",
  },
  {
    title: "Press",
    href: "/",
  },
];

const contactArray = [
  {
    title: "Videos",
    href: "/",
  },
  {
    title: "Gaming",
    href: "/",
  },
  {
    title: "Travel",
    href: "/",
  },
  {
    title: "Music",
    href: "/",
  },
  {
    title: "Sports",
    href: "/",
  },
];
function Footer() {
  return (
    <div className="py-10 px-5 flex flex-wrap justify-between gap-5 bg-[#191919] mt-5">
      {/* About Us */}
      <div className="flex flex-col items-start w-full sm:w-5/12 lg:w-1/4 flex-shrink-0">
        <div className="relative flex items-center justify-between py-5 border-b border-b-gray-600 my-5 w-full text-white">
          <p className="text-xl font-medium uppercase">About us</p>
          <div className="w-16 h-1 bg-red-600 absolute left-0 -bottom-[1.5px] z-10"></div>
        </div>
        <div className="w-40 h-auto">
          <Image
            src={logoImage}
            width={100}
            height={100}
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <p className="text-gray-200 text-sm leading-6 tracking-wide mt-5 max-w-72">
          Pellentesque suscipit pellentesque luctus. Nulla vel tellus nec risus
          tempus feugiat. Donec nibh orci, sollicitudin sit amet gravida at,
          varius sit amet sem.
        </p>
      </div>

      {/* Information */}
      <div className="flex flex-col items-start w-full sm:w-5/12 lg:w-1/5 flex-shrink-0">
        <div className="relative flex items-center justify-between py-5 border-b border-b-gray-600 my-5 w-full text-white">
          <p className="text-xl font-medium uppercase">Information</p>
          <div className="w-16 h-1 bg-red-600 absolute left-0 -bottom-[1.5px] z-10"></div>
        </div>
        <div className="w-full">
          {infoArray.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group text-white">
              <span className="w-2 h-2 rounded-full inline-flex border border-red-700 group-hover:bg-red-700 duration-200" />
              {item?.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Category */}
      <div className="flex flex-col items-start w-full sm:w-5/12 lg:w-1/5 flex-shrink-0">
        <div className="relative flex items-center justify-between py-5 border-b border-b-gray-600 my-5 w-full text-white">
          <p className="text-xl font-medium uppercase">Category</p>
          <div className="w-16 h-1 bg-red-600 absolute left-0 -bottom-[1.5px] z-10"></div>
        </div>
        <div className="w-full">
          {contactArray.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group text-white">
              <span className="w-2 h-2 rounded-full inline-flex border border-red-700 group-hover:bg-red-700 duration-200" />
              {item?.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Contact with Us */}
      <div className="flex flex-col items-start w-full sm:w-5/12 lg:w-1/5 flex-shrink-0">
        <div className="relative flex items-center justify-between py-5 border-b border-b-gray-600 my-5 w-full text-white">
          <p className="text-xl font-medium uppercase">Contact with us</p>
          <div className="w-16 h-1 bg-red-600 absolute left-0 -bottom-[1.5px] z-10"></div>
        </div>
        <div className="text-gray-300 text-sm flex flex-col gap-2">
          <p>
            Phone: <span className="text-white font-medium">01125992923</span>
          </p>
          <p>
            Email:{" "}
            <span className="text-white font-medium">Mg3845617@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
