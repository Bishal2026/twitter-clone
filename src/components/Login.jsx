import React, { useState } from "react";

function Login() {
  const [isLogin, setisLogin] = useState(true);

  const loginSignupHandeler = () => {
    setisLogin(!isLogin);
  };

  return (
    <div className="w-[80%] h-screen  flex items-center justify-center">
      <div className="w-[50%]">
        <img
          className="ml-5 w-[580px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpevfm2P0BtgC9LbXH1n2Xp-oR-iLX8xQTBg&usqp=CAU"
          alt=""
        />
      </div>
      <div className="">
        <h1 className="text-5xl font-bold mb-5">Happening now</h1>
        <p className="font-bold">Join today.</p>
        <form className=" flex flex-col">
          {!isLogin && (
            <>
              <input
                type="text"
                className="outline-none border-none
          p-4 mx-2 my-1"
                placeholder="username"
              />
              <input
                type="text"
                className="outline-none border-none
          p-4 mx-2 my-1"
                placeholder="Name"
              />
            </>
          )}
          <input
            type="email"
            className="outline-none border-none
          p-4 mx-2 my-1"
            placeholder="Email"
          />
          <input
            className="outline-none 
           p-4 mx-2 my-1 rounded-full "
            type="password"
            placeholder="password"
          />
          <button
            className=" bg-[#1D9BF0] w-full px-4 
          py-3 rounded-full border-none text-white text-lg"
          >
            {isLogin ? "Login" : "create Account"}
          </button>
          <h1 className="ml-2 my-2">
            {isLogin ? "Don`t any account !!" : "Already Have a Account ?"}
            <span
              onClick={loginSignupHandeler}
              className="font-bold ml-2 cursor-pointer"
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
}

export default Login;
