"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  date: z.string().min(1, "Event date is required"),
  details: z.string().min(1, "Please provide event details"),
  company: z.string().max(0, "Do not fill this field").optional(), // honeypot
});

export default function EventBookingForm() {
  const [status, setStatus] = useState({ ok: null, msg: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    // bot trap
    if (data.company) return;

    setStatus({ ok: null, msg: "" });

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || "",
          date: data.date,
          details: data.details,
          // Optional extras (enable in Formspree settings if desired):
          // _subject: `New event booking from ${data.name}`,
          // _replyto: data.email,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Submission failed");
      }

      reset();
      setStatus({ ok: true, msg: "Thanks! Your booking request has been sent." });
    } catch (e) {
      setStatus({
        ok: false,
        msg:
          "Sorry—something went wrong sending your request. Please try again or email me directly.",
      });
    }
  };

  const field =
    "w-full rounded-xl border border-black/10 bg-white/90 p-3 shadow-sm outline-none transition focus:ring-2 focus:ring-[#FF0000]/50";
  const label = "block text-sm font-semibold text-gray-800";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* honeypot (keep in DOM, hidden for users) */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        autoComplete="off"
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

      {/* Inline status */}
      {status.ok === true && (
        <p className="text-sm mt-2 text-green-700" role="status">
          {status.msg}
        </p>
      )}
      {status.ok === false && (
        <p className="text-sm mt-2 text-red-700" role="status">
          {status.msg}
        </p>
      )}
    </form>
  );
}
