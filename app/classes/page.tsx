import ClassSignupForm from "@/components/ClassSignupForm";

export default function Classes() {
  const schedule = [
    { date: "2025-06-01", location: "Dayton, OH" },
    { date: "2025-07-15", location: "Columbus, OH" },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-4">
      <h1 className="text-3xl font-bold text-[#FF0000]">ServSafe Classes</h1>
      <p>
        Join our certified ServSafe courses to ensure your team meets food safety
        standards.
      </p>
      <h2 className="text-2xl font-bold">Upcoming Schedule</h2>
      <ul className="list-disc pl-5">
        {schedule.map((s) => (
          <li key={s.date}>
            {s.date} - {s.location}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold">Sign Up</h2>
      <ClassSignupForm />
    </div>
  );
}
