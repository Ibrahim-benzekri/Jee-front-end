import React, { useState } from "react";
import SidebarAdmin from "./SidebarAdmin";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function EditCarsAdmin() {
  const jwt = localStorage.getItem("customer_jwt");
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
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

  const { data, isLoading } = useQuery({
    queryKey: ["geCars"],
    queryFn: () =>
      axios
        .get(`http://localhost:8081/api/v1/admin/${id}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        .then((res) => {
          setTitle(res.data.title);
          setDescription(res.data.description);
          setPrice(res.data.price);
          setCategory(res.data.category);
          console.log(res.data);
          return res.data;
        }),
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.put(`http://localhost:8081/api/v1/admin/edit/${id}`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
    },
    onMutate: (variables) => {
      console.log("editing...");
    },
    onSuccess: (data, variables, context) => {
      console.log("car edited");
      window.location.href = "/admin/cars";
    },
    onError: (err, variables, context) => {
      console.log(err.message);
    },
  });

  if (isLoading) {
    return null;
  }

  const mySubmit = (data) => {
    mutation.mutate(data);
  };
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
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
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
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
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
                      value={price}
                      onChange={(event) => setPrice(event.target.value)}
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
    </div>
  );
}
