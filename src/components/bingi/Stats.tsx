const stats = [
  { value: "10K+", label: "Bookings" },
  { value: "106K+", label: "Verified Users" },
  { value: "50+", label: "Countries Covered" },
];

export function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-extrabold tracking-tight md:text-6xl">
          Trusted by <span className="text-primary">Travelers</span> Across Africa
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-5xl font-extrabold text-primary md:text-6xl">{s.value}</div>
              <div className="mt-2 text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}