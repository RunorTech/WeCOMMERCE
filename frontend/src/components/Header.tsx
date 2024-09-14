// import React from 'react'
// import Logo from "./Logo"
import { RiSearch2Line } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import { TiThMenuOutline } from "react-icons/ti";
import { IoHome } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import styles from "../index.module.css"
import { useEffect, useState } from "react";
import WaterMarker from "./WaterMarker";
import { Link } from "react-router-dom";

const Header = () => {

  const [registeredUser, setRegisteredUser] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImg, setProfileImg] = useState(false);
  const username = "John"
  const [hidden, setHidden] = useState(" -left-[100%] transition-all duration-700 ease-in-out");

  

  useEffect(() => {
    setRegisteredUser(true);
    setIsLoggedIn(false);
    setProfileImg(false);
  },[])

  const showMobileNav = () => {
    setHidden(" left-0 transition-all duration-700 ease-in-out")
  }
  const closeMobileNav = () => {
    setHidden("  -left-[100%]  transition-all duration-700 ease-in-out ")
  }

  return (
    <header className={`${styles.glassmorphisim} h-16  shadow-sm shadow-neutral-300 relative `}>
      <div className=" h-full container mx-auto px-2 flex items-center justify-between">

        <div className=" relative z-0">
          <div className="relative text-[2rem] dark:text-slate-700 z-10">
           <Link to="/">
           <IoHome/>
           </Link>
          </div>
          <div className="absolute -top-5 -right-12 z-0">
            <WaterMarker w={100} h={72} />
          </div>
        </div>

        <div className=" hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md focus-within:shadow-neutral-400">
          <div className="text-lg min-w-[50px] h-8 bg-lime-400 flex items-center justify-center rounded-l-full text-white">
            <RiSearch2Line />
          </div>
          <input type="text" placeholder="search items here" className="w-full outline-none bg-transparent  pl-2" />
        </div>

        <div className=" hidden  sm:flex items-center cursor-pointer gap-4 ">

          <div id="cart" className="text-[2rem] relative">
            <span className=""> <CiShoppingCart /></span>
            <div className="absolute bg-lime-700 w-fit text-center h-2  py-3 px-2 -top-3 -right-3  flex items-center justify-center rounded-full">
              <p className="text-base  text-white font-bold ">0</p>
            </div>
          </div>

          <div id="profile-user-actions">
            {isLoggedIn ? (<div className="flex items-center gap-2">
              {profileImg ? (<div>profile image</div>) : (<div className="text-[2rem]">
                <RxAvatar />
              </div>)}
              <div id="user-name">
                <p className="">{username}</p>
              </div>
              <div className=" active:translate-y-2 font-semibold text-white bg-lime-600 py-1 px-3 rounded-md hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-md hover:shadow-neutral-400 hover:bg-lime-500 transition-all duration-700 ease-in-out">
                SignOut
              </div>
            </div>) : (<div>
              {registeredUser ? (<Link to="/login"><div className=" active:translate-y-2 font-semibold text-white bg-lime-600 py-1 px-3 rounded-md hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-md hover:shadow-neutral-400 hover:bg-lime-500 transition-all duration-700 ease-in-out">Login</div></Link>)
                : (<Link to="/sign-up"><div className=" active:translate-y-2 font-semibold text-white bg-lime-600 py-1 px-3 rounded-md hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-md hover:shadow-neutral-400 hover:bg-lime-500 transition-all duration-700 ease-in-out">Sign Up</div></Link>)}
            </div>)}
          </div>

        </div>

        <div onClick={showMobileNav} className=" hidden max-sm:flex text-[2rem] transition-all duration-700 ease-in-out ">
          <TiThMenuOutline />
        </div>

      </div>

      <div id="mobile-nav"  className={` ${hidden} absolute top-0 bg-white dark:bg-gray-950 dark:text-white z-50  w-full h-screen transition-all duration-700 ease-in-out `}>
        <div onClick={closeMobileNav} className=" text-[2rem] absolute right-4 top-4 transition-all duration-700 ease-in-out">
          <IoMdClose />
        </div>
        <div className=" container h-full px-4 pt-10  ">
          <div className="flex  flex-col gap-3">
            <div id="profile-user-actions">
              {isLoggedIn ? (<div className="flex items-center gap-2">
                {profileImg ? (<div>profile image</div>) : (<div className="text-[2rem]">
                  <RxAvatar />
                </div>)}
                <div id="user-name">
                  <p className="">{username}</p>
                </div>
                <div className=" absolute bottom-4 right-4 active:translate-y-2 font-semibold text-white bg-lime-600 py-1 px-3 rounded-md  transition-all duration-700 ease-in-out">
                  SignOut
                </div>
              </div>) : (<div>
                {registeredUser ? (<Link to="/login"><div onClick={closeMobileNav} className=" absolute bottom-4 right-4 active:translate-y-2 font-semibold text-white bg-lime-600 py-1 px-3 rounded-md transition-all duration-700 ease-in-out">Login</div></Link>)
                  : (<Link to="/sign-up"><div onClick={closeMobileNav} className=" absolute bottom-4 right-4 active:translate-y-2 font-semibold text-white bg-lime-600 py-1 px-3 rounded-md transition-all duration-700 ease-in-out">Sign Up</div></Link>)}
              </div>)}
            </div>

            <div className="flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md focus-within:shadow-neutral-400">
              <div className="text-lg min-w-[50px] h-8 bg-lime-400 flex items-center justify-center rounded-l-full text-white">
                <RiSearch2Line />
              </div>
              <input type="text" placeholder="search items here" className="w-full outline-none bg-transparent  pl-2" />
            </div>

            <Link to={`/store`}><div onClick={closeMobileNav} className=" active:translate-y-2 font-semibold text-white bg-lime-600 py-1 px-3 rounded-md transition-all duration-700 ease-in-out">create store</div></Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
