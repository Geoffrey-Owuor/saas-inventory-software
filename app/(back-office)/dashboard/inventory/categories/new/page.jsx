"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import TextInput from "@/components/dashboard/FormInputs/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";

import SubmitButton from "@/components/dashboard/FormInputs/SubmitButton";
import TextAreaInput from "@/components/dashboard/FormInputs/TextAreaInput";

export default function NewCategory() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div>
      <FormHeader title="Category" href="/dashboard/inventory" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto my-3 w-full max-w-4xl rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 md:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextAreaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton isLoading={isLoading} title="Category" />
      </form>
    </div>
  );
}
