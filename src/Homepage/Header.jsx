import React from "react";

import './Header.css'
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import chairImage from '../image/chair.png';
import screenImage from '../image/screen.png';
import keyboardImage from '../image/keyboard.png';
import playstationImage from '../image/playstation.png';
import { useState } from 'react';




const Header = () => {




    return (
        <>
            <header className="flex justify-around p-[40px] max-w-full items-center border-b-[1px]">
                <h1 className="text-4xl font-medium font-inter">Exclusive</h1>
                <div className=
                    "flex justify-between text-2xl space-x-8 font-poppins font-[400] text-center">
                    <a href="#">Home</a>
                    <a href="#">Contact</a>
                    <a href="#">About</a>
                    <a href="#">Sign Up</a>
                </div>
                <div className="flex relative w-fit  space-x-2 ">
                    <span className="relative">
                        <input className=
                            "bg-[#F5F5F5] p-5 w-[300px] h-9 p" type="text" placeholder=
                            "what are you looking for?" />
                        <span className="absolute top-2 right-2 text-2xl"><IoSearchOutline /></span>
                    </span>
                    <span className="text-3xl" ><CiHeart /></span>
                    <span className="text-3xl" ><AiOutlineShoppingCart /></span>


                </div>

            </header>
        </>
    )
}

export default Header;