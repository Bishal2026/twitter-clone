import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

function RightSidebar() {
  return (
    <div className="w-[20%]">
      <div className="p-2 bg-gray-100 rounded-full outline-none  flex items-center gap-1 my-4">
        <CiSearch size="24px" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="outline-none  bg-gray-100 "
        />
      </div>
      <div className="p-4 bg-gray-200 rounded">
        <h1 className=" font-bold text-black "> Who to Follow</h1>
        <div
          className="flex items-center
         justify-between mt-2"
        >
          <div className=" flex items-center">
            <Avatar
              src="https://i.ytimg.com/vi/p5XtvhR4oUY/maxresdefault.jpg"
              size="30"
              round={true}
            />
            <div className=" ml-1">
              <h1 className="font-bold ">Bishal</h1>
              <p>@bishal2026</p>
            </div>
          </div>

          <button className="bg-black rounded-full px-3 py-2 text-white">
            {" "}
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
