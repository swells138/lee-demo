"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ✅ Validation (honeypot must be empty if present)
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  company: z.string().max(0, "Do not fill this field").optional(), // honeypot
});

export default function ContactForm({ defaultMessage = "" } = {}) {
  const [status, setStatus] = useState({ ok: null, msg: "" });

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
    // Honeypot check: bots often fill hidden fields
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
          message: data.message,
          // Optional extras you can enable in Formspree settings:
          // _subject: `New contact form submission from ${data.name}`,
          // _replyto: data.email,
        }),
      });

      // Formspree returns 200/OK on success with JSON
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Submission failed");
      }

      reset({ name: "", email: "", phone: "", message: "", company: "" });
      setStatus({ ok: true, msg: "Thanks! Your message has been sent." });
    } catch (err) {
      setStatus({
        ok: false,
        msg:
          "Something went wrong sending your message. Please try again or email me directly.",
      });
      // Optional: console.error(err);
    }
  };

  const field =
    "w-full rounded-xl border border-black/10 bg-white/90 p-3 shadow-sm outline-none transition focus:ring-2 focus:ring-[#FF0000]/50";
  const label = "block text-sm font-semibold text-gray-800";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot (keep it in the DOM so bots see it, but hidden for humans) */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        autoComplete="off"
        {...register("company")}
      />

      <div>
        <label className={label} htmlFor="name">
          Name
        </label>
        <input id="name" {...register("name")} className={field} />
        {errors.name && (
          <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className={label} htmlFor="email">
          Email
        </label>
        <input id="email" type="email" {...register("email")} className={field} />
        {errors.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className={label} htmlFor="phone">
          Phone
        </label>
        <input id="phone" {...register("phone")} className={field} />
      </div>

      <div>
        <label className={label} htmlFor="message">
          Message
        </label>
        <textarea id="message" rows={4} {...register("message")} className={field} />
        {errors.message && (
          <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-xl bg-[#FF0000] px-5 py-3 font-bold text-white shadow hover:shadow-md transition hover:-translate-y-0.5 disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>

      {/* Inline status feedback */}
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
