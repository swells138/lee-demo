"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm({
  defaultMessage = "",
}: {
  defaultMessage?: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { message: defaultMessage },
  });

  const onSubmit = async (data: FormData) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    reset();
    alert("Message sent!");
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
        <label className="block font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full rounded border p-2"
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded bg-[#FF0000] px-4 py-2 font-bold text-white hover:bg-[#cc0000] disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
