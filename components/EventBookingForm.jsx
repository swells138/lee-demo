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
  company: z.string().max(0).optional(), // honeypot
});

export default function EventBookingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    if (data.company) return; // bot trap
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, message: data.details }),
    });
    reset();
    alert("Booking request sent!");
  };

  const field =
    "w-full rounded-xl border border-black/10 bg-white/90 p-3 shadow-sm outline-none transition focus:ring-2 focus:ring-[#FF0000]/50";
  const label = "block text-sm font-semibold text-gray-800";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* honeypot */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        {...register("company")}
      />

      <div>
        <label className={label} htmlFor="name">Name</label>
        <input id="name" {...register("name")} className={field} />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label className={label} htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} className={field} />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label className={label} htmlFor="phone">Phone</label>
        <input id="phone" {...register("phone")} className={field} />
      </div>

      <div>
        <label className={label} htmlFor="date">Event Date</label>
        <input id="date" type="date" {...register("date")} className={field} />
        {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>}
      </div>

      <div>
        <label className={label} htmlFor="details">Event Details</label>
        <textarea id="details" rows={4} {...register("details")} className={field} />
        {errors.details && <p className="mt-1 text-sm text-red-600">{errors.details.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-xl bg-[#FF0000] px-5 py-3 font-bold text-white shadow hover:shadow-md transition hover:-translate-y-0.5 disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Book Event"}
      </button>
    </form>
  );
}
