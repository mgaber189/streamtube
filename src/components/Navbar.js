import Image from "next/image";
import logoImage from "@/assets/streamTube.png";
import GenreDropDown from "./GenreDropDown";
import { fetcher } from "@/lib/Fetcher";
import DropDown from "./DropDown";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import NavSearch from "./NavSearch";
// Use alias correctly

export default function NavBar() {
  return (
    <div className="flex items-center flex-col sm:flex-row gap-5 justify-between p-5 w-full backdrop-blur-2xl  transition-colors z-50 bg-[#12121280] sticky top-0 left-0 right-0">
      <div className="w-52 h-auto">
        <Link href={"/"}>
        
        <Image
          src={logoImage}
          width={100}
          height={100}
          alt="logo"
          className="w-full h-full"
        />
        </Link>
      </div>
      <div className="text-white flex space-x-2 gap-5 items-center">
        {/* Genre */}
        <DropDown />
        <NavSearch/>
        <ModeToggle />

      </div>
    </div>
  );
}
