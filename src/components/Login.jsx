import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export default function Login() {
  const schema = yup.object().shape({
    email: yup.string().trim().email().required(),
    password: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(
        "http://localhost:8081/api/v1/form/login",
        new URLSearchParams(data).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    },
    onMutate: (variables) => {
      document.getElementById("loader").classList.remove("hidden");
      console.log("login...");
    },
    onSuccess: (data, variables, context) => {
      console.log("logged in");
      localStorage.setItem("customer_jwt", data.data.access_token);
      localStorage.setItem("refresh_token", data.data.refresh_token);
      document.getElementById("loader").classList.add("hidden");
    },
    onError: (err, variables, context) => {
      document.getElementById("loader").classList.add("hidden");
      document.getElementById("errorpopup").classList.remove("hidden");
      console.log(err.message);
    },
  });
  const mySubmit = (data) => {
    mutation.mutate(data);
  };
  return (
    <div className="h-full bg-black">
      <div
        className="absolute flex items-center justify-center w-full h-[105vh] text-gray-100 bg-gray-950 bg-opacity-70 hidden"
        id="loader"
      >
        <div>
          <h1 className="text-xl md:text-7xl font-bold flex items-center">
            L
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="animate-spin"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"></path>
            </svg>
            ading . . .
          </h1>
        </div>
      </div>
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-black lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1614677226679-65914249d479?q=80&w=2119&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            ></div>
            <div className="w-full lg:w-7/12 bg-gradient-to-r from-red-500 to-red-600 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-black font-bold">
                Login!
              </h3>
              <div
                className="bg-red-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg hidden"
                id="errorpopup"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                >
                  <path
                    fill="currentColor"
                    d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                  ></path>
                </svg>
                <span className="text-red-800">
                  An error occurred, please try again.
                </span>
              </div>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleSubmit(mySubmit)}
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className={
                      errors.email
                        ? "w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        : "w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    }
                    id="email"
                    type="text"
                    placeholder="Email"
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="text-xs italic text-red-500">
                      Please enter a valid email.
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className={
                      errors.password
                        ? "w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        : "w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    }
                    id="password"
                    type="password"
                    placeholder="******************"
                    {...register("password")}
                  />
                  {errors.password ? (
                    <p className="text-xs italic text-red-500">
                      Please enter a valid password.
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <span>Don't have an account? </span>
                  <a
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800 font-bold"
                    href="#"
                  >
                    Sign Up!
                  </a>
                </div>
              </form>
              <div className="h-32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
