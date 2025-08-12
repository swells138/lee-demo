"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  company: z.string().max(0).optional(), // honeypot
});

export default function ContactForm({ defaultMessage = "" } = {}) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { message: defaultMessage },
  });

  useEffect(() => {
    setValue("message", defaultMessage || "");
  }, [defaultMessage, setValue]);

  const onSubmit = async (data) => {
    if (data.company) return;
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    reset({ name: "", email: "", phone: "", message: "" });
    alert("Message sent!");
  };

  const field =
    "w-full rounded-xl border border-black/10 bg-white/90 p-3 shadow-sm outline-none transition focus:ring-2 focus:ring-[#FF0000]/50";

  const label = "block text-sm font-semibold text-gray-800";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="text" tabIndex={-1} aria-hidden="true" className="hidden" {...register("company")} />

      <div>
        <label className={label} htmlFor="name">Name</label>
        <input id="name" {...register("name")} className={field} />
        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className={label} htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} className={field} />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className={label} htmlFor="phone">Phone</label>
        <input id="phone" {...register("phone")} className={field} />
      </div>

      <div>
        <label className={label} htmlFor="message">Message</label>
        <textarea id="message" rows={4} {...register("message")} className={field} />
        {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-xl bg-[#FF0000] px-5 py-3 font-bold text-white shadow hover:shadow-md transition hover:-translate-y-0.5 disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
