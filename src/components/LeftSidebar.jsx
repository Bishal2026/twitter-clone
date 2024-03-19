import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoBookmarksOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

function LeftSidebar() {
  return (
    <div className="w-[20%]">
      <div className="my-4">
        <img
          className="w-[50px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpevfm2P0BtgC9LbXH1n2Xp-oR-iLX8xQTBg&usqp=CAU"
          alt=""
        />
      </div>
      <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-300 rounded-full">
        <div className="w-[24px]">
          <MdHomeFilled size="24px" />
        </div>
        <h1 className="font-bold text-lg ml-2">Home</h1>
      </div>
      <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-300 rounded-full">
        <div className="w-[24px]">
          <FaSearch size="24px" />
        </div>
        <h1 className="font-bold text-lg ml-2">Explore</h1>
      </div>
      <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-300 rounded-full">
        <div className="w-[24px]">
          <IoIosNotifications size="24px" />
        </div>
        <h1 className="font-bold text-lg ml-2">Notification</h1>
      </div>
      <NavLink
        to="/Profile"
        className="flex items-center my-2 px-4 py-2 hover:bg-gray-300 rounded-full"
      >
        <div className="w-[24px]">
          <CiUser size="24px" />
        </div>
        <h1 className="font-bold text-lg ml-2">Profile</h1>
      </NavLink>
      <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-300 rounded-full">
        <div className="w-[24px]">
          <IoBookmarksOutline size="24px" />
        </div>
        <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
      </div>
      <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-300 rounded-full">
        <div className="w-[24px]">
          <IoMdLogOut size="24px" />
        </div>
        <h1 className="font-bold text-lg ml-2">Logout</h1>
      </div>
      <button className="px-4 py-2 border-none bg-[#1D9BF0] text-md text-white w-full rounded-full  font-bold">
        Post
      </button>
    </div>
  );
}

export default LeftSidebar;
