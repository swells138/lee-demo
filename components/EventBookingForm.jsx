"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  date: z.string().min(1, "Event date is required"),
  details: z.string().min(1, "Please provide event details"),
});

export default function EventBookingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, message: data.details }),
    });
    reset();
    alert("Booking request sent!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-semibold" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full rounded border p-2"
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="block font-semibold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded border p-2"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="block font-semibold" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          {...register("phone")}
          className="w-full rounded border p-2"
        />
      </div>
      <div>
        <label className="block font-semibold" htmlFor="date">
          Event Date
        </label>
        <input
          id="date"
          type="date"
          {...register("date")}
          className="w-full rounded border p-2"
        />
        {errors.date && (
          <p className="text-sm text-red-600">{errors.date.message}</p>
        )}
      </div>
      <div>
        <label className="block font-semibold" htmlFor="details">
          Event Details
        </label>
        <textarea
          id="details"
          rows={4}
          {...register("details")}
          className="w-full rounded border p-2"
        />
        {errors.details && (
          <p className="text-sm text-red-600">{errors.details.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded bg-[#FF0000] px-4 py-2 font-bold text-white hover:bg-[#cc0000] disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Book Event"}
      </button>
    </form>
  );
}
