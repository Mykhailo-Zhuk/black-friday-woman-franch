"use client";

import { ClipLoader } from "react-spinners";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function InputItem({
  register,
  type,
  formItem,
  placeholder,
}: {
  register: UseFormRegister<FeedbackFormInputs>;
  type: string;
  placeholder: string;
  formItem: "firstName" | "phoneNumber" | "email";
}) {
  return (
    <div className="w-full">
      <Input type={type} placeholder={placeholder} {...register(formItem, { required: true })} />
    </div>
  );
}

function TextareaDefault({
  register,
  formItem,
}: {
  register: UseFormRegister<FeedbackFormInputs>;
  formItem: "message";
}) {
  return (
    <div className="w-full sm:max-w-96">
      <Textarea placeholder="Текстове поле для введення повідомлення" {...register(formItem)} />
    </div>
  );
}

export type FeedbackFormInputs = {
  firstName: string;
  phoneNumber: string;
  email: string;
  message: string;
};

export const errorEmptyText = (
  <span className="text-red-500 text-sm self-start">Це поле є обов&apos;язковим для введення</span>
);

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<FeedbackFormInputs>();

  const onSubmit: SubmitHandler<FeedbackFormInputs> = async (data) => {
    const newClient = {
      firstName: data.firstName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      message: data.message,
    };

    const response = await fetch("api/send", {
      method: "post",
      body: JSON.stringify(newClient),
    });

    const confirm = await response.json();

    console.log(confirm);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Вашу заявку прийнято, наш менеджер протягом 1 год зв&apos;яжеться з Вами
        </h2>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center mt-6">
      <div className="w-full sm:w-96 flex flex-col gap-1 space-y-6">
        <InputItem register={register} placeholder="Ім'я" type="text" formItem="firstName" />
        {errors.firstName && errorEmptyText}

        <InputItem register={register} placeholder="Телефон" type="text" formItem="phoneNumber" />
        {errors.phoneNumber && errorEmptyText}

        <InputItem register={register} placeholder="E-mail" type="email" formItem="email" />
        {errors.email && errorEmptyText}

        <TextareaDefault register={register} formItem="message" />

        <div className="flex justify-center mt-6">
          <Button
            type="submit"
            className="inline-block text-center max-w-fit px-5 py-2 opacity-90 bg-gradient-to-r from-[#f70202] to-[#9e1b16] text-white text-base font-semibold rounded-lg shadow-2xl transition duration-150 ease-in-out transform hover:opacity-100 hover:scale-95 active:scale-90 focus:scale-95">
            {isSubmitting ? <ClipLoader size={20} /> : "Надіслати"}
          </Button>
        </div>
      </div>
    </form>
  );
}
