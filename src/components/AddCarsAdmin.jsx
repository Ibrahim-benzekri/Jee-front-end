import React from "react";
import SidebarAdmin from "./SidebarAdmin";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddCarsAdmin() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup.string().trim().required(),
    description: yup.string().trim().required(),
    price: yup.number().positive().required(),
    category: yup.string().trim().required(),
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
      return axios.post(`http://localhost:8081/api/v1/admin/new-car`, data);
    },
    onMutate: (variables) => {
      console.log("adding...");
    },
    onSuccess: (data, variables, context) => {
      console.log("car added");
      navigate("/admin/cars");
    },
    onError: (err, variables, context) => {
      console.log(err.message);
    },
  });

  const mySubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    mutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <SidebarAdmin />
      <div className="p-4 xl:ml-80">
        <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900">
                add new car
              </h6>
            </div>
          </div>
        </nav>
        <div className="mt-12">
          <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-[550px] bg-white p-5 rounded-md">
              <form onSubmit={handleSubmit(mySubmit)}>
                <div className="mb-5">
                  <label
                    for="title"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Title
                  </label>
                  <input
                    {...register("title")}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="ex. Mercedes..."
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="description"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Description
                  </label>
                  <textarea
                    {...register("description")}
                    name="description"
                    id="description"
                    placeholder="Enter A Brief Description For The Car..."
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="price"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Price
                  </label>
                  <input
                    {...register("price")}
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Enter The Price In USD..."
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="mb-5">
                  <label
                    for="category"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Category
                  </label>
                  <select
                    {...register("category")}
                    name="category"
                    id="category"
                    placeholder="Enter The Price In USD..."
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value={"Sedan"}>Sedan</option>
                    <option value={"SUV"}>SUV</option>
                    <option value={"Convertible"}>Convertible</option>
                    <option value={"Sport"}>Sport</option>
                  </select>
                </div>
                <div className="mb-5">
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      {...register("image")}
                      type="file"
                      onchange="loadFile(event)"
                      className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
                    />
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  >
                    Save Car
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
