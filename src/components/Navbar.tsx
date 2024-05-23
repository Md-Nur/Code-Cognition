import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import logo from "../../public/logoThum.png";
import NavRoutes from "./NavRoutes";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start mx-3">
        <div className="dropdown">
          {/*  Add drawer button here */}
          <label htmlFor="my-drawer" className="">
            <IoMenu className="h-6 w-6" />
          </label>
        </div>
        <Link href="/" className="flex items-center gap-1">
          <Image src={logo} alt="logo" width={40} height={40} />
          Code & Cognition
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavRoutes />
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
