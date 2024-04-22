import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useConnection } from "../Utils/connection";

export default function NavBar({setState}) {
  const connexion = useConnection();
  const navigate= useNavigate();
  return (
    <div class="container mx-auto relative">
      <nav class="flex flex-wrap items-center px-4">
        <div
          class="cursor-pointer font-bold font-sans hover:text-opacity-75 inline-flex items-center leading-none mr-4 space-x-1 text-primary-500 text-xl uppercase"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            space="preserve"
            fill="currentColor"
            viewBox="0 0 100 100"
            height="2.5em"
          >
            <path d="M38.333 80a11.571 11.571 0 0 1-7.646-2.883A11.724 11.724 0 0 1 26.834 70H10V46.667L43.333 40l20-20H90v26.667H43.995l-27.328 5.465v11.2h11.166a11.787 11.787 0 0 1 4.212-4.807 11.563 11.563 0 0 1 12.577 0 11.789 11.789 0 0 1 4.213 4.807h7.833V70h-6.837a11.719 11.719 0 0 1-3.853 7.117A11.571 11.571 0 0 1 38.333 80Zm0-16.667a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5.001-5Zm27.761-36.666L52.762 40h30.571V26.667Z"></path>
            <path
              d="M56.667 63.333h-7.833a11.6 11.6 0 0 0-21 0H16.667v-11.2l27.328-5.465h12.672Z"
              opacity="0.2"
            ></path>
            <path d="M90 63.333H80v-10h-6.667v10h-10V70h10v10H80V70h10Z"></path>
            <path d="M52.762 40h30.571V26.667H66.094Z" opacity="0.2"></path>
          </svg>
          <span>Prime Drive</span>{" "}
        </div>
        <button
          class="hover:bg-primary-500 hover:text-white ml-auto px-3 py-2 rounded text-white lg:hidden"
          data-name="nav-toggler"
          data-pg-ia='{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"class.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}'
          data-pg-ia-apply="$nav [data-name=nav-toggler]"
        >
          <span class="block border-b-2 border-current my-1 w-6"></span>
          <span class="block border-b-2 border-current my-1 w-6"></span>
          <span class="block border-b-2 border-current my-1 w-6"></span>
        </button>
        <div
          class="flex-1 hidden space-y-2 w-full lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto"
          data-name="nav-menu"
        >
          <div class="flex flex-col mr-auto lg:flex-row">
            <div onClick={()=>{setState("home")}} class="cursor-pointer hover:text-gray-400 lg:p-4 py-2 text-white">
              Home
            </div>
            <div onClick={()=>{setState("Cars")}} class="cursor-pointer  hover:text-gray-400 lg:p-4 py-2 text-white">
              Our Cars
            </div>
          </div>
          {!connexion && (
            <div class="flex-wrap inline-flex items-center py-1 space-x-2">
            <div
              onClick={()=>{navigate("/login")}}
              class="cursor-pointer border border-primary-500 hover:bg-primary-500 hover:text-white inline-block px-6 py-2 text-primary-500"
            >
              Log In
            </div>
            <div
              onClick={()=>{navigate("/register")}}
              class="bg-primary-500 border border-primary-500 hover:bg-primary-600 inline-block px-6 py-2 text-white"
            >
              Sign Up
            </div>
          </div>
          )}
        </div>
      </nav>
    </div>
  );
}
