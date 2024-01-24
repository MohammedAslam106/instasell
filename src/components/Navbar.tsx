'use client'
import Link from "next/link";
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { TbSettings, TbUser } from "react-icons/tb";

interface NavbarProps{
    
}

export default function Navbar({}:NavbarProps ){
    return(
        <>
            <nav className="px-10 py-5 border-b border-b-gray-700">
                <div className=" flex justify-between items-center ">
                    <ul className=" flex justify-center items-center gap-10">
                        <li className=" font-semibold text-[#4A4A4A] relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#8051FF] after:-bottom-1 after:left-0  nav-tabs">
                            <Link href={'#'} className="">
                                Home
                            </Link>
                        </li>
                        <li className=" font-semibold text-[#4A4A4A] relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#8051FF] after:-bottom-1 after:left-0  nav-tabs">
                            <Link href={'#'} className="">
                                Orders
                            </Link>
                        </li>
                        <li className=" font-semibold text-[#4A4A4A] relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#8051FF] after:-bottom-1 after:left-0  nav-tabs">
                            <Link href={'#'} className="">
                                Integrations
                            </Link>
                        </li>
                        <li className=" font-semibold text-[#4A4A4A] relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#8051FF] after:-bottom-1 after:left-0  nav-tabs">
                            <Link className='flex justify-center items-center gap-1' href={'#'}>
                                <span>
                                    Tracking Page
                                </span>
                                <MdOutlineKeyboardArrowDown />
                            </Link>
                        </li>
                        <li className=" font-semibold text-[#4A4A4A] relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#8051FF] after:-bottom-1 after:left-0  nav-tabs">
                            <Link href={'#'} className="">
                                Partner with Us
                            </Link>
                        </li>
                    </ul>
                    <ul className=" flex justify-between gap-10 items-center">
                        <li className=" font-medium max-w-40">
                            <input style={{backgroundImage:'url(./text.png)', backgroundRepeat:'no-repeat'}} type="text"  onChange={(e)=>{
                                if(e.target.value==''){
                                    e.currentTarget.style.backgroundImage='url(./text.png)'
                                }
                                else   e.currentTarget.style.backgroundImage='' 
                            }} className=" w-full border-b border-b-gray-700 outline-none " />
                        </li>
                        <li className=" flex justify-center items-center gap-1 font-medium">
                            <TbUser size={20} className="text-[#4A4A4A]"/>
                            <span className=" text-[#616161]">Account</span>
                        </li>
                        <li className=" flex justify-center items-center gap-1 font-medium">
                            <TbSettings size={20} className="text-[#4A4A4A]"/>
                            <span className=" text-[#616161]">Settings</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}