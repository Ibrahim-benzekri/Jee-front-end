import axios from "axios";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarAdmin() {
  const pathName = useLocation().pathname;
  const handleLogout = () => {
    const refreshToken = localStorage.getItem("refresh_token");
    axios
      .post(
        `http://localhost:8081/api/v1/form/logout?refresh_token=${refreshToken}`
      )
      .then((res) => {
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("customer_jwt");
        window.location.href = "/";
      });
  };
  return (
    <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
      <div className="relative border-b border-white/20">
        <Link className="flex items-center gap-4 py-6 px-8" to="/home">
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
            PRIME DRIVE
          </h6>
        </Link>
        <button
          className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
          <li>
            <Link className="" to="/admin">
              <button
                className={
                  pathName === "/admin"
                    ? "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                    : "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                }
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  dashboard
                </p>
              </button>
            </Link>
          </li>
          <li>
            <Link className="" to="/admin/cars">
              <button
                className={
                  pathName.startsWith("/admin/cars")
                    ? "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                    : "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                }
                type="button"
              >
                <svg
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#ffffff"
                  className="w-5 h-5 text-white"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>car_2_line</title>{" "}
                    <g
                      id="页面-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Transport"
                        transform="translate(-240.000000, 0.000000)"
                        fill-rule="nonzero"
                      >
                        {" "}
                        <g
                          id="car_2_line"
                          transform="translate(240.000000, 0.000000)"
                        >
                          {" "}
                          <path
                            d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                            id="MingCute"
                            fill-rule="nonzero"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M16.4197,4 C17.0821923,4 17.6978207,4.32768095 18.068695,4.86821775 L18.1562,5.00772 L21.7365,11.2733 C21.8804167,11.5251333 21.9674583,11.8046056 21.9924745,12.0922144 L22,12.2656 L22,16.7639 C22,17.0123 21.953728,17.257948 21.8641536,17.4885048 L21.7889,17.6584 L20.6708,19.8944 C20.3562,20.5236 19.736624,20.9375837 19.0432213,20.993514 L18.882,21 L17,21 C15.9456091,21 15.0818322,20.18415 15.0054856,19.1492661 L15,19 L9,19 C9,20.0543909 8.18412267,20.9181678 7.14926241,20.9945144 L7,21 L5.11803,21 C4.4146,21 3.76722454,20.6309592 3.40708503,20.0357146 L3.32918,19.8944 L2.21115,17.6584 C2.100062,17.43616 2.0315788,17.195744 2.00862904,16.9494912 L2,16.7639 L2,12.2656 C2,11.9755167 2.06307639,11.6896694 2.18403241,11.4275606 L2.26351,11.2733 L5.84384,5.00772 C6.17252923,4.43250462 6.76247195,4.06057633 7.41578582,4.00676024 L7.58032,4 L16.4197,4 Z M16.4197,6 L7.58032,6 L4,12.2656 L4,16.7639 L5.11803,19 L7,19 L7,18.1 C7,17.533 7.42901351,17.0661778 7.98014344,17.0064548 L8.1,17 L15.9,17 C16.467,17 16.9338222,17.4290222 16.9935452,17.9801452 L17,18.1 L17,19 L18.882,19 L20,16.7639 L20,12.2656 L16.4197,6 Z M16.5545,11.1047 C17.0482,10.8591 17.6477,11.0594 17.8944,11.5528 C18.1392,12.0422 17.9325,12.6509 17.4461,12.895 C15.8024,13.7145 13.8097,14 12,14 C10.1543,14 8.22949,13.7177 6.55847,12.8973 C6.07273,12.6566 5.86273,12.0385 6.10557,11.5528 C6.33730429,11.08935 6.87446296,10.9002663 7.34571779,11.0642535 L7.61306729,11.1790741 L7.61306729,11.1790741 L7.85733656,11.2762313 L7.85733656,11.2762313 L8.07586815,11.3555479 L8.07586815,11.3555479 L8.3367623,11.4424691 L8.3367623,11.4424691 L8.63814549,11.5335391 L8.63814549,11.5335391 L8.97814421,11.6253022 L8.97814421,11.6253022 L9.35488495,11.7143029 L9.35488495,11.7143029 L9.7664942,11.7970853 C10.4091227,11.9148673 11.1631093,12 12,12 C13.5159,12 15.1687,11.7683 16.5545,11.1047 Z"
                            id="形状"
                            fill="#ffffff"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  cars
                </p>
              </button>
            </Link>
          </li>
          <li>
            <Link className="" to="/admin/add">
              <button
                className={
                  pathName === "/admin/add"
                    ? "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                    : "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                }
                type="button"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="Edit / Add_Plus_Circle">
                      {" "}
                      <path
                        id="Vector"
                        d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  new car
                </p>
              </button>
            </Link>
          </li>
        </ul>
        <ul className="mb-4 flex flex-col gap-1">
          <li className="mx-3.5 mt-4 mb-2">
            <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">
              <hr />
            </p>
          </li>
          <li>
            <a className="" onClick={handleLogout}>
              <button
                className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  log out
                </p>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
