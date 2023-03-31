import {FaShoppingCart,FaUserAlt,FaSearch} from 'react-icons/fa'
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  return (
          <div
    className={`h-[5.5rem] z-50 relative ${
      router.asPath === "/" ? "bg-transparent" : "bg-secondary"
    }`}
  >
      <div className="container mx-auto z-50 text-white flex justify-between items-center h-full">
      <div className="flex  z-50 gap-x-4 items-center">
  <Logo className="mr-4" />
</div>
          <nav
           className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden  ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
        <ul className="flex gap-x-2 z-50 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/location">Location</Link>
            </li>
          </ul>
          {isMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex  z-50 gap-x-4 items-center">
          <Link href="/auth/login">
            <FaUserAlt className="hover:text-primary cursor-pointer transition-all" />
          </Link>
          <a href="#">
            <FaShoppingCart className="hover:text-primary cursor-pointer transition-all" />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary cursor-pointer transition-all" />
          </button>
            <button className="btn-primary md:inline-block hidden sm">Order Online</button>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};
export default Header;