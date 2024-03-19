import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { CiCalendar } from "react-icons/ci";

function Profile() {
  return (
    <div className="w-[50%]">
      <div className=" ">
        <div className=" flex items-center gap-4">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-300 hover:cursor-pointer font-bold"
          >
            <IoMdArrowBack size="24px" />
          </Link>
          <div>
            <h1 className=" text-lg font-bold ">Bishal</h1>
            <p className=" font-semibold mb-2">10 post</p>
          </div>
        </div>

        <img
          className="w-[600px] h-[200px]"
          src="https://plus.unsplash.com/premium_photo-1710288964033-425341f80431?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D
    "
          alt=""
        />
        <div
          className="absolute top-52
          border-4 ml-2 border-white rounded-full"
        >
          <Avatar
            src="https://i.ytimg.com/vi/p5XtvhR4oUY/maxresdefault.jpg"
            size="100"
            round={true}
          />
        </div>
        <div className="text-right my-3">
          <button
            className=" px-4 py-1 rounded-full border border-gray-400 text-lg
          font-bold hover:bg-slate-500"
          >
            Edit Profile
          </button>
        </div>
        <div>
          <h1 className="font-bold">Bishal</h1>
          <p>@bishal2026</p>
        </div>
        <div className="flex items-center my-4">
          <CiCalendar size="24px" />
          <p> Joined March2024</p>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="flex  gap-2 items-center
         my-3"
          >
            <p>0</p>
            <h1 className="font-semibold">Following</h1>
          </div>
          <div
            className="flex gap-2 items-center
         my-3"
          >
            <p>0</p>
            <h1 className="font-semibold">Followers</h1>
          </div>
        </div>
        <div className=" border-2 border-gray-400"></div>
      </div>
    </div>
  );
}

export default Profile;
