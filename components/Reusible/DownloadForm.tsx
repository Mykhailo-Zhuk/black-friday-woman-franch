"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

const DownloadForm = ({
  fileUrl,
  onClose,
  type,
}: {
  fileUrl: string;
  onClose: () => void;
  type: string;
}) => {
  const [greetingMessage, setGreetingMessage] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setGreetingMessage(`Дякую, ${data.firstName}! Завантаження розпочнеться найближчим часом.`);

    const newClient = {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      type,
    };

    const response = await fetch("api/send", {
      method: "post",
      body: JSON.stringify(newClient),
    });

    const confirm = await response.json();

    console.log(confirm);
    reset();

    setTimeout(() => {
      onClose();
    }, 1000);

    setTimeout(() => {
      window.open(fileUrl, "_blank");
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      {!isSubmitted && (
        <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-gray-700">Ім&apos;я</label>
            <input
              type="text"
              {...register("firstName", { required: "Це поле обов'язкове для заповнення" })}
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700">Прізвище</label>
            <input
              type="text"
              {...register("lastName", { required: "Це поле обов'язкове для заповнення" })}
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700">Номер телефону</label>
            <input
              type="tel"
              {...register("phoneNumber", { required: "Це поле обов'язкове для заповнення" })}
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: "Це поле обов'язкове для заповнення" })}
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              disabled={!isValid}
              className={`inline-block text-center max-w-full px-5 py-2 text-white text-base font-semibold rounded-lg shadow-2xl transition duration-150 ease-in-out transform ${
                isValid
                  ? "bg-gradient-to-r from-[#f70202] to-[#9e1b16] opacity-100 hover:scale-95 active:scale-90 focus:scale-95"
                  : "bg-gray-400 cursor-not-allowed opacity-70"
              }`}>
              Завантажити
            </button>
          </div>
        </form>
      )}
      {greetingMessage && (
        <p className="mt-4 text-center text-green-600 font-semibold">{greetingMessage}</p>
      )}
    </div>
  );
};

export default DownloadForm;
