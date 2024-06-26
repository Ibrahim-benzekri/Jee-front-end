import React from "react";
import SidebarAdmin from "./SidebarAdmin";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function CarsAdmin() {
  const jwt = localStorage.getItem("customer_jwt");
  const navigation = useNavigate();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["geCars"],
    queryFn: () =>
      axios
        .get(`http://localhost:8081/api/v1/admin/getcars`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        .then((res) => {
          return res.data;
        }),
  });
  if (isLoading) {
    return null;
  }
  return (
    <div className="min-h-screen bg-gray-50/50">
      <SidebarAdmin />
      <div className="p-4 xl:ml-80">
        <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900">
                Cars
              </h6>
            </div>
          </div>
        </nav>
        <div className="mt-12">
          <div className="mb-12 grid gap-y-6 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
            {data
              ? data?.map((item) => (
                  <div
                    className="rounded overflow-hidden shadow-lg flex flex-col"
                    key={item.id}
                  >
                    <div className="relative">
                      <div>
                        <img
                          className="w-full"
                          src={`/${item.imageUrl}`}
                          alt="car"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                      </div>
                      <div>
                        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                          {item.category}
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4 mb-auto h-32 overflow-scroll">
                      <p className="font-medium text-lg inline-block text-indigo-600 mb-2">
                        {item.title}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                      <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                        <svg
                          fill="#000000"
                          viewBox="0 0 59.998 59.998"
                          id="Capa_1"
                          version="1.1"
                          xmlSpace="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="h-5 w-5"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <path d="M59.206,0.293c-0.391-0.391-1.023-0.391-1.414,0L54.085,4H30.802L1.532,33.511c-0.666,0.666-1.033,1.553-1.033,2.495 s0.367,1.829,1.033,2.495l20.466,20.466c0.687,0.687,1.588,1.031,2.491,1.031c0.907,0,1.814-0.347,2.509-1.041l28.501-29.271V5.414 l3.707-3.707C59.597,1.316,59.597,0.684,59.206,0.293z M53.499,28.874L25.574,57.553c-0.596,0.596-1.566,0.596-2.162,0 L2.946,37.087c-0.596-0.596-0.596-1.566,0.003-2.165L31.636,6h20.449l-4.833,4.833C46.461,10.309,45.516,10,44.499,10 c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5c0-1.017-0.309-1.962-0.833-2.753l4.833-4.833V28.874z M47.499,15 c0,1.654-1.346,3-3,3s-3-1.346-3-3s1.346-3,3-3c0.462,0,0.894,0.114,1.285,0.301l-1.992,1.992c-0.391,0.391-0.391,1.023,0,1.414 C43.987,15.902,44.243,16,44.499,16s0.512-0.098,0.707-0.293l1.992-1.992C47.386,14.106,47.499,14.538,47.499,15z"></path>{" "}
                              <path d="M42.246,31.281L31.64,41.888c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293 s0.512-0.098,0.707-0.293L43.66,32.695c0.391-0.391,0.391-1.023,0-1.414S42.637,30.891,42.246,31.281z"></path>{" "}
                              <path d="M45.779,27.74c-0.181,0.189-0.29,0.449-0.29,0.71c0,0.27,0.109,0.529,0.29,0.71c0.189,0.189,0.449,0.29,0.71,0.29 c0.26,0,0.52-0.101,0.699-0.29c0.19-0.181,0.301-0.44,0.301-0.71c0-0.261-0.11-0.521-0.301-0.71 C46.818,27.37,46.159,27.37,45.779,27.74z"></path>{" "}
                              <path d="M37.296,19.26c0.391-0.391,0.391-1.023,0-1.414c-0.391-0.391-1.023-0.391-1.414,0L25.275,28.453 c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293L37.296,19.26z"></path>{" "}
                              <path d="M33.761,31.281c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l7.071-7.071c0.391-0.391,0.391-1.023,0-1.414 s-1.023-0.391-1.414,0l-7.071,7.071C33.37,30.258,33.37,30.891,33.761,31.281z"></path>{" "}
                              <path d="M28.104,35.523l-1.414,1.414c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293 s0.512-0.098,0.707-0.293l1.414-1.414c0.391-0.391,0.391-1.023,0-1.414S28.494,35.133,28.104,35.523z"></path>{" "}
                              <path d="M17.497,28.745c0.256,0,0.512-0.098,0.707-0.293l10.606-10.606c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0 L16.79,27.038c-0.391,0.391-0.391,1.023,0,1.414C16.985,28.647,17.241,28.745,17.497,28.745z"></path>{" "}
                              <path d="M31.639,14.6c0.26,0,0.521-0.1,0.71-0.29c0.181-0.189,0.29-0.439,0.29-0.71c0-0.26-0.109-0.52-0.3-0.71 c-0.37-0.37-1.03-0.37-1.41,0.01c-0.18,0.181-0.29,0.44-0.29,0.7s0.11,0.521,0.29,0.71C31.119,14.5,31.379,14.6,31.639,14.6z"></path>{" "}
                              <path d="M22.449,31.28c-0.19,0.189-0.29,0.439-0.29,0.71c0,0.27,0.1,0.52,0.29,0.699c0.18,0.19,0.439,0.301,0.71,0.301 c0.26,0,0.52-0.11,0.699-0.29c0.19-0.19,0.301-0.45,0.301-0.71c0-0.261-0.11-0.521-0.301-0.71 C23.489,30.91,22.818,30.91,22.449,31.28z"></path>{" "}
                              <path d="M32.349,34.109c0.181-0.18,0.29-0.439,0.29-0.71c0-0.26-0.109-0.52-0.29-0.71c-0.38-0.37-1.04-0.37-1.42,0 c-0.18,0.19-0.29,0.45-0.29,0.71c0,0.271,0.11,0.521,0.29,0.71c0.19,0.19,0.45,0.29,0.71,0.29S32.159,34.3,32.349,34.109z"></path>{" "}
                              <path d="M24.651,47.627c0.615-0.929,0.909-2.041,0.814-3.172c-0.078-0.944-0.533-1.797-1.28-2.403 c-0.765-0.619-1.769-0.903-2.738-0.781l-2.802,0.35l-3.846-3.846c1.114-0.529,2.485-0.344,3.406,0.577 c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414c-1.707-1.707-4.352-1.918-6.293-0.635l-0.779-0.779 c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.781,0.781c-0.614,0.928-0.908,2.041-0.813,3.172 c0.078,0.943,0.533,1.797,1.279,2.402c0.765,0.619,1.763,0.904,2.739,0.783l2.802-0.35l3.836,3.836 c-1.111,0.501-2.51,0.318-3.396-0.568c-0.391-0.391-1.023-0.391-1.414,0c-0.391,0.39-0.391,1.023,0,1.414 c0.943,0.944,2.199,1.465,3.535,1.465c0.996,0,1.946-0.291,2.757-0.829l0.622,0.622c0.195,0.195,0.451,0.293,0.707,0.293 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L24.651,47.627z M14.871,42.092c-0.438,0.054-0.889-0.072-1.231-0.352 c-0.319-0.26-0.514-0.62-0.547-1.016c-0.044-0.536,0.07-1.059,0.295-1.532l2.742,2.742L14.871,42.092z M21.695,43.255 c0.433-0.059,0.886,0.072,1.229,0.351c0.32,0.26,0.515,0.62,0.548,1.016c0.044,0.536-0.07,1.059-0.296,1.532l-2.741-2.741 L21.695,43.255z"></path>{" "}
                            </g>{" "}
                            <g></g> <g></g> <g></g> <g></g> <g></g> <g></g>{" "}
                            <g></g> <g></g> <g></g> <g></g> <g></g> <g></g>{" "}
                            <g></g> <g></g> <g></g>{" "}
                          </g>
                        </svg>
                        <span className="ml-1">{item.price}$/day</span>
                      </span>

                      <span className="mx-3 py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                        <svg
                          fill="#000000"
                          height="200px"
                          width="200px"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 512.002 512.002"
                          xmlSpace="preserve"
                          className="h-5 w-5"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M512,241.759c0-6.773-5.491-12.265-12.264-12.265h-33.798c-6.773,0-12.265,5.491-12.265,12.265v15.183l-2.525,2.664 l-18.51-99.233c-1.208-6.479-6.863-11.175-13.452-11.175H224.983l12.715,27.369h40.115c-1.84,2.984-1.648,5.463-1.648,7.588 c0,6.107,4.95,11.057,11.057,11.057h35.305c6.107,0,11.056-4.95,11.056-11.057c0-2.052,0.208-4.576-1.648-7.588h75.884 l17.283,92.655h-20.211c-1.656-23.473-21.269-42.4-45.156-42.4s-43.499,18.926-45.155,42.4c-104.544,0.118-129.936,0-129.936,0 l4.366-23.408L172,249.479c0,8.674,0,67.324,0,75.724c5.158-5.325,12.377-8.64,20.374-8.64c15.807,0,28.376,12.865,28.376,28.393 c0,15.681-12.704,28.393-28.376,28.393c-7.996,0-15.216-3.315-20.374-8.64v106.731c5.682,4.95,13.104,7.955,21.232,7.955 c17.864,0,32.346-14.482,32.346-32.346v-29.031h29.226v10.964c0,6.125,4.965,11.09,11.09,11.09h77.958 c6.124,0,11.09-4.965,11.09-11.09v-10.964h29.226v29.031c0,17.864,14.482,32.346,32.346,32.346 c17.864,0,32.346-14.482,32.346-32.346v-29.031h6.303c11.969,0,21.672-9.703,21.672-21.673v-69.55 c0-17.336-7.629-32.881-19.699-43.494l12.606-13.292h29.995c6.773,0,12.264-5.491,12.264-12.265v-15.987H512z M336.78,395.292 h-63.817c-5.542,0-10.035-4.492-10.035-10.035c0-5.542,4.492-10.035,10.035-10.035h63.817c5.542,0,10.035,4.492,10.035,10.035 C346.815,390.8,342.323,395.292,336.78,395.292z M353.827,355.952h-97.911c-5.542,0-10.035-4.492-10.035-10.035 c0-5.542,4.492-10.035,10.035-10.035h97.911c5.542,0,10.035,4.492,10.035,10.035C363.862,351.46,359.369,355.952,353.827,355.952z M337.516,269.221c1.568-10.871,10.919-19.592,22.217-19.592c11.299,0,20.65,8.72,22.218,19.592H337.516z M417.372,373.349 c-15.672,0-28.376-12.712-28.376-28.393c0-15.54,12.584-28.393,28.376-28.393c15.672,0,28.376,12.712,28.376,28.393 C445.747,360.524,433.134,373.349,417.372,373.349z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M151.523,253.889l-9.378,2.02c-10.245,2.209-20.736,0.062-29.239-5.773c-3.183,1.588-6.703,2.421-10.268,2.421 c-8.147,0-15.762-4.367-19.875-11.396l-35.311-60.353c0,0,0.009,297.07,0.009,298.987c0,13.022,10.555,23.577,23.577,23.577 c13.022,0,23.577-10.555,23.577-23.577V291.341h10.18v188.453c0,13.022,10.555,23.577,23.577,23.577 c13.022,0,23.577-10.555,23.577-23.577C151.95,479.796,151.523,264.459,151.523,253.889z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M228.73,197.721c-0.526-1.134-30.225-64.724-30.225-64.724c-8.599-18.188-27.154-29.941-47.273-29.941H46.859 c-25.509,0-46.729,20.753-46.858,46.263v144.342c-0.055,10.851,8.335,19.691,19.186,19.746c0.033,0,0.067,0,0.1,0 c10.804,0,20.074-8.731,20.128-19.549V149.516v-0.002c0.011-2.148,2.001-3.883,4.151-3.877c2.148,0.006,3.887,1.75,3.887,3.899 v6.591h0.001c3.927-6.209,4.514-5.613,46.619-30.247c10.971-6.419,25.083-2.714,31.494,8.245l1.74,2.975 c11.62-6.798,25.377-3.895,32.774,8.748c7.103,12.141,2.532,3.165,21.357,42.986l-51.362,11.067 c-10.608,2.286-17.353,12.737-15.069,23.345c2.286,10.608,12.738,17.353,23.345,15.069l75.568-16.283 C224.653,219.719,231.71,208.811,228.73,197.721z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <circle
                                  cx="99.7"
                                  cy="49.351"
                                  r="40.72"
                                ></circle>{" "}
                              </g>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M96.591,217.527l-15.598-26.661c-6.425-10.982-2.738-25.069,8.245-31.494l23.634-13.828l-1.74-2.975 c-1.756-3.003-5.614-4.01-8.614-2.254l-38.803,22.702c-3.001,1.756-4.01,5.613-2.254,8.614l35.739,61.085 c0.728,1.245,1.819,2.146,3.058,2.65c-1.243-2.602-2.212-5.386-2.846-8.33C96.722,223.84,96.463,220.65,96.591,217.527z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M145.1,153.36c-1.755-3-5.612-4.012-8.614-2.254l-38.803,22.702c-3.001,1.756-4.01,5.613-2.254,8.614l8.437,14.42 c5.255-7.168,13.047-12.519,22.419-14.539l31.746-6.84L145.1,153.36z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                        <span className="ml-1">
                          {item.reservationRate} Reservations
                        </span>
                      </span>
                      <span className="mx-3 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                        <div className="flex flex-col items-center justify-center">
                          <button
                            className="mb-2 text-white bg-green-600 p-1 rounded-md w-11 text-center"
                            onClick={() => navigation(`/admin/cars/${item.id}`)}
                          >
                            Edit
                          </button>
                          <Link
                            className="text-white bg-red-600 p-1 rounded-md w-11 text-center"
                            onClick={() => {
                              axios
                                .delete(
                                  `http://localhost:8081/api/v1/admin/delete/${item.id}`,
                                  {
                                    headers: {
                                      Authorization: `Bearer ${jwt}`,
                                    },
                                  }
                                )
                                .then((res) => refetch());
                            }}
                          >
                            Delete
                          </Link>
                        </div>
                      </span>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
