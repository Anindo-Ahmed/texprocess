import React from "react";
import { IoIosSend } from "react-icons/io";

const Newsletter = () => {
    
  return (
    <div className="mt-32 bg-[#F6F5ED] text-center flex flex-col justify-center items-center md:py-20 space-y-9">
       <div className="rounded-full border p-3 bg-orange-400">
        <IoIosSend className="text-black text-3xl "/>
        </div> 
      <h2 className="text-black text-2xl">
        Get the best blog stories into your inbox!
      </h2>
      <section class="flex flex-col mx-auto overflow-hidden rounded-lg md:flex-row pb-5">
        <div class="flex items-center justify-center pb-6 md:py-0 lg:w-full">
          <form>
            <div class="flex flex-col p-1.5 overflow-hidden lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-20 focus-within:border-gray-400 focus-within:ring-gray-400">
              <input
                class="px-6 py-2 text-gray-500 placeholder-gray-400 bg-white outline-none focus:placeholder-transparent w-full"
                type="text"
                name="email"
                placeholder="Enter your email address"
                aria-label="Enter your email"
              />

              <button class="px-4 py-5 text-sm font-medium tracking-wider bg-white uppercase transition-colors duration-300 transform text-neutral-600 rounded-none border-l-2 focus:outline-none">
                subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
