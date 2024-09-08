import React from "react";
import Spanner from '../image/spanner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


import './Header.css'
const MenuTypeProducts = () => {
    return (
        <>
            <div className="flex ">
                <div className="grid grid-cols-1 border-r gap-2 w-[25%] pl-[100px] pt-11 pr-5 font-poppins text-[20px] font-[400] ">
                    <a href="" className="flex justify-between items-center">Woman’s Fashion <FontAwesomeIcon icon={faAngleRight} /></a>
                    <a href="" className="flex justify-between items-center">Men’s Fashion <FontAwesomeIcon icon={faAngleRight} /></a>
                    <a href="">Electronics</a>
                    <a href="">Home & Lifestyle</a>
                    <a href="">Medicine</a>
                    <a href="">Sports & Outdoor</a>
                    <a href="">Baby’s & Toys</a>
                    <a href="">Groceries & Pets</a>
                    <a href="">Health & Beauty</a>
                </div>
                <div className="item-center pt-11 pl-20">
                    <img className="" src={Spanner} alt="" />
                </div>

            </div>
        </>
    )
}
export default MenuTypeProducts;